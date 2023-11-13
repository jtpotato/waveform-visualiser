import { useState } from "react";
import Header from "./Header";
import Link from "next/link";

function Home() {
  return (<>
    <Header />
    <main className="p-4 mt-16 flex justify-center">
      <div className="max-w-2xl">
        <div className="flex justify-center my-16">
          <div className="border border-black rounded-full px-8 py-4 w-fit">
            <Link href="/app">Proceed To App</Link>
          </div>
        </div>

        <h1 className="text-4xl font-bold">About</h1>
        <p>This page/applet/whatever you want to call it was made as a story element/prop for an upcoming secret project 🤫🤫🤫🤫</p>
        <p>(That&apos;s why it looks reasonable... we can&apos;t mention design inspiration for copyright reasons though 😔)</p>
        <br/>
        <p>If you wish to use this in your own projects, of course you can! No attribution required. Although we will take free promotion any day :P</p>
        <br/>
        <p>Everything runs on-device, we swear. We literally cannot take your audio - we&apos;re a bit too poor for that 😭</p>
      </div>
    </main>
  </>)
}

export default Home;