import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const InnerText = ({ x, y, width, height, text }) => {
    const ref = useRef();
    const [textWidth, setTextWidth] = useState(0);

    useEffect(() => {
        const svg = d3.select(ref.current);
        svg.selectAll('text').remove();

        const textElement = svg.append("text")
            .attr("x", x + textWidth + (width - textWidth) / 2)
            .attr("y", y + height * 0.5)
            .attr("text-anchor", "end")
            .attr("dominant-baseline", "central")
            .attr("font-size", `${width / 6}px`)
            .attr("fill", "white")
            .text(text);

        const bbox = textElement.node().getBBox();
        setTextWidth(bbox.width);
    }, [x, y, width, height, text, textWidth]);

    return <g ref={ref}></g>;
};

export default InnerText;
