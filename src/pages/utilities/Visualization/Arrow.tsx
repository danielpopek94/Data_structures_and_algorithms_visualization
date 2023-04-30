import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const Arrow = ({ x1, y1, x2, y2 }) => {
    const ref = useRef();

    useEffect(() => {
        const svg = d3.select(ref.current);
        svg.selectAll('path').remove();

        const line = d3
            .line()
            .x((d) => d[0])
            .y((d) => d[1]);

        svg
            .append("path")
            .attr("d", line([[x2, y2], [x1, y1]]))
            .attr("stroke", "black")
            .attr("stroke-width", 0.5)
            .attr("fill", "none")
            .attr("marker-start", "url(#dot)")
            .attr("marker-end", "url(#arrow)");
    }, [x1, y1, x2, y2]);

    return (
        <>
            < g ref={ref} ></g >
            <defs>
                <marker
                    id="arrow"
                    viewBox="0 0 10 10"
                    refX="5"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto-start-reverse"
                >
                    <path d="M0 0L10 5L0 10z" fill="black" />
                </marker>
            </defs>
            <defs>
                <marker
                    id="dot"
                    viewBox="0 0 10 10"
                    refX="5"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto-start-reverse"
                >
                    <circle cx="5" cy="5" r="2" fill="black" />
                </marker>
            </defs>

        </>
    );
};

export default Arrow;
