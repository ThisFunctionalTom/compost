import { toString, Record, Union } from "./fable_modules/fable-library.3.6.3/Types.js";
import { bool_type, unit_type, record_type, option_type, lambda_type, array_type, class_type, tuple_type, float64_type, union_type, string_type, int32_type } from "./fable_modules/fable-library.3.6.3/Reflection.js";
import { insert, substring, toFail, replace, printf, toText, join } from "./fable_modules/fable-library.3.6.3/String.js";
import { toArray as toArray_1, max as max_1, min as min_1, ofArray, singleton as singleton_1, cons, empty, reverse } from "./fable_modules/fable-library.3.6.3/List.js";
import { fold, append as append_1, map } from "./fable_modules/fable-library.3.6.3/Array.js";
import { partialApply, uncurry, curry, safeHash, equals, compare, max, round, int32ToString, comparePrimitives, min, getEnumerator } from "./fable_modules/fable-library.3.6.3/Util.js";
import { op_EqualsBangGreater, h as h_2, text, op_EqualsGreater, s as s_2, El_op_Dynamic_Z451691CD, DomNode$reflection } from "./html.fs.js";
import { forAll, exists, head, max as max_2, min as min_2, skip, toArray, filter, tryHead, isEmpty, map as map_1, empty as empty_1, collect, append, toList, singleton, delay } from "./fable_modules/fable-library.3.6.3/Seq.js";
import { newGuid } from "./fable_modules/fable-library.3.6.3/Guid.js";
import { defaultArg } from "./fable_modules/fable-library.3.6.3/Option.js";
import { rangeDouble } from "./fable_modules/fable-library.3.6.3/Range.js";
import { Array_distinct } from "./fable_modules/fable-library.3.6.3/Seq2.js";
import { FSharpChoice$3 } from "./fable_modules/fable-library.3.6.3/Choice.js";

export class Color extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["RGB", "HTML"];
    }
}

export function Color$reflection() {
    return union_type("Compost.Color", [], Color, () => [[["Item1", int32_type], ["Item2", int32_type], ["Item3", int32_type]], [["Item", string_type]]]);
}

export class Width extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Pixels"];
    }
}

export function Width$reflection() {
    return union_type("Compost.Width", [], Width, () => [[["Item", int32_type]]]);
}

export class FillStyle extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Solid", "LinearGradient"];
    }
}

export function FillStyle$reflection() {
    return union_type("Compost.FillStyle", [], FillStyle, () => [[["Item", tuple_type(float64_type, Color$reflection())]], [["Item", class_type("System.Collections.Generic.IEnumerable`1", [tuple_type(float64_type, tuple_type(float64_type, Color$reflection()))])]]]);
}

export class Number$ extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Integer", "Percentage"];
    }
}

export function Number$$reflection() {
    return union_type("Compost.Number", [], Number$, () => [[["Item", int32_type]], [["Item", float64_type]]]);
}

export class HorizontalAlign extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Start", "Center", "End"];
    }
}

export function HorizontalAlign$reflection() {
    return union_type("Compost.HorizontalAlign", [], HorizontalAlign, () => [[], [], []]);
}

export class VerticalAlign extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Baseline", "Middle", "Hanging"];
    }
}

export function VerticalAlign$reflection() {
    return union_type("Compost.VerticalAlign", [], VerticalAlign, () => [[], [], []]);
}

export class continuous extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["CO"];
    }
}

export function continuous$reflection(gen0) {
    return union_type("Compost.continuous", [gen0], continuous, () => [[["Item", float64_type]]]);
}

export class categorical extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["CA"];
    }
}

export function categorical$reflection(gen0) {
    return union_type("Compost.categorical", [gen0], categorical, () => [[["Item", string_type]]]);
}

export class Value extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["CAR", "COV"];
    }
}

export function Value$reflection(gen0) {
    return union_type("Compost.Value", [gen0], Value, () => [[["Item1", categorical$reflection(gen0)], ["Item2", float64_type]], [["Item", continuous$reflection(gen0)]]]);
}

export class Scale extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Continuous", "Categorical"];
    }
}

export function Scale$reflection(gen0) {
    return union_type("Compost.Scale", [gen0], Scale, () => [[["Item1", continuous$reflection(gen0)], ["Item2", continuous$reflection(gen0)]], [["Item", array_type(categorical$reflection(gen0))]]]);
}

export class Style extends Record {
    constructor(StrokeColor, StrokeWidth, StrokeDashArray, Fill, Animation, Font, Cursor, FormatAxisXLabel, FormatAxisYLabel) {
        super();
        this.StrokeColor = StrokeColor;
        this.StrokeWidth = StrokeWidth;
        this.StrokeDashArray = StrokeDashArray;
        this.Fill = Fill;
        this.Animation = Animation;
        this.Font = Font;
        this.Cursor = Cursor;
        this.FormatAxisXLabel = FormatAxisXLabel;
        this.FormatAxisYLabel = FormatAxisYLabel;
    }
}

export function Style$reflection() {
    return record_type("Compost.Style", [], Style, () => [["StrokeColor", tuple_type(float64_type, Color$reflection())], ["StrokeWidth", Width$reflection()], ["StrokeDashArray", class_type("System.Collections.Generic.IEnumerable`1", [Number$$reflection()])], ["Fill", FillStyle$reflection()], ["Animation", option_type(tuple_type(int32_type, string_type, lambda_type(Style$reflection(), Style$reflection())))], ["Font", string_type], ["Cursor", string_type], ["FormatAxisXLabel", lambda_type(Scale$reflection(class_type("Microsoft.FSharp.Core.CompilerServices.MeasureOne")), lambda_type(Value$reflection(class_type("Microsoft.FSharp.Core.CompilerServices.MeasureOne")), string_type))], ["FormatAxisYLabel", lambda_type(Scale$reflection(class_type("Microsoft.FSharp.Core.CompilerServices.MeasureOne")), lambda_type(Value$reflection(class_type("Microsoft.FSharp.Core.CompilerServices.MeasureOne")), string_type))]]);
}

export class EventHandler extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["MouseMove", "MouseUp", "MouseDown", "Click", "TouchStart", "TouchMove", "TouchEnd", "MouseLeave"];
    }
}

export function EventHandler$reflection(gen0, gen1) {
    return union_type("Compost.EventHandler", [gen0, gen1], EventHandler, () => [[["Item", lambda_type(class_type("Browser.Types.MouseEvent"), lambda_type(tuple_type(Value$reflection(gen0), Value$reflection(gen1)), unit_type))]], [["Item", lambda_type(class_type("Browser.Types.MouseEvent"), lambda_type(tuple_type(Value$reflection(gen0), Value$reflection(gen1)), unit_type))]], [["Item", lambda_type(class_type("Browser.Types.MouseEvent"), lambda_type(tuple_type(Value$reflection(gen0), Value$reflection(gen1)), unit_type))]], [["Item", lambda_type(class_type("Browser.Types.MouseEvent"), lambda_type(tuple_type(Value$reflection(gen0), Value$reflection(gen1)), unit_type))]], [["Item", lambda_type(class_type("Browser.Types.TouchEvent"), lambda_type(tuple_type(Value$reflection(gen0), Value$reflection(gen1)), unit_type))]], [["Item", lambda_type(class_type("Browser.Types.TouchEvent"), lambda_type(tuple_type(Value$reflection(gen0), Value$reflection(gen1)), unit_type))]], [["Item", lambda_type(class_type("Browser.Types.TouchEvent"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.MouseEvent"), unit_type)]]]);
}

export class Orientation extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Vertical", "Horizontal"];
    }
}

export function Orientation$reflection() {
    return union_type("Compost.Orientation", [], Orientation, () => [[], []]);
}

export class Shape extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Style", "Text", "AutoScale", "InnerScale", "NestX", "NestY", "Line", "Bubble", "Shape", "Layered", "Axes", "Interactive", "Padding", "Offset"];
    }
}

export function Shape$reflection(gen0, gen1) {
    return union_type("Compost.Shape", [gen0, gen1], Shape, () => [[["Item1", lambda_type(Style$reflection(), Style$reflection())], ["Item2", Shape$reflection(gen0, gen1)]], [["Item1", Value$reflection(gen0)], ["Item2", Value$reflection(gen1)], ["Item3", VerticalAlign$reflection()], ["Item4", HorizontalAlign$reflection()], ["Item5", float64_type], ["Item6", string_type]], [["Item1", bool_type], ["Item2", bool_type], ["Item3", Shape$reflection(gen0, gen1)]], [["Item1", option_type(Scale$reflection(gen0))], ["Item2", option_type(Scale$reflection(gen1))], ["Item3", Shape$reflection(gen0, gen1)]], [["Item1", Value$reflection(gen0)], ["Item2", Value$reflection(gen0)], ["Item3", Shape$reflection(gen0, gen1)]], [["Item1", Value$reflection(gen1)], ["Item2", Value$reflection(gen1)], ["Item3", Shape$reflection(gen0, gen1)]], [["Item", class_type("System.Collections.Generic.IEnumerable`1", [tuple_type(Value$reflection(gen0), Value$reflection(gen1))])]], [["Item1", Value$reflection(gen0)], ["Item2", Value$reflection(gen1)], ["Item3", float64_type], ["Item4", float64_type]], [["Item", class_type("System.Collections.Generic.IEnumerable`1", [tuple_type(Value$reflection(gen0), Value$reflection(gen1))])]], [["Item", class_type("System.Collections.Generic.IEnumerable`1", [Shape$reflection(gen0, gen1)])]], [["Item1", bool_type], ["Item2", bool_type], ["Item3", bool_type], ["Item4", bool_type], ["Item5", Shape$reflection(gen0, gen1)]], [["Item1", class_type("System.Collections.Generic.IEnumerable`1", [EventHandler$reflection(gen0, gen1)])], ["Item2", Shape$reflection(gen0, gen1)]], [["Item1", tuple_type(float64_type, float64_type, float64_type, float64_type)], ["Item2", Shape$reflection(gen0, gen1)]], [["Item1", tuple_type(float64_type, float64_type)], ["Item2", Shape$reflection(gen0, gen1)]]]);
}

export class Svg_StringBuilder {
    constructor() {
        this.strs = empty();
    }
    toString() {
        const x = this;
        return join("", reverse(x.strs));
    }
}

export function Svg_StringBuilder$reflection() {
    return class_type("Compost.Svg.StringBuilder", void 0, Svg_StringBuilder);
}

export function Svg_StringBuilder_$ctor() {
    return new Svg_StringBuilder();
}

export function Svg_StringBuilder__Append_Z721C83C5(x, s) {
    x.strs = cons(s, x.strs);
}

export class Svg_PathSegment extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["MoveTo", "LineTo"];
    }
}

