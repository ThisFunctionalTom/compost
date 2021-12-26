module main

open Compost
open Compost.Html
open Browser

module Helpers = 
  let formatValue v = 
    match v with 
    | CAR(CA c, r) -> box [| box c; box r |]
    | COV(CO v) -> box v

  let parseValue v = 
    if Common.isNumber(v) then COV(CO(unbox<float> v))
    elif Common.isArray(v) then 
      let a = unbox<obj[]> v
      if a.Length <> 2 then failwithf "Cannot parse value: %A. Expected a number or an array with two elements." a
      if not (Common.isNumber(a.[1])) then failwithf "Cannot parse value: %A. The second element should be a number." a
      CAR(CA (unbox<string> a.[0]), unbox<float> a.[1])
    else failwithf "Cannot parse value: %A. Expected a number or an array with two elements." v

open Helpers

type JsScale = 
  abstract continuous : float * float -> Scale<1>
  abstract categorical : string[] -> Scale<1>

type JsCompost =
  abstract nestX : obj * obj * Shape<1, 1> -> Shape<1, 1>
  abstract nestY : obj * obj * Shape<1, 1> -> Shape<1, 1>
  abstract nest : obj * obj * obj * obj * Shape<1, 1> -> Shape<1, 1>
  abstract scaleX : Scale<1> * Shape<1, 1> -> Shape<1, 1>
  abstract scaleY : Scale<1> * Shape<1, 1> -> Shape<1, 1>
  abstract scale : Scale<1> * Scale<1> * Shape<1, 1> -> Shape<1, 1>
  abstract overlay : Shape<1, 1>[] -> Shape<1, 1>
  abstract fillColor : string * Shape<1, 1> -> Shape<1, 1>
  abstract strokeColor : string * Shape<1, 1> -> Shape<1, 1>
  abstract font : string * string * Shape<1, 1> -> Shape<1, 1>
  abstract padding : float * float * float * float * Shape<1, 1> -> Shape<1, 1>
  abstract text : obj * obj * string * string * float -> Shape<1, 1>
  abstract column : string * float -> Shape<1, 1>
  abstract bar : float * string -> Shape<1, 1>
  abstract bubble : obj * obj * float * float -> Shape<1, 1>
  abstract shape : obj[][] -> Shape<1, 1>
  abstract line : obj[][] -> Shape<1, 1>
  abstract on : obj * Shape<1, 1> -> Shape<1, 1>
  abstract axes : string * Shape<1, 1> -> Shape<1, 1>
  abstract render : string * Shape<1, 1> -> unit
  abstract svg : float * float * Shape<1, 1> -> DomNode
  abstract html : string * obj * DomNode[] -> DomNode
  abstract interactive<'e, 's> : string * 's * ('s -> 'e -> 's) * (('e -> unit) -> 's -> Shape<1, 1>) -> unit

let x : Scale<1> = Continuous(CO 1., CO 2.)

let scale = 
  { new JsScale with 
      member x.continuous(lo, hi) = Continuous(CO lo, CO hi) 
      member x.categorical(cats) = Categorical [| for c in cats -> CA c |] }
  
let compost = 
  { new JsCompost with
      member x.scaleX(sc, sh) = Shape.InnerScale(Some(sc), None, sh) 
      member x.scaleY(sc, sh) = Shape.InnerScale(None, Some(sc), sh) 
      member x.scale(sx, sy, sh) = Shape.InnerScale(Some(sx), Some(sy), sh) 
      member x.nestX(lx, hx, s) = Shape.NestX(parseValue lx, parseValue hx, s)
      member x.nestY(ly, hy, s) = Shape.NestY(parseValue ly, parseValue hy, s)
      member x.nest(lx, hx, ly, hy, s) = Shape.NestY(parseValue ly, parseValue hy, Shape.NestX(parseValue lx, parseValue hx, s))
      member x.overlay(sh) = Shape.Layered(List.ofArray sh) 
      member x.padding(t, r, b, l, s) = Shape.Padding((t, r, b, l), s)
      member x.fillColor(c, s) = Derived.FillColor(c, s) 
      member x.strokeColor(c, s) = Derived.StrokeColor(c, s) 
      member x.font(f, c, s) = Derived.Font(f, c, s) 
      member x.column(xp, yp) = Derived.Column(CA xp, CO yp)
      member x.bar(xp, yp) = Derived.Bar(CO xp, CA yp)
      member x.bubble(xp, yp, w, h) = Shape.Bubble(parseValue xp, parseValue yp, w, h)
      member x.text(xp, yp, t, s, r) = 
        let r = if box r = null then 0.0 else r
        let s = if box s = null then "" else s
        let va = if s.Contains("baseline") then Baseline elif s.Contains("hanging") then Hanging else Middle
        let ha = if s.Contains("start") then Start elif s.Contains("end") then End else Center
        Shape.Text(parseValue xp, parseValue yp, va, ha, r, t)
      member x.shape(a) = Shape.Shape [ for p in a -> parseValue p.[0], parseValue p.[1] ] 
      member x.line(a) = Shape.Line [ for p in a -> parseValue p.[0], parseValue p.[1] ] 
      member x.axes(a, s) = Shape.Axes(a.Contains("top"), a.Contains("right"), a.Contains("bottom"), a.Contains("left"), s)
      member x.on(o, s) =
        Shape.Interactive
         ([ for k in Common.keys(o) ->
              let f = Common.apply (Common.getProperty o k)
              match k with 
              | "mousedown" -> MouseDown(fun me (x, y) -> f [| box (formatValue x); box (formatValue y); box me |])
              | "mouseup" -> MouseUp(fun me (x, y) -> f [| box (formatValue x); box (formatValue y); box me |])
              | "mousemove" -> MouseMove(fun me (x, y) -> f [| box (formatValue x); box (formatValue y); box me |])
              | "touchstart" -> TouchStart(fun me (x, y) -> f [| box (formatValue x); box (formatValue y); box me |])
              | "touchmove" -> TouchMove(fun me (x, y) -> f [| box (formatValue x); box (formatValue y); box me |])
              | "click"   -> Click(fun me (x, y) -> f [| box (formatValue x); box (formatValue y); box me |])
              | "mouseleave" -> MouseLeave(fun me -> f [| me |])
              | "touchend" -> TouchEnd(fun me -> f [| me |])
              | s -> failwithf "Unsupported event type '%s' passed to the 'on' primitive." s
        ], s)
      member x.svg(w, h, shape) = 
        Compost.createSvg false false (w, h) shape
      member x.html(tag, attrs, children) = 
        let attrs = 
          [| for a in Common.keys(attrs) ->
              let p = Common.getProperty attrs a
              if (Common.typeOf p = "function") then
                a, DomAttribute.Event(fun e h -> 
                  Common.apply p [| box e; box h |])
              else 
                a, DomAttribute.Attribute(unbox p) |]
        let children = children |> Array.map (fun c ->
          if Common.typeOf c = "string" then DomNode.Text(unbox c)
          else c )         
        DomNode.Element(null, tag, attrs, children)
      member x.interactive(id, init, update, render) =
        let render t s =
          let el = document.getElementById(id)
          let res = render t s
          if Common.getProperty res "constructor" = Common.getProperty (DomNode.Text "") "constructor" then
            unbox<DomNode> res
          else 
            Compost.createSvg false false (el.clientWidth, el.clientHeight) res
        Html.createVirtualDomApp id init render update
      member x.render(id, viz) = 
        let el = document.getElementById(id)
        let svg = Compost.createSvg false false (el.clientWidth, el.clientHeight) viz
        svg |> Html.renderTo el }