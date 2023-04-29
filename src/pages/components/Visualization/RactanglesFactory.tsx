import MainRactangle from "@/pages/utilities/Visualization/MainRactangle";
import Pointer from "@/pages/utilities/Visualization/Pointer";
import InnerText from "@/pages/utilities/Visualization/InnerText";
import Arrow from "@/pages/utilities/Visualization/Arrow";

const Ractangle = ({ steps, stepIndex, color, text }) => {
    const gap = 10;
    const width = (100 - gap * steps) / steps;
    const height = width / 2.5;
    const currentPosition = stepIndex * (width + gap);

    return (
        <g>
            <MainRactangle
                x={currentPosition}
                y={0}
                width={width}
                height={height}
                color={color}
            />
            <Pointer
                x={currentPosition}
                width={width}
                height={height}
            />
            <InnerText
                x={currentPosition}
                width={width}
                height={height}
                text={text}
            />
            <Arrow
                width={width}
                height={height}
                steps={steps}
            />
        </g>
    )
};

export default Ractangle;