export function Svg_PathSegment$reflection() {
    return union_type("Compost.Svg.PathSegment", [], Svg_PathSegment, () => [[["Item", tuple_type(float64_type, float64_type)]], [["Item", tuple_type(float64_type, float64_type)]]]);
}

export class Svg_Svg extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Path", "Ellipse", "Rect", "Text", "Combine", "Empty"];
    }
}

export function Svg_Svg$reflection() {
    return union_type("Compost.Svg.Svg", [], Svg_Svg, () => [[["Item1", array_type(Svg_PathSegment$reflection())], ["Item2", string_type]], [["Item1", tuple_type(float64_type, float64_type)], ["Item2", tuple_type(float64_type, float64_type)], ["Item3", string_type]], [["Item1", tuple_type(float64_type, float64_type)], ["Item2", tuple_type(float64_type, float64_type)], ["Item3", string_type]], [["Item1", tuple_type(float64_type, float64_type)], ["Item2", string_type], ["Item3", float64_type], ["Item4", string_type]], [["Item", array_type(Svg_Svg$reflection())]], []]);
}

export function Svg_mapSvg(f, _arg1) {
    if (_arg1.tag === 4) {
        return new Svg_Svg(4, map((_arg1_1) => Svg_mapSvg(f, _arg1_1), _arg1.fields[0]));
    }
    else {
        return f(_arg1);
    }
}

export function Svg_formatPath(path) {
    const sb = Svg_StringBuilder_$ctor();
    const enumerator = getEnumerator(path);
    try {
        while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
            const ps = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
            if (ps.tag === 1) {
                Svg_StringBuilder__Append_Z721C83C5(sb, ((("L" + ps.fields[0][0].toString()) + " ") + ps.fields[0][1].toString()) + " ");
            }
            else {
                Svg_StringBuilder__Append_Z721C83C5(sb, ((("M" + ps.fields[0][0].toString()) + " ") + ps.fields[0][1].toString()) + " ");
            }
        }
    }
    finally {
        enumerator.Dispose();
    }
    return toString(sb);
}

export class Svg_RenderingContext extends Record {
    constructor(Definitions) {
        super();
        this.Definitions = Definitions;
    }
}

export function Svg_RenderingContext$reflection() {
    return record_type("Compost.Svg.RenderingContext", [], Svg_RenderingContext, () => [["Definitions", array_type(DomNode$reflection())]]);
}

export function Svg_renderSvg(ctx, svg) {
    return delay(() => {
        switch (svg.tag) {
            case 3: {
                const y = svg.fields[0][1];
                const x = svg.fields[0][0];
                const rotation = svg.fields[2];
                return singleton(El_op_Dynamic_Z451691CD(s_2, "text")(toList(delay(() => append(singleton(op_EqualsGreater("style", svg.fields[3])), delay(() => ((rotation === 0) ? append(singleton(op_EqualsGreater("x", x.toString())), delay(() => singleton(op_EqualsGreater("y", y.toString())))) : append(singleton(op_EqualsGreater("x", "0")), delay(() => append(singleton(op_EqualsGreater("y", "0")), delay(() => singleton(op_EqualsGreater("transform", toText(printf("translate(%f,%f) rotate(%f)"))(x)(y)(rotation)))))))))))))(singleton_1(text(svg.fields[1]))));
            }
            case 4: {
                return collect((s) => Svg_renderSvg(ctx, s), svg.fields[0]);
            }
            case 1: {
                return singleton(El_op_Dynamic_Z451691CD(s_2, "ellipse")(ofArray([op_EqualsGreater("cx", svg.fields[0][0].toString()), op_EqualsGreater("cy", svg.fields[0][1].toString()), op_EqualsGreater("rx", svg.fields[1][0].toString()), op_EqualsGreater("ry", svg.fields[1][1].toString()), op_EqualsGreater("style", svg.fields[2])]))(empty()));
            }
            case 2: {
                const y2 = svg.fields[1][1];
                const y1 = svg.fields[0][1];
                const x2 = svg.fields[1][0];
                const x1 = svg.fields[0][0];
                const patternInput = [min((x_1, y_1) => comparePrimitives(x_1, y_1), x1, x2), min((x_2, y_2) => comparePrimitives(x_2, y_2), y1, y2)];
                const patternInput_1 = [Math.abs(x1 - x2), Math.abs(y1 - y2)];
                return singleton(El_op_Dynamic_Z451691CD(s_2, "rect")(ofArray([op_EqualsGreater("x", patternInput[0].toString()), op_EqualsGreater("y", patternInput[1].toString()), op_EqualsGreater("width", patternInput_1[0].toString()), op_EqualsGreater("height", patternInput_1[1].toString()), op_EqualsGreater("style", svg.fields[2])]))(empty()));
            }
            case 0: {
                return singleton(El_op_Dynamic_Z451691CD(s_2, "path")(ofArray([op_EqualsGreater("d", Svg_formatPath(svg.fields[0])), op_EqualsGreater("style", svg.fields[1])]))(empty()));
            }
            default: {
                return empty_1();
            }
        }
    });
}

export function Svg_formatColor(_arg1) {
    if (_arg1.tag === 1) {
        return _arg1.fields[0];
    }
    else {
        return toText(printf("rgb(%d, %d, %d)"))(_arg1.fields[0])(_arg1.fields[1])(_arg1.fields[2]);
    }
}

export function Svg_formatNumber(_arg1) {
    if (_arg1.tag === 1) {
        return _arg1.fields[0].toString() + "%";
    }
    else {
        return int32ToString(_arg1.fields[0]);
    }
}

export function Svg_formatStyle(defs, style) {
    let copyOfStruct, inputRecord, patternInput_1, arg30_2, matchValue_1, arg20_3, id_1, copyOfStruct_1, arg00_1;
    let patternInput;
    const matchValue = style.Animation;
    if (matchValue == null) {
        patternInput = [style, ""];
    }
    else {
        const ms = matchValue[0] | 0;
        const ease = matchValue[1];
        const anim = matchValue[2];
        const id = "anim_" + replace((copyOfStruct = newGuid(), copyOfStruct), "-", "");
        const fromstyle = Svg_formatStyle(defs, new Style(style.StrokeColor, style.StrokeWidth, style.StrokeDashArray, style.Fill, void 0, style.Font, style.Cursor, style.FormatAxisXLabel, style.FormatAxisYLabel));
        const tostyle = Svg_formatStyle(defs, (inputRecord = anim(style), new Style(inputRecord.StrokeColor, inputRecord.StrokeWidth, inputRecord.StrokeDashArray, inputRecord.Fill, void 0, inputRecord.Font, inputRecord.Cursor, inputRecord.FormatAxisXLabel, inputRecord.FormatAxisYLabel)));
        const arg00 = El_op_Dynamic_Z451691CD(h_2, "style")(empty())(singleton_1(text(toText(printf("@keyframes %s { from { %s } to { %s } }"))(id)(fromstyle)(tostyle))));
        void (defs.push(arg00));
        patternInput = [anim(style), toText(printf("animation: %s %dms %s; "))(id)(ms)(ease)];
    }
    const style_1 = patternInput[0];
    return ((((patternInput[1] + join("", toList(delay(() => map_1((c) => (("cursor:" + c) + ";"), style_1.Cursor.split(",")))))) + (("font:" + style_1.Font) + ";")) + ((patternInput_1 = style_1.StrokeColor, (arg30_2 = Svg_formatColor(patternInput_1[1]), toText(printf("stroke-opacity:%f; stroke-width:%dpx; stroke:%s; "))(patternInput_1[0])(style_1.StrokeWidth.fields[0])(arg30_2))))) + (isEmpty(style_1.StrokeDashArray) ? "" : (("stroke-dasharray:" + join(",", map_1((_arg1) => Svg_formatNumber(_arg1), style_1.StrokeDashArray))) + ";"))) + ((matchValue_1 = style_1.Fill, (matchValue_1.tag === 0) ? ((arg20_3 = Svg_formatColor(matchValue_1.fields[0][1]), toText(printf("fill-opacity:%f; fill:%s; "))(matchValue_1.fields[0][0])(arg20_3))) : ((id_1 = ("gradient_" + replace((copyOfStruct_1 = newGuid(), copyOfStruct_1), "-", "")), ((arg00_1 = El_op_Dynamic_Z451691CD(s_2, "linearGradient")(singleton_1(op_EqualsGreater("id", id_1)))(toList(delay(() => collect((matchValue_2) => singleton(El_op_Dynamic_Z451691CD(s_2, "stop")(ofArray([op_EqualsGreater("offset", matchValue_2[0].toString() + "%"), op_EqualsGreater("stop-color", Svg_formatColor(matchValue_2[1][1])), op_EqualsGreater("stop-opacity", matchValue_2[1][0].toString())]))(empty())), matchValue_1.fields[0])))), void (defs.push(arg00_1))), toText(printf("fill:url(#%s)"))(id_1))))));
}

