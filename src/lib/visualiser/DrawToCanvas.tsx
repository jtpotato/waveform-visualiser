import { useEffect, useRef, useState } from "react";

function DrawToCanvas({ heights }: { heights: number[] }) {
    const canvasEl = useRef<HTMLCanvasElement>(null);
    const [canvasScroll, setCanvasScroll] = useState<number>(0);

    const sampleWidth = 16;
    const spacing = 6;
    const height = 30;
    const windowWidth = 100;

    function draw(translate: number = 0) {
        const canvas = canvasEl.current!;
        const ctx = canvas.getContext("2d")!;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < heights.length; i++) {
            ctx.fillStyle = "#000000";
            ctx.beginPath();
            ctx.roundRect(i * (sampleWidth + spacing) - translate, 250 - (heights[i] * height / 2), sampleWidth, heights[i] * height, 100);
            ctx.fill();
        }
    }

    useEffect(() => {
        // Set up mediarecorder
        const canvas = canvasEl.current!;
        const ctx = canvas.getContext("2d")!;
        const stream = canvas.captureStream(60);
        let recordedFrames: Blob[] = []

        const mediaRecorder = new MediaRecorder(stream, { mimeType: "video/webm;codecs=h264" });
        mediaRecorder.ondataavailable = (e) => {
            recordedFrames.push(e.data);
        }
        mediaRecorder.onstop = () => {
            const blob = new Blob(recordedFrames, { type: "video/webm;codecs=h264" });

            const a = document.createElement("a");
            a.href = URL.createObjectURL(blob);
            a.download = "video.webm";
            a.click();
        }

        function animate(timestamp: number) {
            const offset = timestamp * 2;

            if (offset > heights.length * (sampleWidth + spacing)) {
                console.log(offset);
                mediaRecorder.stop();
                return;
            }
            draw(offset);
            requestAnimationFrame(animate);
        }

        if (heights.length > 0) {
            mediaRecorder.start();
            requestAnimationFrame(animate)
        }
    }, [heights])

    return (
        <>
            <p>Sit tight! We&apos;re recording your video.</p>
            <div style={{ transform: "scale(0.25)" }}>
                <canvas ref={canvasEl} width={windowWidth * (sampleWidth + spacing)} height="500"></canvas>
            </div>
        </>


    );
}

export default DrawToCanvas;