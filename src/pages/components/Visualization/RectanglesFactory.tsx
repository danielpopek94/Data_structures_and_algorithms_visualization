import MainRectangle from "@/pages/utilities/Visualization/MainRectangle";
import Pointer from "@/pages/utilities/Visualization/Pointer";
import InnerText from "@/pages/utilities/Visualization/InnerText";
import Arrow from "@/pages/utilities/Visualization/Arrow";
import InnerBorder from "./InnerBorder";

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
    orientation = 'row'
}) => {
    const gap = 10;
    const width = (100 - gap * nodeSize) / nodeSize;
    const height = width / 2.5;
    let x, y, innerTextX;
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
        innerTextX = x + 2;

        arrowPosition.x1 = arrow.x1 ? arrow.x1 : x + width / 2;
        arrowPosition.y1 = arrow.y1 ? arrow.y1 : y + height + gap - 1.5;
        arrowPosition.x2 = arrow.x2 ? arrow.x2 : x + width / 2;
        arrowPosition.y2 = arrow.y2 ? arrow.y2 : y + height;
    } else {
        x = nodeIndex * (width + gap) + positionX;
        y = 20 + positionY;
        innerTextX = pointer ? x : x + 2;

        arrowPosition.x1 = arrow.x1 ? arrow.x1 : x + width + gap - 1.5;
        arrowPosition.y1 = arrow.y1 ? arrow.y1 : y + height / 2;
        arrowPosition.x2 = arrow.x2 ? arrow.x2 : x + width - 1.5;
        arrowPosition.y2 = arrow.y2 ? arrow.y2 : y + height / 2;
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
                />
            }

        </g>
    )
};

export default Rectangle;