export class Scales_ScaledShape extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["ScaledStyle", "ScaledText", "ScaledLine", "ScaledBubble", "ScaledShape", "ScaledLayered", "ScaledInteractive", "ScaledPadding", "ScaledOffset", "ScaledNestX", "ScaledNestY"];
    }
}

export function Scales_ScaledShape$reflection(gen0, gen1) {
    return union_type("Compost.Scales.ScaledShape", [gen0, gen1], Scales_ScaledShape, () => [[["Item1", lambda_type(Style$reflection(), Style$reflection())], ["Item2", Scales_ScaledShape$reflection(gen0, gen1)]], [["Item1", Value$reflection(gen0)], ["Item2", Value$reflection(gen1)], ["Item3", VerticalAlign$reflection()], ["Item4", HorizontalAlign$reflection()], ["Item5", float64_type], ["Item6", string_type]], [["Item", array_type(tuple_type(Value$reflection(gen0), Value$reflection(gen1)))]], [["Item1", Value$reflection(gen0)], ["Item2", Value$reflection(gen1)], ["Item3", float64_type], ["Item4", float64_type]], [["Item", array_type(tuple_type(Value$reflection(gen0), Value$reflection(gen1)))]], [["Item", array_type(Scales_ScaledShape$reflection(gen0, gen1))]], [["Item1", class_type("System.Collections.Generic.IEnumerable`1", [EventHandler$reflection(gen0, gen1)])], ["Item2", Scale$reflection(gen0)], ["Item3", Scale$reflection(gen1)], ["Item4", Scales_ScaledShape$reflection(gen0, gen1)]], [["Item1", tuple_type(float64_type, float64_type, float64_type, float64_type)], ["Item2", Scale$reflection(gen0)], ["Item3", Scale$reflection(gen1)], ["Item4", Scales_ScaledShape$reflection(gen0, gen1)]], [["Item1", tuple_type(float64_type, float64_type)], ["Item2", Scales_ScaledShape$reflection(gen0, gen1)]], [["Item1", Value$reflection(gen0)], ["Item2", Value$reflection(gen0)], ["Item3", Scale$reflection(gen0)], ["Item4", Scales_ScaledShape$reflection(gen0, gen1)]], [["Item1", Value$reflection(gen1)], ["Item2", Value$reflection(gen1)], ["Item3", Scale$reflection(gen1)], ["Item4", Scales_ScaledShape$reflection(gen0, gen1)]]]);
}

export function Scales_getExtremes(_arg1) {
    if (_arg1.tag === 1) {
        const vals = _arg1.fields[0];
        return [new Value(0, vals[0], 0), new Value(0, vals[vals.length - 1], 1)];
    }
    else {
        return [new Value(1, _arg1.fields[0]), new Value(1, _arg1.fields[1])];
    }
}

export function Scales_calculateMagnitudeAndRange(lo, hi) {
    const magnitude_1 = Math.pow(10, round(Math.log10(hi - lo))) / 2;
    return [magnitude_1, [Math.floor(lo / magnitude_1) * magnitude_1, Math.ceil(hi / magnitude_1) * magnitude_1]];
}

export function Scales_decimalPoints(range_0, range_1) {
    const range = [range_0, range_1];
    return max((x, y) => comparePrimitives(x, y), 0, Math.ceil(-Math.log10(Scales_calculateMagnitudeAndRange(range[0], range[1])[0])));
}

export function Scales_adjustRange(range_0, range_1) {
    const range = [range_0, range_1];
    return Scales_calculateMagnitudeAndRange(range[0], range[1])[1];
}

export function Scales_adjustRangeUnits(l, h) {
    const patternInput = Scales_adjustRange(l, h);
    return [patternInput[0], patternInput[1]];
}

export function Scales_toArray(s) {
    return Array.from(s);
}

export function Scales_generateSteps(count, k, lo, hi) {
    const patternInput = Scales_calculateMagnitudeAndRange(lo, hi);
    const magnitude = patternInput[0];
    const step_1 = defaultArg(tryHead(filter((m) => (((hi - lo) / m) >= count), map_1((d) => (magnitude / d), [0.2, 0.5, 1, 2, 5, 10, 20, 40, 50, 60, 80, 100]))), magnitude / 100);
    return Scales_toArray(delay(() => collect((v) => (((v >= lo) && (v <= hi)) ? singleton(v) : empty_1()), rangeDouble(patternInput[1][0], step_1 * k, patternInput[1][1]))));
}

export function Scales_generateAxisSteps(s) {
    if (s.tag === 1) {
        return toArray(delay(() => collect((matchValue) => singleton(new Value(0, new categorical(0, matchValue.fields[0]), 0.5)), s.fields[0])));
    }
    else {
        return map((f) => (new Value(1, new continuous(0, f))), Scales_generateSteps(6, 1, s.fields[0].fields[0], s.fields[1].fields[0]));
    }
}

export function Scales_generateAxisLabels(fmt, s) {
    const sunit = s;
    if (s.tag === 1) {
        return toArray(delay(() => collect((matchValue) => {
            const s_1 = matchValue.fields[0];
            return singleton([new Value(0, new categorical(0, s_1), 0.5), fmt(sunit, new Value(0, new categorical(0, s_1), 0.5))]);
        }, s.fields[0])));
    }
    else {
        return map((f) => [new Value(1, new continuous(0, f)), fmt(sunit, new Value(1, new continuous(0, f)))], Scales_generateSteps(6, 2, s.fields[0].fields[0], s.fields[1].fields[0]));
    }
}

export function Scales_unionScales(s1, s2) {
    const matchValue = [s1, s2];
    let pattern_matching_result, h1, h2, l1, l2, v1, v2;
    if (matchValue[0].tag === 1) {
        if (matchValue[1].tag === 1) {
            pattern_matching_result = 1;
            v1 = matchValue[0].fields[0];
            v2 = matchValue[1].fields[0];
        }
        else {
            pattern_matching_result = 2;
        }
    }
    else if (matchValue[1].tag === 0) {
        pattern_matching_result = 0;
        h1 = matchValue[0].fields[1];
        h2 = matchValue[1].fields[1];
        l1 = matchValue[0].fields[0];
        l2 = matchValue[1].fields[0];
    }
    else {
        pattern_matching_result = 2;
    }
    switch (pattern_matching_result) {
        case 0: {
            return new Scale(0, min((x, y) => compare(x, y), l1, l2), max((x_1, y_1) => compare(x_1, y_1), h1, h2));
        }
        case 1: {
            return new Scale(1, Array_distinct(append_1(v1, v2), {
                Equals: (x_2, y_2) => equals(x_2, y_2),
                GetHashCode: (x_2) => safeHash(x_2),
            }));
        }
        case 2: {
            throw (new Error("Cannot union continuous with categorical"));
        }
    }
}

