import { Color } from "../common";
import { AttributeMap, Expression } from "./index";

/** Common parameter and mapping types */
export interface AxisDataBinding extends AttributeMap {
  type: "default" | "numerical" | "categorical";
  visible: boolean;
  side: "default" | "opposite";

  /** Data mapping expression */
  expression?: Expression;
  valueType?: string;

  /** Domain for linear/logarithm types */
  numericalMode?: "linear" | "logarithm";
  domainMin?: number;
  domainMax?: number;

  /** Categories for categorical type */
  categories?: string[];
  gapRatio?: number;
  /** Pre/post gap, will override the default with OR operation */
  enablePrePostGap?: boolean;

  tickDataExpression?: Expression;

  style?: AxisRenderingStyle;
}

export interface AxisRenderingStyle extends AttributeMap {
  lineColor: Color;
  tickColor: Color;
  fontFamily: string;
  fontSize: number;
  tickSize: number;
}

export interface TextAlignment extends AttributeMap {
  x: "left" | "middle" | "right";
  y: "top" | "middle" | "bottom";
  xMargin: number;
  yMargin: number;
}

export interface ColorGradient extends AttributeMap {
  colorspace: "hcl" | "lab";
  colors: Color[];
}

/** LinkAnchor: specifies an anchor in a link */
export interface LinkAnchorPoint extends AttributeMap {
  /** X attribute reference */
  x: { element: string; attribute: string };
  /** Y attribute reference */
  y: { element: string; attribute: string };
  /** Link direction for curves */
  direction: { x: number; y: number };
}
