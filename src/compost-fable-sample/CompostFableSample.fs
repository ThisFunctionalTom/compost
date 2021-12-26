module Program

open Compost

open Feliz

open Compost.Fable

type c = Compost.Fable.Compost

let inline errorLine (x: string, y: float, sdv: float) =
    c.strokeColor (
        "black",
        c.overlay [ c.line [ (x, 0.5), y - sdv
                             (x, 0.5), y + sdv ]
                    c.line [ (x, 0.45), y - sdv
                             (x, 0.55), y - sdv ]
                    c.line [ (x, 0.45), y + sdv
                             (x, 0.55), y + sdv ] ]
    )

let demo =
    let swap (x, y) = y, x

    c.axes (
        [ Left; Bottom ],
        c.overlay [ c.fillColor (color.forestGreen, c.column ("Positive", 39))
                    errorLine ("Positive", 39, 7)
                    c.fillColor (color.darkRed, c.column ("Negative", 43))
                    errorLine ("Negative", 43, 5)
                    c.fillColor (color.mediumBlue, c.column ("Neutral", 17))
                    errorLine ("Neutral", 17, 2) ]

    )

c.render ("demo", demo)
