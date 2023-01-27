// TODO: Port the SDK to TS and compile the bundle to /sdk.ts where it will be imported by the SW and above the jail (See the SW)

import fs from "./fs.ts";
import proxy from "./proxy.ts";
import open from "./open.ts";
import widget from "./widget.ts";
import modal from "./fs.ts";

let xen = {};

xen.fs = fs;
xen.proxy = proxy;
xen.open = open;
xen.widget = widget;
xen.model = modal;

export default xen;