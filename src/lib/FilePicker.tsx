"use client"

import { useRef } from "react";

function FilePicker({ setFile }: { setFile: (file: File) => void }  ) {
    const inputElementRef = useRef<HTMLInputElement>(null);

    function onFileRecieved() {
        const file = inputElementRef.current!.files![0];
        setFile(file);
    }
  
    return (<>

        <p>Load an audio file to get started</p>
        <div>
          <label htmlFor="file-upload">
            <div className="border border-black rounded-full px-8 py-4 cursor-pointer">
              Choose file
            </div>
          </label>
          <input id="file-upload" type="file" accept="audio/*" className="w-fit custom-file-input" onChange={onFileRecieved} ref={inputElementRef} />
        </div>
    </>);
}

export default FilePicker;