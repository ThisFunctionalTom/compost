import { Union, toString } from "./fable_modules/fable-library.3.6.3/Types.js";
import { insert, substring } from "./fable_modules/fable-library.3.6.3/String.js";
import { equals, createAtom, createObj, getEnumerator, comparePrimitives, min } from "./fable_modules/fable-library.3.6.3/Util.js";
import { append, forAll, map, delay, toArray } from "./fable_modules/fable-library.3.6.3/Seq.js";
import { rangeDouble } from "./fable_modules/fable-library.3.6.3/Range.js";
import { array_type, tuple_type, union_type, obj_type, string_type, lambda_type, unit_type, class_type } from "./fable_modules/fable-library.3.6.3/Reflection.js";
import { toArray as toArray_1, append as append_1, singleton, empty } from "./fable_modules/fable-library.3.6.3/List.js";
import { patch, diff, h as h_1 } from "virtual-dom";
import { map as map_1 } from "./fable_modules/fable-library.3.6.3/Array.js";
import Event$ from "./fable_modules/fable-library.3.6.3/Event.js";
import { startImmediate } from "./fable_modules/fable-library.3.6.3/Async.js";
import { singleton as singleton_1 } from "./fable_modules/fable-library.3.6.3/AsyncBuilder.js";
import { some, value as value_1 } from "./fable_modules/fable-library.3.6.3/Option.js";
import { add } from "./fable_modules/fable-library.3.6.3/Observable.js";

export function Common_niceNumber(num, decs) {
    const str = toString(num);
    const dot = str.indexOf(".") | 0;
    const patternInput = (dot === -1) ? [str, ""] : [substring(str, 0, dot), substring(str, dot + 1, min((x, y) => comparePrimitives(x, y), decs, (str.length - dot) - 1))];
    const before = patternInput[0];
    const after = patternInput[1];
    const after_1 = (after.length < decs) ? (after + (toArray(delay(() => map((i) => "0", rangeDouble(1, 1, decs - after.length)))).join(''))) : after;
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

export class DomAttribute extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Event", "Attribute", "Property"];
    }
}

export function DomAttribute$reflection() {
    return union_type("Compost.Html.DomAttribute", [], DomAttribute, () => [[["Item", lambda_type(class_type("Browser.Types.HTMLElement"), lambda_type(class_type("Browser.Types.Event"), unit_type))]], [["Item", string_type]], [["Item", obj_type]]]);
}

export class DomNode extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Text", "Element"];
    }
}

export function DomNode$reflection() {
    return union_type("Compost.Html.DomNode", [], DomNode, () => [[["Item", string_type]], [["ns", string_type], ["tag", string_type], ["attributes", array_type(tuple_type(string_type, DomAttribute$reflection()))], ["children", array_type(DomNode$reflection())]]]);
}

export function createTree(ns, tag, args, children) {
    const attrs = [];
    const props = [];
    const enumerator = getEnumerator(args);
    try {
        while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
            const forLoopVar = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
            const matchValue = [forLoopVar[0], forLoopVar[1]];
            if (matchValue[1].tag === 2) {
                void (props.push([matchValue[0], matchValue[1].fields[0]]));
            }
            else if (matchValue[1].tag === 0) {
                void (props.push(["on" + matchValue[0], (o_1) => {
                    matchValue[1].fields[0](o_1["target"], event);
                }]));
            }
            else {
                void (attrs.push([matchValue[0], matchValue[1].fields[0]]));
            }
        }
    }
    finally {
        enumerator.Dispose();
    }
    const attrs_1 = createObj(attrs);
    const ns_1 = ((ns === null) ? true : (ns === "")) ? empty() : singleton(["namespace", ns]);
    return h_1(tag, createObj(append(append_1(ns_1, singleton(["attributes", attrs_1])), props)), children);
}

export let counter = createAtom(0);

