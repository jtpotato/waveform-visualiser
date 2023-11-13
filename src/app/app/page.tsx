"use client"

import { useState } from "react";
import Header from "../Header";
import FilePicker from "@/lib/FilePicker";
import FileVisualiser from "@/lib/FileVisualiser";

function App() {
    const [file, setFile] = useState<File | null>(null);

    return (
        <>
            <Header />
            <div className="flex flex-col justify-center items-center h-screen space-y-4">
                {file ? <FileVisualiser file={file} /> : <FilePicker setFile={setFile} />}
                
            </div>
        </>
    )
}

export default App;