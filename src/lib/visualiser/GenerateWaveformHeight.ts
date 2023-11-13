// Credit: https://css-tricks.com/making-an-audio-waveform-visualizer-with-vanilla-javascript/
const getAudioBufferFromFile = async (file: File): Promise<AudioBuffer> => {
    const fileReader = new FileReader();
    const audioContext = new AudioContext();

    return new Promise<AudioBuffer>((resolve, reject) => {
        fileReader.onload = async () => {
            try {
                const audioBuffer = await audioContext.decodeAudioData(fileReader.result as ArrayBuffer);
                resolve(audioBuffer);
            } catch (error) {
                reject(error);
            }
        };
        fileReader.onerror = error => reject(error);
        fileReader.readAsArrayBuffer(file);
    });
};


const filterData = (audioBuffer: AudioBuffer) => {
    const rawData = audioBuffer.getChannelData(0); // We only need to work with one channel of data
    const blockSize = 500; // the number of samples in each subdivision
    const filteredData = [];
    for (let i = 0; i < Math.floor(rawData.length / blockSize); i++) {
      let blockStart = blockSize * i; // the location of the first sample in the block
      let sum = 0;
      for (let j = 0; j < blockSize; j++) {
        sum = sum + Math.abs(rawData[blockStart + j]) // find the sum of all the samples in the block
      }
      filteredData.push(sum);
    }
    console.log("Filtered Data: ", filteredData)
    return filteredData;
}

const normalizeData = (filteredData: number[]) => {
    // Find maximum
    let max = 0;
    filteredData.forEach(n => {
        if (n > max) {
            max = n;
        }
    });

    // Find out what to multiply it by to set it to 10.
    let multiplier = 10 / max;

    // Multiply each value by the multiplier.
    let normalizedData = filteredData.map(n => n * multiplier);

    return normalizedData
}

const GenerateWaveformHeight = async (file: File) => {
    const fileReader = new FileReader();
    const audioContext = new AudioContext();
    let currentBuffer: AudioBuffer;

    currentBuffer = await getAudioBufferFromFile(file);
    const filteredData = filterData(currentBuffer);
    const normalisedData = normalizeData(filteredData);
    return normalisedData;
}

export default GenerateWaveformHeight;