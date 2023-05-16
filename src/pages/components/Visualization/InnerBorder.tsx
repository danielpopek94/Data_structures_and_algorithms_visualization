import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const InnerBorder = ({ x, y, width, height, pointer }) => {
    const ref = useRef();
    const border = 0.5;
    const currentWidth = pointer ? width / 5 : -0.5;

    useEffect(() => {
        const svg = d3.select(ref.current);
        svg.selectAll('rect').remove();

        svg.append("rect")
            .attr("x", x + 1)
            .attr("y", y + 1)
            .attr("width", width - currentWidth - 2.5)
            .attr("height", height - 2)
            .attr("fill", "none")
            .attr("stroke", "white")
            .attr("stroke-width", border)
            .attr("rx", 0.5)
            .attr("ry", 0.5);
    });

    return <g ref={ref}></g>;
};

export default InnerBorder;