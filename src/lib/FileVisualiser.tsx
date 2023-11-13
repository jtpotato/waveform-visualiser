import { useEffect, useRef, useState } from "react";
import GenerateWaveformHeight from "./visualiser/GenerateWaveformHeight";
import DrawToCanvas from "./visualiser/DrawToCanvas";

function FileVisualiser({ file }: { file: File }) {
    const [heights, setHeights] = useState<number[]>([]);

    useEffect(() => {
        (async () => {
            console.log("Generating heights");
            const heights = await GenerateWaveformHeight(file);
            console.log("Heights changed");
            setHeights(heights);
        })()
    }, [])

    return (<>
        <p>Note: Icon buttons here are purely cosmetic and pretty useless.</p>
        <div className="h-1/4"></div>
        <DrawToCanvas heights={heights} />
    </>);
}

export default FileVisualiser;