export function Scales_calculateShapeScale(vals) {
    const scales = fold((state, value) => {
        const matchValue = [state, value];
        let pattern_matching_result, v, v_1, vs, x, x_1, xs;
        if (matchValue[0].tag === 1) {
            if (matchValue[1].tag === 1) {
                pattern_matching_result = 1;
                v_1 = matchValue[1].fields[0].fields[0];
                vs = matchValue[0].fields[0];
            }
            else {
                pattern_matching_result = 4;
            }
        }
        else if (matchValue[0].tag === 2) {
            if (matchValue[1].tag === 0) {
                pattern_matching_result = 3;
                x_1 = matchValue[1].fields[0].fields[0];
                xs = matchValue[0].fields[0];
            }
            else {
                pattern_matching_result = 4;
            }
        }
        else if (matchValue[1].tag === 0) {
            pattern_matching_result = 2;
            x = matchValue[1].fields[0].fields[0];
        }
        else {
            pattern_matching_result = 0;
            v = matchValue[1].fields[0].fields[0];
        }
        switch (pattern_matching_result) {
            case 0: {
                return new FSharpChoice$3(1, singleton_1(v));
            }
            case 1: {
                return new FSharpChoice$3(1, cons(v_1, vs));
            }
            case 2: {
                return new FSharpChoice$3(2, singleton_1(x));
            }
            case 3: {
                return new FSharpChoice$3(2, cons(x_1, xs));
            }
            case 4: {
                throw (new Error("Values with mismatching scales"));
            }
        }
    }, new FSharpChoice$3(0, void 0), vals);
    switch (scales.tag) {
        case 1: {
            const vs_1 = scales.fields[0];
            return new Scale(0, new continuous(0, min_1(vs_1, {
                Compare: (x_2, y) => comparePrimitives(x_2, y),
            })), new continuous(0, max_1(vs_1, {
                Compare: (x_3, y_1) => comparePrimitives(x_3, y_1),
            })));
        }
        case 2: {
            return new Scale(1, Array_distinct(toArray(delay(() => map_1((x_4) => (new categorical(0, x_4)), reverse(scales.fields[0])))), {
                Equals: (x_5, y_2) => equals(x_5, y_2),
                GetHashCode: (x_5) => safeHash(x_5),
            }));
        }
        default: {
            throw (new Error("No values for calculating a scale"));
        }
    }
}

export function Scales_calculateShapeScales(points) {
    const xs = map((tuple) => tuple[0], points);
    const ys = map((tuple_1) => tuple_1[1], points);
    return [Scales_calculateShapeScale(xs), Scales_calculateShapeScale(ys)];
}

export function Scales_calculateScales(style, shape) {
    const calculateScales = (shape_2) => Scales_calculateScales(style, shape_2);
    switch (shape.tag) {
        case 4: {
            const nx2 = shape.fields[1];
            const nx1 = shape.fields[0];
            const patternInput_1 = calculateScales(shape.fields[2]);
            return [[Scales_calculateShapeScale([nx1, nx2]), patternInput_1[0][1]], new Scales_ScaledShape(9, nx1, nx2, patternInput_1[0][0], patternInput_1[1])];
        }
        case 5: {
            const ny2 = shape.fields[1];
            const ny1 = shape.fields[0];
            const patternInput_2 = calculateScales(shape.fields[2]);
            return [[patternInput_2[0][0], Scales_calculateShapeScale([ny1, ny2])], new Scales_ScaledShape(10, ny1, ny2, patternInput_2[0][1], patternInput_2[1])];
        }
        case 3: {
            const sy = shape.fields[1];
            const sx = shape.fields[0];
            const patternInput_3 = calculateScales(shape.fields[2]);
            return [[(sx != null) ? sx : patternInput_3[0][0], (sy != null) ? sy : patternInput_3[0][1]], patternInput_3[1]];
        }
        case 2: {
            const patternInput_4 = calculateScales(shape.fields[2]);
            const isy_3 = patternInput_4[0][1];
            const isx_3 = patternInput_4[0][0];
            const autoScale = (_arg1) => {
                if (_arg1.tag === 0) {
                    const patternInput_5 = Scales_adjustRangeUnits(_arg1.fields[0].fields[0], _arg1.fields[1].fields[0]);
                    return new Scale(0, new continuous(0, patternInput_5[0]), new continuous(0, patternInput_5[1]));
                }
                else {
                    return _arg1;
                }
            };
            return [[shape.fields[0] ? autoScale(isx_3) : isx_3, shape.fields[1] ? autoScale(isy_3) : isy_3], patternInput_4[1]];
        }
        case 13: {
            const patternInput_6 = calculateScales(shape.fields[1]);
            return [patternInput_6[0], new Scales_ScaledShape(8, shape.fields[0], patternInput_6[1])];
        }
        case 12: {
            const patternInput_7 = calculateScales(shape.fields[1]);
            const sy_3 = patternInput_7[0][1];
            const sx_3 = patternInput_7[0][0];
            return [[sx_3, sy_3], new Scales_ScaledShape(7, shape.fields[0], sx_3, sy_3, patternInput_7[1])];
        }
        case 7: {
            const y = shape.fields[1];
            const x = shape.fields[0];
            const makeSingletonScale = (_arg2) => {
                if (_arg2.tag === 0) {
                    return new Scale(1, [_arg2.fields[0]]);
                }
                else {
                    const v = _arg2.fields[0];
                    return new Scale(0, v, v);
                }
            };
            return [[makeSingletonScale(x), makeSingletonScale(y)], new Scales_ScaledShape(3, x, y, shape.fields[2], shape.fields[3])];
        }
        case 1: {
            const y_1 = shape.fields[1];
            const x_1 = shape.fields[0];
            const makeSingletonScale_1 = (_arg3) => {
                if (_arg3.tag === 0) {
                    return new Scale(1, [_arg3.fields[0]]);
                }
                else {
                    const v_2 = _arg3.fields[0];
                    return new Scale(0, v_2, v_2);
                }
            };
            return [[makeSingletonScale_1(x_1), makeSingletonScale_1(y_1)], new Scales_ScaledShape(1, x_1, y_1, shape.fields[2], shape.fields[3], shape.fields[4], shape.fields[5])];
        }
        case 6: {
            const line_1 = toArray(shape.fields[0]);
            return [Scales_calculateShapeScales(line_1), new Scales_ScaledShape(2, line_1)];
        }
        case 8: {
            const points_1 = toArray(shape.fields[0]);
            return [Scales_calculateShapeScales(points_1), new Scales_ScaledShape(4, points_1)];
        }
        case 10: {
            const showTop = shape.fields[0];
            const showRight = shape.fields[1];
            const showLeft = shape.fields[3];
            const showBottom = shape.fields[2];
            const shape_17 = shape.fields[4];
            const patternInput_8 = calculateScales(shape_17);
            const sy_4 = patternInput_8[0][1];
            const sx_4 = patternInput_8[0][0];
            const patternInput_9 = [Scales_getExtremes(sx_4), Scales_getExtremes(sy_4)];
            const ly = patternInput_9[1][0];
            const lx = patternInput_9[0][0];
            const hy = patternInput_9[1][1];
            const hx = patternInput_9[0][1];
            const LineStyle = (clr, alpha, width, shape_18) => (new Shape(0, (s) => (new Style([alpha, new Color(1, clr)], new Width(0, width), s.StrokeDashArray, new FillStyle(0, [1, new Color(1, "transparent")]), s.Animation, s.Font, s.Cursor, s.FormatAxisXLabel, s.FormatAxisYLabel)), shape_18));
            const FontStyle = (style_2, shape_19) => (new Shape(0, (s_1) => (new Style([0, new Color(1, "transparent")], s_1.StrokeWidth, s_1.StrokeDashArray, new FillStyle(0, [1, new Color(1, "black")]), s_1.Animation, style_2, s_1.Cursor, s_1.FormatAxisXLabel, s_1.FormatAxisYLabel)), shape_19));
            return calculateScales(new Shape(12, [showTop ? 30 : 0, showRight ? 50 : 0, showBottom ? 30 : 0, showLeft ? 50 : 0], new Shape(9, toList(delay(() => append(singleton(new Shape(3, sx_4, sy_4, new Shape(9, toList(delay(() => append(map_1((x_2) => LineStyle("#e4e4e4", 1, 1, new Shape(6, [[x_2, ly], [x_2, hy]])), Scales_generateAxisSteps(sx_4)), delay(() => map_1((y_2) => LineStyle("#e4e4e4", 1, 1, new Shape(6, [[lx, y_2], [hx, y_2]])), Scales_generateAxisSteps(sy_4))))))))), delay(() => append(showTop ? append(singleton(LineStyle("black", 1, 2, new Shape(6, [[lx, hy], [hx, hy]]))), delay(() => collect((matchValue) => singleton(FontStyle("9pt sans-serif", new Shape(13, [0, -10], new Shape(1, matchValue[0], hy, new VerticalAlign(0), new HorizontalAlign(1), 0, matchValue[1])))), Scales_generateAxisLabels(style.FormatAxisXLabel, sx_4)))) : empty_1(), delay(() => append(showRight ? append(singleton(LineStyle("black", 1, 2, new Shape(6, [[hx, hy], [hx, ly]]))), delay(() => collect((matchValue_1) => singleton(FontStyle("9pt sans-serif", new Shape(13, [10, 0], new Shape(1, hx, matchValue_1[0], new VerticalAlign(1), new HorizontalAlign(0), 0, matchValue_1[1])))), Scales_generateAxisLabels(style.FormatAxisYLabel, sy_4)))) : empty_1(), delay(() => append(showBottom ? append(singleton(LineStyle("black", 1, 2, new Shape(6, [[lx, ly], [hx, ly]]))), delay(() => collect((matchValue_2) => singleton(FontStyle("9pt sans-serif", new Shape(13, [0, 10], new Shape(1, matchValue_2[0], ly, new VerticalAlign(2), new HorizontalAlign(1), 0, matchValue_2[1])))), Scales_generateAxisLabels(style.FormatAxisXLabel, sx_4)))) : empty_1(), delay(() => append(showLeft ? append(singleton(LineStyle("black", 1, 2, new Shape(6, [[lx, hy], [lx, ly]]))), delay(() => collect((matchValue_3) => singleton(FontStyle("9pt sans-serif", new Shape(13, [-10, 0], new Shape(1, lx, matchValue_3[0], new VerticalAlign(1), new HorizontalAlign(2), 0, matchValue_3[1])))), Scales_generateAxisLabels(style.FormatAxisYLabel, sy_4)))) : empty_1(), delay(() => singleton(shape_17))))))))))))))));
        }
        case 9: {
            const scaled = map(calculateScales, Array.from(shape.fields[0]));
            const sxs = map((tupledArg) => tupledArg[0][0], scaled);
            const sys = map((tupledArg_1) => tupledArg_1[0][1], scaled);
            return [[sxs.reduce((s1, s2) => Scales_unionScales(s1, s2)), sys.reduce((s1_1, s2_1) => Scales_unionScales(s1_1, s2_1))], new Scales_ScaledShape(5, map((tuple) => tuple[1], scaled))];
        }
        case 11: {
            const patternInput_10 = calculateScales(shape.fields[1]);
            const scales_8 = patternInput_10[0];
            return [scales_8, new Scales_ScaledShape(6, shape.fields[0], scales_8[0], scales_8[1], patternInput_10[1])];
        }
        default: {
            const f = shape.fields[0];
            const patternInput = Scales_calculateScales(f(style), shape.fields[1]);
            return [patternInput[0], new Scales_ScaledShape(0, f, patternInput[1])];
        }
    }
}

