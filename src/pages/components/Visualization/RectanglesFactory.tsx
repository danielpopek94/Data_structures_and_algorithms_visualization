import MainRectangle from "@/pages/utilities/Visualization/MainRectangle";
import Pointer from "@/pages/utilities/Visualization/Pointer";
import InnerText from "@/pages/utilities/Visualization/InnerText";
import Arrow from "@/pages/utilities/Visualization/Arrow";
import InnerBorder from "./InnerBorder";

const Rectangle = ({
    nodesCount,
    nodeIndex,
    color,
    text,
    arrow,
    pointed,
    innerBorder,
    positionX = 1,
    positionY = 1 }) => {
    let y = 20 + positionY;
    const gap = 10;
    const width = (100 - gap * nodesCount) / nodesCount;
    const height = width / 2.5;
    const x = nodeIndex * (width + gap) + positionX;

    return (
        <g>
            <MainRectangle
                x={x}
                y={y}
                width={width}
                height={height}
                color={color}
            />
            <Pointer
                x={x}
                y={y}
                width={width}
                height={height}
                pointed={pointed}
            />
            <InnerText
                x={x}
                y={y}
                width={width}
                height={height}
                text={text}
            />
            {arrow &&
                <Arrow
                x1={arrow.x1 ? arrow.x1 : x + width + gap - 1.5}
                y1={arrow.y1 ? arrow.y1 : y + height / 2}
                x2={arrow.x2 ? arrow.x2 : x + width - 1.5}
                y2={arrow.y2 ? arrow.y2 : y + height / 2}
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
