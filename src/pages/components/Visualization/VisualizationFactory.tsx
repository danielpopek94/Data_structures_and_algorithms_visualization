import { LinkedListVisualization } from "../../content/linkedList/visualization";
import React, { useRef } from "react";
import Ractangle from "./RactanglesFactory";

const VisualizationFactory = () => {
    const ref = useRef();

    const nodes = LinkedListVisualization;
    return (
        <div>
            <svg ref={ref} width="100%" height="100%" viewBox="0 0 100 100">
                {nodes.map(e => (
                    <Ractangle
                        nodesCount={nodes.length}
                        nodeIndex={e.index}
                        color={e.color}
                        text={e.text}
                        key={e.index}
                        pointer={e.pointer}
                    />
                ))}

            </svg>
        </div>
    );
};

export default VisualizationFactory;