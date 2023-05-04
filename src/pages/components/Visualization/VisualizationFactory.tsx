import React, { useRef } from "react";
import Rectangle from "./RectanglesFactory";
import CommentLabel from "./CommentLabel";

const VisualizationFactory = ({ nodes, comment }) => {
    const ref = useRef();

    return (
        <div className="flex justify-center">
            <svg ref={ref} style={{ maxWidth: '500px' }} viewBox="0 0 100 100">
                <g transform="translate(0 25)">
                {nodes.map(e => (
                    <Rectangle
                        nodesCount={nodes.length}
                        nodeIndex={e.index}
                        color={e.color}
                        text={e.text}
                        key={e.index}
                        pointer={e.pointer}
                        pointed={e.pointed}
                    />
                ))}
                </g>
                {comment && <CommentLabel comment={comment} />}
            </svg>
        </div>
    );
};

export default VisualizationFactory;