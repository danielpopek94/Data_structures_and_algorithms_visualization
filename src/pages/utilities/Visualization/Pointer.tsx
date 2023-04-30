import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const Pointer = ({ x, y, width, height }) => {
    const ref = useRef();
    const border = 0.5;
    const currentWidth = width / 5;

    useEffect(() => {
        const svg = d3.select(ref.current);
        svg.selectAll('rect').remove();

        svg.append("rect")
            .attr("x", x + width - currentWidth - border)
            .attr("y", border + y)
            .attr("width", currentWidth)
            .attr("height", height - border * 2)
            .attr("fill", 'white');
    });

    return <g ref={ref}></g>;
};

export default Pointer;