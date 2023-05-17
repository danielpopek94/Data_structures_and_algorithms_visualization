import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const OuterFrame = ({ x, width }) => {
    const ref = useRef();

    useEffect(() => {
        const svg = d3.select(ref.current);
        svg.selectAll('rect').remove();

        const rectHeight = 50;
        const rectWidth = 30;
        const borderSize = 1;

        // Left border
        svg.append("rect")
            .attr("x", x - width / 2)
            .attr("y", 13)
            .attr("width", borderSize)
            .attr("height", rectHeight)
            .attr("fill", 'black');

        // Right border
        svg.append("rect")
            .attr("x", x - width / 2 + rectWidth - borderSize)
            .attr("y", 13)
            .attr("width", borderSize)
            .attr("height", rectHeight)
            .attr("fill", 'black');

        // Bottom border
        svg.append("rect")
            .attr("x", x - width / 2)
            .attr("y", 13 + rectHeight - borderSize)
            .attr("width", rectWidth)
            .attr("height", borderSize)
            .attr("fill", 'black');

    }, [x, width]);

    return <g ref={ref}></g>;
};

export default OuterFrame;
