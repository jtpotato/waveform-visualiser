import ffmpeg from "ffmpeg.js/ffmpeg-mp4.js";

function WebmToMp4(webmData: Blob) {
  let stderr = "";
  const command = ffmpeg({
    MEMFS: [{ name: "input.webm", data: webmData }],
    arguments: [
      "-i",
      "input.webm",
      "-codec",
      "copy",
      "-strict",
      "-2",
      "output.mp4",
    ],
    print: () => {},
    printErr: (data: string) => {
      stderr += data;
    },
    onExit: (code: number) => {
      if (code !== 0) {
        throw new Error(`Conversion error: ${stderr}`);
      }
    },
  });

  return command.MEMFS[0].data;
}

export default WebmToMp4;