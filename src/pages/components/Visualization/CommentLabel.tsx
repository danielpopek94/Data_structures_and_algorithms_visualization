import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const CommentLabel = ({ comment }) => {
    const ref = useRef();

    useEffect(() => {
        const svg = d3.select(ref.current);

        svg.selectAll('text').remove();
        svg.selectAll('rect').remove();

        const text = svg.append("text")
            .attr("x", 6)
            .attr("y", 6)
            .attr("text-anchor", "start")
            .attr("dominant-baseline", "central")
            .attr("font-size", `${4}px`)
            .attr("fill", "black")
            .style("border-radius", "5px")
            .text(comment);

        const textBox = text.node().getBBox();

        svg.append("rect")
            .attr("x", textBox.x - 5)
            .attr("y", textBox.y - 1)
            .attr("width", textBox.width + 10)
            .attr("height", textBox.height + 2)
            .attr("fill", "none")
            .attr("stroke", "black")
            .attr("stroke-width", 0.5)
            .attr("rx", 5)
            .attr("ry", 20);
    }, []);

    return <g ref={ref}></g>;
};

export default CommentLabel;
