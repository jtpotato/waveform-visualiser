function Home() {
  return (<>
    <div className="flex flex-col justify-center items-center h-screen space-y-4">
      <p>Load an audio file to get started</p>
      <div>
        <label htmlFor="file-upload">
          <div className="border border-black rounded-full px-8 py-4">
            Choose file
          </div>
        </label>
        <input id="file-upload" type="file" accept="audio/*" className="w-fit custom-file-input" />
      </div>
      <p>Everything runs on-device. We swear. Turn off internet and try it!</p>
    </div>
  </>);
}

export default Home;