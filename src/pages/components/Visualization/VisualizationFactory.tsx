import React, { useRef } from "react";
import Rectangle from "./RectanglesFactory";

const VisualizationFactory = ({ nodes }) => {
    const ref = useRef();

    return (
        <div>
            <svg ref={ref} width="100%" height="100%" viewBox="0 0 100 100">
                {nodes.map(e => (
                    <Rectangle
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