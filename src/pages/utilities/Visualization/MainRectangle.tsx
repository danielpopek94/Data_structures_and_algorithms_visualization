import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const MainRectangle = ({ x, y, width, height, color }) => {
    const ref = useRef();

    useEffect(() => {

        const svg = d3.select(ref.current);
        svg.selectAll('rect').remove();

        svg.append("rect")
            .attr("x", x)
            .attr("y", y)
            .attr("width", width)
            .attr("height", height)
            .attr("fill", color)
            .attr("rx", 1)
            .attr("ry", 1);


    }, [x, y, width, height, color]);

    return <g ref={ref}></g>;
};

export default MainRectangle;