export function Projections_projectOne(reversed, tlv, thv, scale, coord) {
    const matchValue = [scale, coord];
    if (matchValue[0].tag === 0) {
        if (matchValue[1].tag === 0) {
            return toFail(printf("Cannot project categorical value (%A) on a continuous scale (%A)."))(coord)(scale);
        }
        else if (reversed) {
            return thv - (((matchValue[1].fields[0].fields[0] - matchValue[0].fields[0].fields[0]) / (matchValue[0].fields[1].fields[0] - matchValue[0].fields[0].fields[0])) * (thv - tlv));
        }
        else {
            return tlv + (((matchValue[1].fields[0].fields[0] - matchValue[0].fields[0].fields[0]) / (matchValue[0].fields[1].fields[0] - matchValue[0].fields[0].fields[0])) * (thv - tlv));
        }
    }
    else if (matchValue[1].tag === 1) {
        return toFail(printf("Cannot project continuous value (%A) on a categorical scale (%A)."))(coord)(scale);
    }
    else {
        const size = (thv - tlv) / matchValue[0].fields[0].length;
        const i_1 = matchValue[0].fields[0].findIndex((_arg1) => (matchValue[1].fields[0].fields[0] === _arg1.fields[0])) + matchValue[1].fields[1];
        if (reversed) {
            return thv - (i_1 * size);
        }
        else {
            return tlv + (i_1 * size);
        }
    }
}

export function Projections_projectOneX(a_0, a_1) {
    const a = [a_0, a_1];
    return (scale) => ((coord) => Projections_projectOne(false, a[0], a[1], scale, coord));
}

export function Projections_projectOneY(a_0, a_1) {
    const a = [a_0, a_1];
    return (scale) => ((coord) => Projections_projectOne(true, a[0], a[1], scale, coord));
}

export function Projections_projectInvOne(reversed, l, h, s, v) {
    if (s.tag === 1) {
        const cats = s.fields[0];
        const size = (h - l) / cats.length;
        const i = reversed ? Math.floor((h - v) / size) : Math.floor((v - l) / size);
        const f = reversed ? (((h - v) / size) - i) : (((v - l) / size) - i);
        const i_1 = (size < 0) ? (cats.length + i) : i;
        if (((~(~i_1)) < 0) ? true : ((~(~i_1)) >= cats.length)) {
            return new Value(0, new categorical(0, "\u003coutside-of-range\u003e"), f);
        }
        else {
            return new Value(0, cats[~(~i_1)], f);
        }
    }
    else {
        const slv = s.fields[0].fields[0];
        const shv = s.fields[1].fields[0];
        if (reversed) {
            return new Value(1, new continuous(0, shv - (((v - l) / (h - l)) * (shv - slv))));
        }
        else {
            return new Value(1, new continuous(0, slv + (((v - l) / (h - l)) * (shv - slv))));
        }
    }
}

export function Projections_projectInv(x1, y1, x2, y2, sx, sy, x, y) {
    return [Projections_projectInvOne(false, x1, x2, sx, x), Projections_projectInvOne(true, y1, y2, sy, y)];
}

export class Drawing_DrawingContext extends Record {
    constructor(Style, Definitions) {
        super();
        this.Style = Style;
        this.Definitions = Definitions;
    }
}

export function Drawing_DrawingContext$reflection() {
    return record_type("Compost.Drawing.DrawingContext", [], Drawing_DrawingContext, () => [["Style", Style$reflection()], ["Definitions", array_type(DomNode$reflection())]]);
}

export function Drawing_hideFill(style) {
    let matchValue, f;
    return new Style(style.StrokeColor, style.StrokeWidth, style.StrokeDashArray, new FillStyle(0, [0, new Color(0, 0, 0, 0)]), (matchValue = style.Animation, (matchValue != null) ? ((f = matchValue[2], [matchValue[0], matchValue[1], (arg) => Drawing_hideFill(f(arg))])) : (void 0)), style.Font, style.Cursor, style.FormatAxisXLabel, style.FormatAxisYLabel);
}

export function Drawing_hideStroke(style) {
    let matchValue, f;
    return new Style([0, style.StrokeColor[1]], style.StrokeWidth, style.StrokeDashArray, style.Fill, (matchValue = style.Animation, (matchValue != null) ? ((f = matchValue[2], [matchValue[0], matchValue[1], (arg) => Drawing_hideStroke(f(arg))])) : (void 0)), style.Font, style.Cursor, style.FormatAxisXLabel, style.FormatAxisYLabel);
}

