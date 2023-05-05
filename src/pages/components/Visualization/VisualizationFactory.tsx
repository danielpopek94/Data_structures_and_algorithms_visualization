import React, { useRef } from "react";
import Rectangle from "./RectanglesFactory";
import CommentLabel from "./CommentLabel";

const VisualizationFactory = ({ nodesRows, comment, addDataNode }) => {
    const ref = useRef();
    const nodeSize = Math.max(...nodesRows.map(e => e.length));
    return (
        <div className="flex justify-center">
            <svg ref={ref} style={{ maxWidth: '500px' }} viewBox="0 0 100 100">
                <g transform="translate(0 25)">
                    {nodesRows.map(nodes => {
                        return (
                            <>
                                {
                                    nodes.map(node => (
                                        <Rectangle
                                            nodeSize={nodeSize}
                                            nodeIndex={node.index}
                                            color={node.color}
                                            text={node.text}
                                            key={node.index}
                                            arrow={node.arrow}
                                            pointed={node.pointed}
                                            innerBorder={node.innerBorder}
                                            positionX={node.positionX}
                                            positionY={node.positionY}
                                        />
                                    ))
                                }
                            </>
                        )
                    })}
                </g>

                {comment && <CommentLabel comment={comment} />}
            </svg>
        </div>
    );
};

export default VisualizationFactory;