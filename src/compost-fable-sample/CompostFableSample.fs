module Program

open Compost

open Feliz

open Fable.Compost

type c = Fable.Compost.Compost
type s = Fable.Compost.Scale

type Data =
    { Label: string
      Value: int
      StdDev: int
      Color: string }
    static member Create(label, value, stddev, color) =
        { Label = label
          Value = value
          StdDev = stddev
          Color = color }


let data =
    [ "Positive", 39, 7, "#2CA02C"
      "Negative", 43, 5, "#D62728"
      "Neutral", 17, 2, "#1F77B4" ]
    |> List.map Data.Create

let errorLine (x: string, y: float, sdv: float) =
    c.strokeColor (
        "black",
        c.overlay [ c.line [ (x, 0.5), (y - sdv)
                             (x, 0.5), (y + sdv) ]
                    c.line [ (x, 0.45), (y - sdv)
                             (x, 0.55), (y - sdv) ]
                    c.line [ (x, 0.45), (y + sdv)
                             (x, 0.55), (y + sdv) ] ]
    )

let colors: Shape<1, 1> list =
    data
    |> List.map (fun d -> c.fillColor (d.Color, c.padding (7, 0, 7, 0, c.bar (10, d.Label))))

let labels: Shape<1, 1> list =
    data
    |> List.map (fun d -> c.text (12, (d.Label, 0.5), d.Label, "start"))

let legend =
    c.overlay [ for color in colors do
                    color
                c.font ("11pt arial", "black", c.overlay (labels)) ]

let chart =
    c.axes (
        [ Left; Bottom ],
        c.scaleY (
            s.continuous (0., 100.),
            c.overlay [ for d in data do
                            c.fillColor (d.Color, c.column (d.Label, d.Value))
                            errorLine (d.Label, d.Value, d.StdDev) ]
        )
    )

let demo =
    c.overlay [ c.nest (0, 85, 0, 100, chart)
                c.nest (90, 100, 50, 100, legend) ]

c.render ("demo", demo)
