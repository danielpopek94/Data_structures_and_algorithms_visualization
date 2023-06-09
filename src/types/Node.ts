import Arrow from "./Arrow";

export default interface Node {
    index: number;
    color: string;
    text: string;
    arrow?: Arrow | boolean;
    pointed?: boolean;
    pointer?: boolean;
    innerBorder?: boolean;
    positionX?: number;
    positionY?: number;
    label?: string;
    nodeSize?: number;
}