import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const InnerText = ({ x, width, height, text }) => {
    const ref = useRef();

    useEffect(() => {
        const svg = d3.select(ref.current);

        svg.append("text")
            .attr("x", x + 1)
            .attr("y", height * 0.5)
            .attr("text-anchor", "start")
            .attr("dominant-baseline", "central")
            .attr("font-size", `${width / 6}px`)
            .attr("fill", "white")
            .text(text);
    }, [width]);

    return <g ref={ref}></g>;
};

export default InnerText;
