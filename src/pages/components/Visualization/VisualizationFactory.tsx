import { LinkedListVisualization } from "../../content/linkedList/visualization";
import React, { useRef } from "react";
import Ractangle from "./RactanglesFactory";


const VisualizationFactory = () => {
    const ref = useRef();

    const steps = LinkedListVisualization;
    return (
        <div>
            <svg ref={ref} width="100%" height="100%" viewBox="0 0 100 100">
                {steps.map(e => (
                    <Ractangle
                        steps={steps.length}
                        stepIndex={e.index}
                        color={e.color}
                        text={e.text}
                        key={e.index}
                    />
                ))}

            </svg>
        </div>
    );
};

export default VisualizationFactory;