import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const Arrow = ({ width, height, steps }) => {
    const ref = useRef();

    useEffect(() => {
        const svg = d3.select(ref.current);

        svg.append("path")
            .attr("d", "M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z")
            .attr("fill", "black")
            .attr("transform", `translate(${width - 2}, ${-height / steps}) scale(.4)`);
    }, [width]);

    return <g ref={ref}></g>;
};

export default Arrow;