export function Drawing_drawShape(ctx_mut, area_0_mut, area_1_mut, area_2_mut, area_3_mut, scales_0_mut, scales_1_mut, shape_mut) {
    Drawing_drawShape:
    while (true) {
        const ctx = ctx_mut, area_0 = area_0_mut, area_1 = area_1_mut, area_2 = area_2_mut, area_3 = area_3_mut, scales_0 = scales_0_mut, scales_1 = scales_1_mut, shape = shape_mut;
        const area_4 = [area_0, area_1, area_2, area_3];
        const y2 = area_4[3];
        const y1 = area_4[1];
        const x2 = area_4[2];
        const x1 = area_4[0];
        const scales_2 = [scales_0, scales_1];
        const sy = scales_2[1];
        const sx = scales_2[0];
        const project = (tupledArg) => [Projections_projectOneX(x1, x2)(sx)(tupledArg[0]), Projections_projectOneY(y1, y2)(sy)(tupledArg[1])];
        switch (shape.tag) {
            case 10: {
                ctx_mut = ctx;
                area_0_mut = x1;
                area_1_mut = Projections_projectOneY(y1, y2)(sy)(shape.fields[0]);
                area_2_mut = x2;
                area_3_mut = Projections_projectOneY(y1, y2)(sy)(shape.fields[1]);
                scales_0_mut = sx;
                scales_1_mut = shape.fields[2];
                shape_mut = shape.fields[3];
                continue Drawing_drawShape;
            }
            case 8: {
                const dy = shape.fields[0][1];
                const dx = shape.fields[0][0];
                ctx_mut = ctx;
                area_0_mut = (x1 + dx);
                area_1_mut = (y1 + dy);
                area_2_mut = (x2 + dx);
                area_3_mut = (y2 + dy);
                scales_0_mut = scales_2[0];
                scales_1_mut = scales_2[1];
                shape_mut = shape.fields[1];
                continue Drawing_drawShape;
            }
            case 5: {
                return new Svg_Svg(4, map((shape_4) => Drawing_drawShape(ctx, area_4[0], area_4[1], area_4[2], area_4[3], scales_2[0], scales_2[1], shape_4), shape.fields[0]));
            }
            case 0: {
                ctx_mut = (new Drawing_DrawingContext(shape.fields[0](ctx.Style), ctx.Definitions));
                area_0_mut = area_4[0];
                area_1_mut = area_4[1];
                area_2_mut = area_4[2];
                area_3_mut = area_4[3];
                scales_0_mut = scales_2[0];
                scales_1_mut = scales_2[1];
                shape_mut = shape.fields[1];
                continue Drawing_drawShape;
            }
            case 4: {
                const points = shape.fields[0];
                return new Svg_Svg(0, toArray(delay(() => append(singleton(new Svg_PathSegment(0, project(points[0]))), delay(() => append(map_1((pt) => (new Svg_PathSegment(1, project(pt))), skip(1, points)), delay(() => singleton(new Svg_PathSegment(1, project(points[0]))))))))), Svg_formatStyle(ctx.Definitions, Drawing_hideStroke(ctx.Style)));
            }
            case 7: {
                const isy_1 = shape.fields[2];
                const isx_1 = shape.fields[1];
                const calculateNestedRange = (rev) => ((tupledArg_1) => {
                    const v1 = tupledArg_1[0];
                    const v2 = tupledArg_1[1];
                    return (ins) => ((outs) => {
                        if (ins.tag === 1) {
                            const pos_1 = collect((v) => ofArray([Projections_projectOne(rev, v1, v2, outs, new Value(0, v, 0)), Projections_projectOne(rev, v1, v2, outs, new Value(0, v, 1))]), ins.fields[0]);
                            return [min_2(pos_1, {
                                Compare: (x_2, y_2) => comparePrimitives(x_2, y_2),
                            }), max_2(pos_1, {
                                Compare: (x_3, y_3) => comparePrimitives(x_3, y_3),
                            })];
                        }
                        else {
                            const pos = ofArray([Projections_projectOne(rev, v1, v2, outs, new Value(1, new continuous(0, ins.fields[0].fields[0]))), Projections_projectOne(rev, v1, v2, outs, new Value(1, new continuous(0, ins.fields[1].fields[0])))]);
                            return [min_2(pos, {
                                Compare: (x, y) => comparePrimitives(x, y),
                            }), max_2(pos, {
                                Compare: (x_1, y_1) => comparePrimitives(x_1, y_1),
                            })];
                        }
                    });
                });
                const patternInput = calculateNestedRange(false)([x1, x2])(isx_1)(sx);
                const patternInput_1 = calculateNestedRange(true)([y1, y2])(isy_1)(sy);
                ctx_mut = ctx;
                area_0_mut = (patternInput[0] + shape.fields[0][3]);
                area_1_mut = (patternInput_1[0] + shape.fields[0][0]);
                area_2_mut = (patternInput[1] - shape.fields[0][1]);
                area_3_mut = (patternInput_1[1] - shape.fields[0][2]);
                scales_0_mut = isx_1;
                scales_1_mut = isy_1;
                shape_mut = shape.fields[3];
                continue Drawing_drawShape;
            }
            case 2: {
                const line = shape.fields[0];
                return new Svg_Svg(0, toArray_1(toList(delay(() => append(singleton(new Svg_PathSegment(0, project(head(line)))), delay(() => map_1((pt_1) => (new Svg_PathSegment(1, project(pt_1))), skip(1, line))))))), Svg_formatStyle(ctx.Definitions, Drawing_hideFill(ctx.Style)));
            }
            case 1: {
                const va = shape.fields[2];
                const ha = shape.fields[3];
                const va_1 = (va.tag === 2) ? "hanging" : ((va.tag === 1) ? "middle" : "baseline");
                const ha_1 = (ha.tag === 1) ? "middle" : ((ha.tag === 2) ? "end" : "start");
                return new Svg_Svg(3, project([shape.fields[0], shape.fields[1]]), shape.fields[5], shape.fields[4], toText(printf("alignment-baseline:%s; text-anchor:%s;"))(va_1)(ha_1) + Svg_formatStyle(ctx.Definitions, ctx.Style));
            }
            case 3: {
                return new Svg_Svg(1, project([shape.fields[0], shape.fields[1]]), [shape.fields[2], shape.fields[3]], Svg_formatStyle(ctx.Definitions, ctx.Style));
            }
            case 6: {
                ctx_mut = ctx;
                area_0_mut = area_4[0];
                area_1_mut = area_4[1];
                area_2_mut = area_4[2];
                area_3_mut = area_4[3];
                scales_0_mut = scales_2[0];
                scales_1_mut = scales_2[1];
                shape_mut = shape.fields[3];
                continue Drawing_drawShape;
            }
            default: {
                ctx_mut = ctx;
                area_0_mut = Projections_projectOneX(x1, x2)(sx)(shape.fields[0]);
                area_1_mut = y1;
                area_2_mut = Projections_projectOneX(x1, x2)(sx)(shape.fields[1]);
                area_3_mut = y2;
                scales_0_mut = shape.fields[2];
                scales_1_mut = sy;
                shape_mut = shape.fields[3];
                continue Drawing_drawShape;
            }
        }
        break;
    }
}

export class Events_MouseEventKind extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Click", "Move", "Up", "Down"];
    }
}

export function Events_MouseEventKind$reflection() {
    return union_type("Compost.Events.MouseEventKind", [], Events_MouseEventKind, () => [[], [], [], []]);
}

export class Events_TouchEventKind extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Move", "Start"];
    }
}

export function Events_TouchEventKind$reflection() {
    return union_type("Compost.Events.TouchEventKind", [], Events_TouchEventKind, () => [[], []]);
}

export class Events_InteractiveEvent extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["MouseEvent", "TouchEvent", "TouchEnd", "MouseLeave"];
    }
}

export function Events_InteractiveEvent$reflection(gen0, gen1) {
    return union_type("Compost.Events.InteractiveEvent", [gen0, gen1], Events_InteractiveEvent, () => [[["Item1", Events_MouseEventKind$reflection()], ["Item2", tuple_type(Value$reflection(gen0), Value$reflection(gen1))]], [["Item1", Events_TouchEventKind$reflection()], ["Item2", tuple_type(Value$reflection(gen0), Value$reflection(gen1))]], [], []]);
}

export function Events_projectEvent(area_0, area_1, area_2, area_3, scales_0, scales_1, event) {
    const area = [area_0, area_1, area_2, area_3];
    const scales = [scales_0, scales_1];
    let pattern_matching_result, kind, x, y, kind_1, x_1, y_1;
    if (event.tag === 1) {
        if (event.fields[1][0].tag === 1) {
            if (event.fields[1][1].tag === 1) {
                pattern_matching_result = 1;
                kind_1 = event.fields[0];
                x_1 = event.fields[1][0].fields[0].fields[0];
                y_1 = event.fields[1][1].fields[0].fields[0];
            }
            else {
                pattern_matching_result = 2;
            }
        }
        else {
            pattern_matching_result = 2;
        }
    }
    else if (event.tag === 2) {
        pattern_matching_result = 3;
    }
    else if (event.tag === 3) {
        pattern_matching_result = 4;
    }
    else if (event.fields[1][0].tag === 1) {
        if (event.fields[1][1].tag === 1) {
            pattern_matching_result = 0;
            kind = event.fields[0];
            x = event.fields[1][0].fields[0].fields[0];
            y = event.fields[1][1].fields[0].fields[0];
        }
        else {
            pattern_matching_result = 2;
        }
    }
    else {
        pattern_matching_result = 2;
    }
    switch (pattern_matching_result) {
        case 0: {
            return new Events_InteractiveEvent(0, kind, Projections_projectInv(area[0], area[1], area[2], area[3], scales[0], scales[1], x, y));
        }
        case 1: {
            return new Events_InteractiveEvent(1, kind_1, Projections_projectInv(area[0], area[1], area[2], area[3], scales[0], scales[1], x_1, y_1));
        }
        case 2: {
            throw (new Error("TODO: projectEvent - not continuous"));
        }
        case 3: {
            return new Events_InteractiveEvent(2);
        }
        case 4: {
            return new Events_InteractiveEvent(3);
        }
    }
}

export function Events_inScale(s, v) {
    const matchValue = [s, v];
    if (matchValue[0].tag === 1) {
        if (matchValue[1].tag === 1) {
            throw (new Error("inScale: Cannot test if continuous value is in categorical scale"));
        }
        else {
            return exists((y_2) => equals(matchValue[1].fields[0], y_2), matchValue[0].fields[0]);
        }
    }
    else if (matchValue[1].tag === 0) {
        throw (new Error("inScale: Cannot test if categorical value is in continuous scale"));
    }
    else if (matchValue[1].fields[0].fields[0] >= min((x, y) => comparePrimitives(x, y), matchValue[0].fields[0].fields[0], matchValue[0].fields[1].fields[0])) {
        return matchValue[1].fields[0].fields[0] <= max((x_1, y_1) => comparePrimitives(x_1, y_1), matchValue[0].fields[0].fields[0], matchValue[0].fields[1].fields[0]);
    }
    else {
        return false;
    }
}

export function Events_inScales(sx, sy, event) {
    let pattern_matching_result, x, y;
    switch (event.tag) {
        case 2: {
            pattern_matching_result = 1;
            break;
        }
        case 0: {
            pattern_matching_result = 2;
            x = event.fields[1][0];
            y = event.fields[1][1];
            break;
        }
        case 1: {
            pattern_matching_result = 2;
            x = event.fields[1][0];
            y = event.fields[1][1];
            break;
        }
        default: pattern_matching_result = 0}
    switch (pattern_matching_result) {
        case 0: {
            return true;
        }
        case 1: {
            return true;
        }
        case 2: {
            if (Events_inScale(sx, x)) {
                return Events_inScale(sy, y);
            }
            else {
                return false;
            }
        }
    }
}

