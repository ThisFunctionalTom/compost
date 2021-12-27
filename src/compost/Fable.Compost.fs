module Fable.Compost

open Browser
open System.Runtime.InteropServices
open Compost
open Compost.Html

[<Struct>]
type Side =
    | Top
    | Right
    | Bottom
    | Left

let formatValue v =
    match v with
    | CAR (CA c, r) -> box [| box c; box r |]
    | COV (CO v) -> box v

type ToValue =
    static member inline ToValue(x: float, [<Optional>] _impl: ToValue) = COV(CO x)
    static member inline ToValue(x: int, [<Optional>] _impl: ToValue) = COV(CO(float x))
    static member inline ToValue((c: string, r: float), [<Optional>] _impl: ToValue) = CAR(CA c, r)
    static member inline ToValue((c: string, r: int), [<Optional>] _impl: ToValue) = CAR(CA c, float r)

    static member inline Invoke value : Value<1> =
        let inline call_2 (a: ^a, b: ^b) =
            ((^a or ^b): (static member ToValue : _ * _ -> _) b, a)

        let inline call (a: 'a, b: 'b) = call_2 (a, b)
        call (Unchecked.defaultof<ToValue>, value)

let inline (!!) x = ToValue.Invoke x

type CatValue = string * float

type ToValues =
    static member inline ToValues(a: seq<float * float>, [<Optional>] _impl: ToValues) =
        printfn $"ToValues: {a} (float*float)"
        [ for x, y in a -> !!x, !!y ]

    static member inline ToValues(a: seq<float * CatValue>, [<Optional>] _impl: ToValues) =
        printfn $"ToValues: {a} (float*CatValue)"
        [ for x, y in a -> !!x, !!y ]

    static member inline ToValues(a: seq<CatValue * float>, [<Optional>] _impl: ToValues) =
        printfn $"ToValues: {a} (CatValue*float)"
        [ for x, y in a -> !!x, !!y ]

    static member inline ToValues(a: seq<CatValue * CatValue>, [<Optional>] _impl: ToValues) =
        printfn $"ToValues: {a} (CatValue*CatValue)"
        [ for x, y in a -> !!x, !!y ]

    static member inline Invoke value : (Value<_> * Value<_>) list =
        let inline call_2 (a: ^a, b: ^b) =
            ((^a or ^b): (static member ToValues : _ * _ -> _) b, a)

        let inline call (a: 'a, b: 'b) = call_2 (a, b)
        call (Unchecked.defaultof<ToValues>, value)

let inline (!!!) x = ToValues.Invoke x

type Scale =
    static member continuous(lo, hi) = Continuous(CO lo, CO hi) 
    static member categorical(cats) = Categorical [| for c in cats -> CA c |]

