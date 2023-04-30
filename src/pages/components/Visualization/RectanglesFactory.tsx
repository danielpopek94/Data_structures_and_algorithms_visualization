import MainRectangle from "@/pages/utilities/Visualization/MainRectangle";
import Pointer from "@/pages/utilities/Visualization/Pointer";
import InnerText from "@/pages/utilities/Visualization/InnerText";
import Arrow from "@/pages/utilities/Visualization/Arrow";

const Rectangle = ({ nodesCount, nodeIndex, color, text, pointer }) => {
    const marginTop = 20;
    const gap = 10;
    const width = (100 - gap * nodesCount) / nodesCount;
    const height = width / 2.5;
    const currentPosition = nodeIndex * (width + gap);

    return (
        <g>
            <MainRectangle
                x={currentPosition}
                y={marginTop}
                width={width}
                height={height}
                color={color}
            />
            <Pointer
                x={currentPosition}
                y={marginTop}
                width={width}
                height={height}
            />
            <InnerText
                x={currentPosition}
                y={marginTop}
                width={width}
                height={height}
                text={text}
            />
            {pointer &&
                <Arrow
                    x1={currentPosition + width + gap - 1.5}
                    y1={marginTop + height / 2}
                    x2={currentPosition + width - 1.5}
                    y2={marginTop + height / 2}
                />
            }

        </g>
    )
};

export default Rectangle;
