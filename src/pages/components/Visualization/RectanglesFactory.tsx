import MainRectangle from "@/pages/utilities/Visualization/MainRectangle";
import Pointer from "@/pages/utilities/Visualization/Pointer";
import InnerText from "@/pages/utilities/Visualization/InnerText";
import Arrow from "@/pages/utilities/Visualization/Arrow";
import InnerBorder from "./InnerBorder";
import LabelAbove from "@/pages/utilities/Visualization/LabelAbove";
import OuterFrame from "@/pages/utilities/Visualization/OuterFrame";

import Node from "@/types/Node";

interface Props extends Node {
    nodeIndex: number
    orientation?: string
    label?: string
    frame?: string

}

const Rectangle = ({
    nodeSize = 3,
    nodeIndex,
    color,
    text,
    arrow = false,
    pointed,
    pointer,
    innerBorder,
    positionX = 1,
    positionY = 1,
    orientation = 'row',
    label = '',
    frame = '',
}: Props) => {
    const gap = 10;
    const width = (100 - gap * nodeSize) / nodeSize;
    const height = width / 2;
    let x, y;
    const arrowPosition = {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
    }

    if (orientation === 'column') {
        x = 35 + positionX;
        y = nodeIndex * (height + gap) + positionY;
        pointer = false;
        pointed = false;

        arrowPosition.x1 = arrow.x1 ? arrow.x1 : x + width / 2;
        arrowPosition.y1 = arrow.y1 ? arrow.y1 : y + height + gap - 1.5;
        arrowPosition.x2 = arrow.x2 ? arrow.x2 : x + width / 2;
        arrowPosition.y2 = arrow.y2 ? arrow.y2 : y + height;
    } else {
        x = nodeIndex * (width + gap) + positionX;
        y = 20 + positionY;

        arrowPosition.x1 = arrow.x1 ? arrow.x1 : x + width + gap - 1.5;
        arrowPosition.y1 = arrow.y1 ? arrow.y1 : y + height / 2;
        arrowPosition.x2 = arrow.x2 ? arrow.x2 : x + width - 1.5;
        arrowPosition.y2 = arrow.y2 ? arrow.y2 : y + height / 2;
    }

    let innerTextX = x;

    if (pointer) {
        const pointerSize = width / 5;

        innerTextX = x - pointerSize / 2;
    }

    return (
        <g>
            <MainRectangle
                x={x}
                y={y}
                width={width}
                height={height}
                color={color}
            />
            {pointer &&
                <Pointer
                x={x}
                y={y}
                width={width}
                height={height}
                pointed={pointed}
                />
            }
            <InnerText
                x={innerTextX}
                y={y}
                width={width}
                height={height}
                text={text}
            />
            {arrow &&
                <Arrow
                x1={arrowPosition.x1}
                y1={arrowPosition.y1}
                x2={arrowPosition.x2}
                y2={arrowPosition.y2}
                />
            }
            {innerBorder &&
                <InnerBorder
                x={x}
                y={y}
                width={width}
                height={height}
                pointer={pointer}
                />
            }
            {label &&
                <LabelAbove
                x={x}
                y={y}
                width={width}
                height={height}
                text={label}
                selected={innerBorder}
                />
            }
            {frame &&
                <OuterFrame x={x} width={width} frame={frame} />
            }
        </g>
    )
};

export default Rectangle;
