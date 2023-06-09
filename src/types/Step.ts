import Node from "./Node";

export default interface Step {
    id: number;
    description: string;
    nodes: Node[][];
    comment?: string;
    nodeSize?: number;
    orientation?: string;
    frame?: string;
}