export function renderVirtual(node) {
    if (node.tag === 1) {
        return createTree(node.fields[0], node.fields[1], node.fields[2], map_1((node_1) => renderVirtual(node_1), node.fields[3]));
    }
    else {
        return node.fields[0];
    }
}

export function render(node) {
    if (node.tag === 1) {
        const tag = node.fields[1];
        const ns = node.fields[0];
        const attrs = node.fields[2];
        const el = ((ns === null) ? true : (ns === "")) ? document.createElement(tag) : document.createElementNS(ns, tag);
        const rc = map_1((node_1) => render(node_1), node.fields[3]);
        for (let idx = 0; idx <= (rc.length - 1); idx++) {
            el.appendChild(rc[idx]);
        }
        for (let idx_1 = 0; idx_1 <= (attrs.length - 1); idx_1++) {
            const forLoopVar = attrs[idx_1];
            const k = forLoopVar[0];
            const a = forLoopVar[1];
            switch (a.tag) {
                case 1: {
                    el.setAttribute(k, a.fields[0]);
                    break;
                }
                case 0: {
                    break;
                }
                default: {
                    el[k] = a.fields[0];
                }
            }
        }
        return el;
    }
    else {
        return document.createTextNode(node.fields[0]);
    }
}

export function renderTo(node, dom) {
    while (!equals(node.lastChild, null)) {
        node.removeChild(node.lastChild);
    }
    node.appendChild(render(dom));
}

export function createVirtualDomAsyncApp(id, initial, r, u) {
    const event = new Event$();
    let container = document.createElement("div");
    document.getElementById(id).innerHTML = "";
    document.getElementById(id).appendChild(container);
    let tree = {};
    let state = initial;
    const handleEvent = (evt) => {
        startImmediate(singleton_1.Delay(() => {
            let e_1;
            return singleton_1.Combine((evt != null) ? ((e_1 = value_1(evt), singleton_1.Bind(u(state, e_1), (_arg1) => {
                state = _arg1;
                return singleton_1.Zero();
            }))) : ((singleton_1.Zero())), singleton_1.Delay(() => {
                const newTree = renderVirtual(r((e) => {
                    event.Trigger(e);
                }, state));
                const patches = diff(tree, newTree);
                container = patch(container, patches);
                tree = newTree;
                return singleton_1.Zero();
            }));
        }));
    };
    handleEvent(void 0);
    add((arg) => {
        handleEvent(some(arg));
    }, event.Publish);
}

export function createVirtualDomApp(id, initial, r, u) {
    const event = new Event$();
    let container = document.createElement("div");
    document.getElementById(id).innerHTML = "";
    document.getElementById(id).appendChild(container);
    let tree = {};
    let state = initial;
    const handleEvent = (evt) => {
        let e_1;
        state = ((evt != null) ? ((e_1 = value_1(evt), u(state, e_1))) : state);
        const newTree = renderVirtual(r((e) => {
            event.Trigger(e);
        }, state));
        const patches = diff(tree, newTree);
        container = patch(container, patches);
        tree = newTree;
    };
    handleEvent(void 0);
    add((arg) => {
        handleEvent(some(arg));
    }, event.Publish);
}

export function text(s_1) {
    return new DomNode(0, s_1);
}

export function op_EqualsGreater(k, v) {
    return [k, new DomAttribute(1, v)];
}

export function op_EqualsBangGreater(k, f) {
    return [k, new DomAttribute(0, f)];
}

export class El {
    constructor(ns) {
        this.ns = ns;
    }
}

export function El$reflection() {
    return class_type("Compost.Html.El", void 0, El);
}

export function El_$ctor_Z721C83C5(ns) {
    return new El(ns);
}

export function El__get_Namespace(x) {
    return x.ns;
}

export function El_op_Dynamic_Z451691CD(el, n) {
    return (a) => ((b) => (new DomNode(1, El__get_Namespace(el), n, toArray_1(a), toArray_1(b))));
}

export const h = El_$ctor_Z721C83C5(null);

export const s = El_$ctor_Z721C83C5("http://www.w3.org/2000/svg");

