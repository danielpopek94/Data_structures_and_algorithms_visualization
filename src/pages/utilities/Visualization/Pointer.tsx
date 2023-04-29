import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const Pointer = ({ x, width, height }) => {
    const ref = useRef();
    const border = 0.3;
    const currentWidth = width / 5;

    useEffect(() => {
        const svg = d3.select(ref.current);

        svg.append("rect")
            .attr("x", x + width - currentWidth - border)
            .attr("y", border)
            .attr("width", currentWidth)
            .attr("height", height - border * 2)
            .attr("fill", 'white');
    });

    return <g ref={ref}></g>;
};

export default Pointer;