type Compost =
    static member inline scaleX(sc, sh) = Shape.InnerScale(Some(sc), None, sh)
    static member inline scaleY(sc, sh) = Shape.InnerScale(None, Some(sc), sh)

    static member inline scale(sx, sy, sh) =
        Shape.InnerScale(Some(sx), Some(sy), sh)

    static member inline nestX(lx, hx, s) = Shape.NestX(lx, hx, s)
    static member inline nestY(ly, hy, s) = Shape.NestY(ly, hy, s)

    static member inline nest(lx, hx, ly, hy, s) =
        Shape.NestY(ly, hy, Shape.NestX(lx, hx, s))
    static member inline nest(lx: float, hx: float, ly: float, hy: float, s) =
        Shape.NestY(!!ly, !!hy, Shape.NestX(!!lx, !!hx, s))

    static member inline overlay(sh) = Shape.Layered(sh)
    static member inline padding(t, r, b, l, s) = Shape.Padding((t, r, b, l), s)
    static member inline fillColor(c, s) = Derived.FillColor(c, s)
    static member inline strokeColor(c, s) = Derived.StrokeColor(c, s)
    static member inline font(f, c, s) = Derived.Font(f, c, s)
    static member inline column(xp, yp) = Derived.Column(CA xp, CO yp)
    static member inline bar(xp, yp) = Derived.Bar(CO xp, CA yp)

    static member inline bubble(xp, yp, w, h) = Shape.Bubble(xp, yp, w, h)

    static member inline text(xp: Value<1>, yp: Value<1>, t: string, s: string, r: float) =
        let va =
            if s.Contains("baseline") then Baseline
            elif s.Contains("hanging") then Hanging
            else Middle

        let ha =
            if s.Contains("start") then Start
            elif s.Contains("end") then End
            else Center

        Shape.Text(xp, yp, va, ha, r, t)
    static member inline text(xp: float, yp: float, t, ?s, ?r) =
        Compost.text(!!xp, !!yp, t, defaultArg s "", defaultArg r 0.0)
    static member inline text(xp: float, yp: CatValue, t, ?s, ?r) =
        Compost.text(!!xp, !!yp, t, defaultArg s "", defaultArg r 0.0)
    static member inline text(xp: CatValue, yp: float, t, ?s, ?r) =
        Compost.text(!!xp, !!yp, t, defaultArg s "", defaultArg r 0.0)
    static member inline text(xp: CatValue, yp: CatValue, t, ?s, ?r) =
        Compost.text(!!xp, !!yp, t, defaultArg s "", defaultArg r 0.0)

    static member inline shape(a) = Shape.Shape(a)
    static member inline shape(a: seq<float*float>) = Shape.Shape(!!!a)
    static member inline shape(a: seq<float*CatValue>) = Shape.Shape(!!!a)
    static member inline shape(a: seq<CatValue*float>) = Shape.Shape(!!!a)
    static member inline shape(a: seq<CatValue*CatValue>) = Shape.Shape(!!!a)
    static member inline line(a) = Shape.Line(a)
    static member inline line(a: seq<float*float>) = Shape.Line(!!!a)
    static member inline line(a: seq<float*CatValue>) = Shape.Line(!!!a)
    static member inline line(a: seq<CatValue*CatValue>) = Shape.Line(!!!a)
    static member inline line(a: seq<CatValue*float>) = Shape.Line(!!!a)

    static member inline axes(a: Side list, s) =
        Shape.Axes(List.contains Top a, List.contains Right a, List.contains Bottom a, List.contains Left a, s)

    static member inline on(o, s) =
        Shape.Interactive(
            [ for k in Common.keys (o) ->
                  let f = Common.apply (Common.getProperty o k)

                  match k with
                  | "mousedown" ->
                      MouseDown (fun me (x, y) ->
                          f [| box (formatValue x)
                               box (formatValue y)
                               box me |])
                  | "mouseup" ->
                      MouseUp (fun me (x, y) ->
                          f [| box (formatValue x)
                               box (formatValue y)
                               box me |])
                  | "mousemove" ->
                      MouseMove (fun me (x, y) ->
                          f [| box (formatValue x)
                               box (formatValue y)
                               box me |])
                  | "touchstart" ->
                      TouchStart (fun me (x, y) ->
                          f [| box (formatValue x)
                               box (formatValue y)
                               box me |])
                  | "touchmove" ->
                      TouchMove (fun me (x, y) ->
                          f [| box (formatValue x)
                               box (formatValue y)
                               box me |])
                  | "click" ->
                      Click (fun me (x, y) ->
                          f [| box (formatValue x)
                               box (formatValue y)
                               box me |])
                  | "mouseleave" -> MouseLeave(fun me -> f [| me |])
                  | "touchend" -> TouchEnd(fun me -> f [| me |])
                  | s -> failwithf "Unsupported event type '%s' passed to the 'on' primitive." s ],
            s
        )

    static member inline svg(w, h, shape) =
        Compost.createSvg false false (w, h) shape

    static member html(tag, attrs, children) =
        let attrs =
            [| for a in Common.keys (attrs) ->
                   let p = Common.getProperty attrs a

                   if (Common.typeOf p = "function") then
                       a, DomAttribute.Event(fun e h -> Common.apply p [| box e; box h |])
                   else
                       a, DomAttribute.Attribute(unbox p) |]

        let children =
            children
            |> Array.map (fun c ->
                if Common.typeOf c = "string" then
                    DomNode.Text(unbox c)
                else
                    c)

        DomNode.Element(null, tag, attrs, children)

    static member interactive(id, init, update, render) =
        let render t s =
            let el = document.getElementById (id)
            let res = render t s

            if Common.getProperty res "constructor" = Common.getProperty (DomNode.Text "") "constructor" then
                unbox<DomNode> res
            else
                Compost.createSvg false false (el.clientWidth, el.clientHeight) res

        Html.createVirtualDomApp id init render update

    static member render(id, viz) =
        let el = document.getElementById (id)

        let svg =
            Compost.createSvg false false (el.clientWidth, el.clientHeight) viz

        svg |> Html.renderTo el
