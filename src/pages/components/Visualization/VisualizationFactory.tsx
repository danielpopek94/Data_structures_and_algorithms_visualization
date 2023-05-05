import React, { useRef } from "react";
import Rectangle from "./RectanglesFactory";
import CommentLabel from "./CommentLabel";

const VisualizationFactory = ({ nodes, comment, addDataNode }) => {
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
                        arrow={e.arrow}
                        pointed={e.pointed}
                        innerBorder={e.innerBorder}
                        positionX={e.positionX}
                        positionY={e.positionY}
                    />
                ))}
                    {addDataNode && <Rectangle
                        nodesCount={nodes.length}
                        nodeIndex={addDataNode.index}
                        color={addDataNode.color}
                        text={addDataNode.text}
                        key={addDataNode.index}
                        arrow={addDataNode.arrow}
                        pointed={addDataNode.pointed}
                        innerBorder={addDataNode.innerBorder}
                        positionX={addDataNode.positionX}
                        positionY={addDataNode.positionY}
                    />}
                </g>

                {comment && <CommentLabel comment={comment} />}
            </svg>
        </div>
    );
};

export default VisualizationFactory;