export function Events_triggerEvent(area_0_mut, area_1_mut, area_2_mut, area_3_mut, scales_0_mut, scales_1_mut, shape_mut, jse_mut, event_mut) {
    Events_triggerEvent:
    while (true) {
        const area_0 = area_0_mut, area_1 = area_1_mut, area_2 = area_2_mut, area_3 = area_3_mut, scales_0 = scales_0_mut, scales_1 = scales_1_mut, shape = shape_mut, jse = jse_mut, event = event_mut;
        const area_4 = [area_0, area_1, area_2, area_3];
        const y2 = area_4[3];
        const y1 = area_4[1];
        const x2 = area_4[2];
        const x1 = area_4[0];
        const scales_2 = [scales_0, scales_1];
        const sy = scales_2[1];
        const sx = scales_2[0];
        switch (shape.tag) {
            case 1:
            case 3:
            case 4: {
                break;
            }
            case 0: {
                area_0_mut = area_4[0];
                area_1_mut = area_4[1];
                area_2_mut = area_4[2];
                area_3_mut = area_4[3];
                scales_0_mut = scales_2[0];
                scales_1_mut = scales_2[1];
                shape_mut = shape.fields[1];
                jse_mut = jse;
                event_mut = event;
                continue Events_triggerEvent;
                break;
            }
            case 8: {
                const dy = shape.fields[0][1];
                const dx = shape.fields[0][0];
                area_0_mut = (x1 + dx);
                area_1_mut = (y1 + dy);
                area_2_mut = (x2 + dx);
                area_3_mut = (y2 + dy);
                scales_0_mut = scales_2[0];
                scales_1_mut = scales_2[1];
                shape_mut = shape.fields[1];
                jse_mut = jse;
                event_mut = event;
                continue Events_triggerEvent;
                break;
            }
            case 9: {
                area_0_mut = Projections_projectOneX(x1, x2)(sx)(shape.fields[0]);
                area_1_mut = y1;
                area_2_mut = Projections_projectOneX(x1, x2)(sx)(shape.fields[1]);
                area_3_mut = y2;
                scales_0_mut = shape.fields[2];
                scales_1_mut = sy;
                shape_mut = shape.fields[3];
                jse_mut = jse;
                event_mut = event;
                continue Events_triggerEvent;
                break;
            }
            case 10: {
                area_0_mut = x1;
                area_1_mut = Projections_projectOneY(y1, y2)(sy)(shape.fields[0]);
                area_2_mut = x2;
                area_3_mut = Projections_projectOneY(y1, y2)(sy)(shape.fields[1]);
                scales_0_mut = sx;
                scales_1_mut = shape.fields[2];
                shape_mut = shape.fields[3];
                jse_mut = jse;
                event_mut = event;
                continue Events_triggerEvent;
                break;
            }
            case 7: {
                const isy_1 = shape.fields[2];
                const isx_1 = shape.fields[1];
                const calculateNestedRange = (rev) => ((tupledArg) => {
                    const v1 = tupledArg[0];
                    const v2 = tupledArg[1];
                    return (ins) => ((outs) => {
                        if (ins.tag === 1) {
                            const pos_1 = collect((v) => ofArray([Projections_projectOne(rev, v1, v2, outs, new Value(0, v, 0)), Projections_projectOne(rev, v1, v2, outs, new Value(0, v, 1))]), ins.fields[0]);
                            return [min_2(pos_1, {
                                Compare: (x_2, y_2) => comparePrimitives(x_2, y_2),
                            }), max_2(pos_1, {
                                Compare: (x_3, y_3) => comparePrimitives(x_3, y_3),
                            })];
                        }
                        else {
                            const pos = ofArray([Projections_projectOne(rev, v1, v2, outs, new Value(1, new continuous(0, ins.fields[0].fields[0]))), Projections_projectOne(rev, v1, v2, outs, new Value(1, new continuous(0, ins.fields[1].fields[0])))]);
                            return [min_2(pos, {
                                Compare: (x, y) => comparePrimitives(x, y),
                            }), max_2(pos, {
                                Compare: (x_1, y_1) => comparePrimitives(x_1, y_1),
                            })];
                        }
                    });
                });
                const patternInput = calculateNestedRange(false)([x1, x2])(isx_1)(sx);
                const patternInput_1 = calculateNestedRange(true)([y1, y2])(isy_1)(sy);
                area_0_mut = (patternInput[0] + shape.fields[0][3]);
                area_1_mut = (patternInput_1[0] + shape.fields[0][0]);
                area_2_mut = (patternInput[1] - shape.fields[0][1]);
                area_3_mut = (patternInput_1[1] - shape.fields[0][2]);
                scales_0_mut = isx_1;
                scales_1_mut = isy_1;
                shape_mut = shape.fields[3];
                jse_mut = jse;
                event_mut = event;
                continue Events_triggerEvent;
                break;
            }
            case 5: {
                const shapes = shape.fields[0];
                for (let idx = 0; idx <= (shapes.length - 1); idx++) {
                    Events_triggerEvent(area_4[0], area_4[1], area_4[2], area_4[3], scales_2[0], scales_2[1], shapes[idx], jse, event);
                }
                break;
            }
            case 6: {
                const localEvent = Events_projectEvent(area_4[0], area_4[1], area_4[2], area_4[3], scales_2[0], scales_2[1], event);
                if (Events_inScales(scales_2[0], scales_2[1], localEvent)) {
                    const enumerator = getEnumerator(shape.fields[0]);
                    try {
                        while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
                            const matchValue = [localEvent, enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]()];
                            let pattern_matching_result, f, pt, f_1, pt_1, f_2, f_3;
                            if (matchValue[0].tag === 1) {
                                if (matchValue[0].fields[0].tag === 1) {
                                    if (matchValue[1].tag === 4) {
                                        pattern_matching_result = 1;
                                        f_1 = curry(2, matchValue[1].fields[0]);
                                        pt_1 = matchValue[0].fields[1];
                                    }
                                    else {
                                        pattern_matching_result = 4;
                                    }
                                }
                                else if (matchValue[1].tag === 5) {
                                    pattern_matching_result = 1;
                                    f_1 = curry(2, matchValue[1].fields[0]);
                                    pt_1 = matchValue[0].fields[1];
                                }
                                else {
                                    pattern_matching_result = 4;
                                }
                            }
                            else if (matchValue[0].tag === 2) {
                                if (matchValue[1].tag === 6) {
                                    pattern_matching_result = 2;
                                    f_2 = matchValue[1].fields[0];
                                }
                                else {
                                    pattern_matching_result = 4;
                                }
                            }
                            else if (matchValue[0].tag === 3) {
                                if (matchValue[1].tag === 7) {
                                    pattern_matching_result = 3;
                                    f_3 = matchValue[1].fields[0];
                                }
                                else {
                                    pattern_matching_result = 4;
                                }
                            }
                            else if (matchValue[0].fields[0].tag === 1) {
                                if (matchValue[1].tag === 0) {
                                    pattern_matching_result = 0;
                                    f = curry(2, matchValue[1].fields[0]);
                                    pt = matchValue[0].fields[1];
                                }
                                else {
                                    pattern_matching_result = 4;
                                }
                            }
                            else if (matchValue[0].fields[0].tag === 2) {
                                if (matchValue[1].tag === 1) {
                                    pattern_matching_result = 0;
                                    f = curry(2, matchValue[1].fields[0]);
                                    pt = matchValue[0].fields[1];
                                }
                                else {
                                    pattern_matching_result = 4;
                                }
                            }
                            else if (matchValue[0].fields[0].tag === 3) {
                                if (matchValue[1].tag === 2) {
                                    pattern_matching_result = 0;
                                    f = curry(2, matchValue[1].fields[0]);
                                    pt = matchValue[0].fields[1];
                                }
                                else {
                                    pattern_matching_result = 4;
                                }
                            }
                            else if (matchValue[1].tag === 3) {
                                pattern_matching_result = 0;
                                f = curry(2, matchValue[1].fields[0]);
                                pt = matchValue[0].fields[1];
                            }
                            else {
                                pattern_matching_result = 4;
                            }
                            switch (pattern_matching_result) {
                                case 0: {
                                    if (!equals(jse, null)) {
                                        jse.preventDefault();
                                    }
                                    f(jse)(pt);
                                    break;
                                }
                                case 1: {
                                    if (!equals(jse, null)) {
                                        jse.preventDefault();
                                    }
                                    f_1(jse)(pt_1);
                                    break;
                                }
                                case 2: {
                                    f_2(jse);
                                    break;
                                }
                                case 3: {
                                    f_3(jse);
                                    break;
                                }
                            }
                        }
                    }
                    finally {
                        enumerator.Dispose();
                    }
                }
                area_0_mut = area_4[0];
                area_1_mut = area_4[1];
                area_2_mut = area_4[2];
                area_3_mut = area_4[3];
                scales_0_mut = scales_2[0];
                scales_1_mut = scales_2[1];
                shape_mut = shape.fields[3];
                jse_mut = jse;
                event_mut = event;
                continue Events_triggerEvent;
                break;
            }
            default: {
            }
        }
        break;
    }
}

export function Derived_StrokeColor(clr, s) {
    return new Shape(0, (s_1) => (new Style([1, new Color(1, clr)], s_1.StrokeWidth, s_1.StrokeDashArray, s_1.Fill, s_1.Animation, s_1.Font, s_1.Cursor, s_1.FormatAxisXLabel, s_1.FormatAxisYLabel)), s);
}

export function Derived_FillColor(clr, s) {
    return new Shape(0, (s_1) => (new Style(s_1.StrokeColor, s_1.StrokeWidth, s_1.StrokeDashArray, new FillStyle(0, [1, new Color(1, clr)]), s_1.Animation, s_1.Font, s_1.Cursor, s_1.FormatAxisXLabel, s_1.FormatAxisYLabel)), s);
}

