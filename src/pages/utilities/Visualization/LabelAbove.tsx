import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const LabelAbove = ({ x, y, width, height, text, selected }) => {
    const ref = useRef();

    useEffect(() => {
        const svg = d3.select(ref.current);
        svg.selectAll('text').remove();

        svg.append("text")
            .attr("x", x + 9)
            .attr("y", y - (height / 2))
            .attr("text-anchor", "middle")
            .attr("dominant-baseline", "central")
            .attr("font-size", `${width / 4}px`)
            .attr("fill", selected ? "red" : "black")
            .text(text);
    }, [x, y, width, height, text]);

    return <g ref={ref}></g>;
};

export default LabelAbove;
