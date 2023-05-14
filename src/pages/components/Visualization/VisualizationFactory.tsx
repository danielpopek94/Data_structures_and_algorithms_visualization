import React, { useRef } from "react";
import Rectangle from "./RectanglesFactory";
import CommentLabel from "./CommentLabel";

const VisualizationFactory = ({
    nodesRows,
    comment,
    nodeSize,
    orientation,
}) => {
    const ref = useRef();
    return (
        <div className="flex justify-center">
            <svg ref={ref} style={{ maxWidth: '500px' }} viewBox="0 0 100 100">
                <g transform="translate(0 25)">
                    {nodesRows.map((nodes, outerIndex) => {
                        return (
                            <React.Fragment key={outerIndex}>
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
                                            pointer={node.pointer}
                                            innerBorder={node.innerBorder}
                                            positionX={node.positionX}
                                            positionY={node.positionY}
                                            orientation={orientation}
                                        />
                                    ))
                                }
                            </React.Fragment>
                        )
                    })}
                </g>

                {comment && <CommentLabel comment={comment} />}
            </svg>
        </div>
    );
};

export default VisualizationFactory;