export function Derived_Font(font, clr, s) {
    return new Shape(0, (s_1) => (new Style([0, new Color(1, clr)], s_1.StrokeWidth, s_1.StrokeDashArray, new FillStyle(0, [1, new Color(1, clr)]), s_1.Animation, font, s_1.Cursor, s_1.FormatAxisXLabel, s_1.FormatAxisYLabel)), s);
}

export function Derived_Area(line) {
    return new Shape(8, delay(() => {
        const line_1 = Array.from(line);
        const patternInput = [line_1[0][0], line_1[line_1.length - 1][0]];
        const firstX = patternInput[0];
        return append(singleton([firstX, new Value(1, new continuous(0, 0))]), delay(() => append(line_1, delay(() => append(singleton([patternInput[1], new Value(1, new continuous(0, 0))]), delay(() => singleton([firstX, new Value(1, new continuous(0, 0))])))))));
    }));
}

export function Derived_VArea(line) {
    return new Shape(8, delay(() => {
        const line_1 = Array.from(line);
        const patternInput = [line_1[0][1], line_1[line_1.length - 1][1]];
        const firstY = patternInput[0];
        return append(singleton([new Value(1, new continuous(0, 0)), firstY]), delay(() => append(line_1, delay(() => append(singleton([new Value(1, new continuous(0, 0)), patternInput[1]]), delay(() => singleton([new Value(1, new continuous(0, 0)), firstY])))))));
    }));
}

export function Derived_VShiftedArea(offs, line) {
    return new Shape(8, delay(() => {
        const line_1 = Array.from(line);
        const patternInput = [line_1[0][1], line_1[line_1.length - 1][1]];
        const firstY = patternInput[0];
        return append(singleton([new Value(1, new continuous(0, offs)), firstY]), delay(() => append(line_1, delay(() => append(singleton([new Value(1, new continuous(0, offs)), patternInput[1]]), delay(() => singleton([new Value(1, new continuous(0, offs)), firstY])))))));
    }));
}

export function Derived_Bar(x, y) {
    return new Shape(8, delay(() => append(singleton([new Value(1, x), new Value(0, y, 0)]), delay(() => append(singleton([new Value(1, x), new Value(0, y, 1)]), delay(() => append(singleton([new Value(1, new continuous(0, 0)), new Value(0, y, 1)]), delay(() => singleton([new Value(1, new continuous(0, 0)), new Value(0, y, 0)])))))))));
}

export function Derived_Column(x, y) {
    return new Shape(8, delay(() => append(singleton([new Value(0, x, 0), new Value(1, y)]), delay(() => append(singleton([new Value(0, x, 1), new Value(1, y)]), delay(() => append(singleton([new Value(0, x, 1), new Value(1, new continuous(0, 0))]), delay(() => singleton([new Value(0, x, 0), new Value(1, new continuous(0, 0))])))))))));
}

export function Compost_niceNumber(num, decs) {
    const str = toString(num);
    const dot = str.indexOf(".") | 0;
    const patternInput = (dot === -1) ? [str, ""] : [substring(str, 0, dot), substring(str, dot + 1, min((x, y) => comparePrimitives(x, y), decs, (str.length - dot) - 1))];
    const before = patternInput[0];
    const after = patternInput[1];
    const after_1 = (after.length < decs) ? (after + (toArray(delay(() => map_1((i) => "0", rangeDouble(1, 1, decs - after.length)))).join(''))) : after;
    let res = before;
    if (before.length > 5) {
        const enumerator = getEnumerator(rangeDouble(before.length - 1, -1, 0));
        try {
            while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
                const i_1 = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]() | 0;
                if ((i_1 !== 0) && (((before.length - i_1) % 3) === 0)) {
                    res = insert(res, i_1, ",");
                }
            }
        }
        finally {
            enumerator.Dispose();
        }
    }
    if (forAll((y_1) => ("0" === y_1), after_1.split(""))) {
        return res;
    }
    else {
        return (res + ".") + after_1;
    }
}

export function Compost_defaultFormat(scale, value) {
    if (value.tag === 1) {
        const dec = (scale.tag === 0) ? Scales_decimalPoints(scale.fields[0].fields[0], scale.fields[1].fields[0]) : 0;
        return Compost_niceNumber(round(value.fields[0].fields[0], ~(~dec)), ~(~dec));
    }
    else {
        return value.fields[0].fields[0];
    }
}

export const Compost_defstyle = new Style([1, new Color(0, 256, 0, 0)], new Width(0, 2), [], new FillStyle(0, [1, new Color(0, 196, 196, 196)]), void 0, "10pt sans-serif", "default", (scale, value) => Compost_defaultFormat(scale, value), (scale_1, value_1) => Compost_defaultFormat(scale_1, value_1));

export function Compost_getRelativeLocation(el, x, y) {
    const getOffset = (parent_mut, tupledArg_mut) => {
        getOffset:
        while (true) {
            const parent = parent_mut, tupledArg = tupledArg_mut;
            const x_1 = tupledArg[0];
            const y_1 = tupledArg[1];
            if (equals(parent, null)) {
                return [x_1, y_1];
            }
            else {
                parent_mut = parent.offsetParent;
                tupledArg_mut = [x_1 - parent.offsetLeft, y_1 - parent.offsetTop];
                continue getOffset;
            }
            break;
        }
    };
    const getParent = (parent_1_mut) => {
        getParent:
        while (true) {
            const parent_1 = parent_1_mut;
            if ((parent_1.namespaceURI === "http://www.w3.org/2000/svg") && (parent_1.tagName !== "svg")) {
                if (!equals(parent_1.parentElement, null)) {
                    parent_1_mut = parent_1.parentElement;
                    continue getParent;
                }
                else {
                    parent_1_mut = parent_1.parentNode;
                    continue getParent;
                }
            }
            else if (!equals(parent_1.offsetParent, null)) {
                return parent_1;
            }
            else if (!equals(parent_1.parentElement, null)) {
                parent_1_mut = parent_1.parentElement;
                continue getParent;
            }
            else {
                parent_1_mut = parent_1.parentNode;
                continue getParent;
            }
            break;
        }
    };
    return getOffset(getParent(el), [x, y]);
}

export function Compost_createSvg(revX, revY, width, height, viz) {
    const patternInput = Scales_calculateScales(Compost_defstyle, viz);
    const sy = patternInput[0][1];
    const sx = patternInput[0][0];
    const shape = patternInput[1];
    const defs = [];
    const area = [0, 0, width, height];
    const svg = Drawing_drawShape(new Drawing_DrawingContext(Compost_defstyle, defs), area[0], area[1], area[2], area[3], sx, sy, shape);
    const triggerEvent = (e, event) => {
        Events_triggerEvent(area[0], area[1], area[2], area[3], sx, sy, shape, e, event);
    };
    const mouseHandler = (kind, el, evt) => {
        const evt_1 = evt;
        const patternInput_1 = Compost_getRelativeLocation(el, evt_1.pageX, evt_1.pageY);
        triggerEvent(evt_1, new Events_InteractiveEvent(0, kind, [new Value(1, new continuous(0, patternInput_1[0])), new Value(1, new continuous(0, patternInput_1[1]))]));
    };
    const touchHandler = (kind_1, el_1, evt_2) => {
        const evt_3 = evt_2;
        const touch = evt_3.touches[0];
        const patternInput_2 = Compost_getRelativeLocation(el_1, touch.pageX, touch.pageY);
        triggerEvent(evt_3, new Events_InteractiveEvent(1, kind_1, [new Value(1, new continuous(0, patternInput_2[0])), new Value(1, new continuous(0, patternInput_2[1]))]));
    };
    return El_op_Dynamic_Z451691CD(h_2, "div")(empty())(singleton_1(El_op_Dynamic_Z451691CD(s_2, "svg")(ofArray([op_EqualsGreater("style", "overflow:visible"), op_EqualsGreater("width", int32ToString(~(~width))), op_EqualsGreater("height", int32ToString(~(~height))), op_EqualsBangGreater("click", uncurry(2, partialApply(2, mouseHandler, [new Events_MouseEventKind(0)]))), op_EqualsBangGreater("mousemove", uncurry(2, partialApply(2, mouseHandler, [new Events_MouseEventKind(1)]))), op_EqualsBangGreater("mousedown", uncurry(2, partialApply(2, mouseHandler, [new Events_MouseEventKind(3)]))), op_EqualsBangGreater("mouseup", uncurry(2, partialApply(2, mouseHandler, [new Events_MouseEventKind(2)]))), op_EqualsBangGreater("mouseleave", (_arg1, evt_4) => {
        triggerEvent(evt_4, new Events_InteractiveEvent(3));
    }), op_EqualsBangGreater("touchmove", uncurry(2, partialApply(2, touchHandler, [new Events_TouchEventKind(0)]))), op_EqualsBangGreater("touchstart", uncurry(2, partialApply(2, touchHandler, [new Events_TouchEventKind(1)]))), op_EqualsBangGreater("touchend", (_arg2, evt_5) => {
        triggerEvent(evt_5, new Events_InteractiveEvent(2));
    })]))(toList(delay(() => {
        const body = Array.from(Svg_renderSvg(new Svg_RenderingContext(defs), svg));
        return append(defs, delay(() => body));
    })))));
}

