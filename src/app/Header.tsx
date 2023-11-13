import Link from "next/link";

function Header() {
    return (<>
        <div className="fixed top-0 left-0 flex justify-center p-4 w-full space-x-16 border-b border-black bg-white">
            <p>Waveform Visualiser</p>
        </div>
    </>);
}

export default Header;