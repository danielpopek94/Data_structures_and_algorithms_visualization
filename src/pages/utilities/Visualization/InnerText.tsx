import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const InnerText = ({ x, y, width, height, text }) => {
    const ref = useRef();

    useEffect(() => {
        const svg = d3.select(ref.current);
        svg.selectAll('text').remove();

        svg.append("text")
            .attr("x", x + 9)
            .attr("y", y + height * 0.5)
            .attr("text-anchor", "middle")
            .attr("dominant-baseline", "central")
            .attr("font-size", `${width / 6}px`)
            .attr("fill", "white")
            .text(text);
    }, [x, y, width, height, text]);

    return <g ref={ref}></g>;
};

export default InnerText;
