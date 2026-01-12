"use client"
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  
  const router = useRouter()
  const [text, setText] = useState("")

  const createTree = () => {
    router.push(`/generate?handle=${text}`)
  }

  return (
    <main className="font-sans-serif">
      <section className="bg-[#D2E823] min-h-[100vh] grid grid-cols-2">
       <div className="flex justify-center flex-col ml-[5vw] gap-7">
        <p className="text-[#254F1A] font-extrabold text-7xl">A link in bio built for you.</p>
        <p className="text-[#254F1A] font-semibold text-xl">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
        <div className="input flex gap-2 mt-5">
        <input value={text} onChange={(e)=> setText(e.target.value)} type="text" className="px-12 py-2 focus:outline-green-800 rounded-md bg-white text-black text-lg" placeholder="Enter your Handle" />
        <button onClick = {() => {createTree()} } className="bg-[#254F1A] text-white rounded-full px-16 py-4 font-bold text-lg">Get started for free</button>
       </div>   
       </div>
       <div className="flex items-center justify-center flex-col mr-[5vw] mt-[15vh]">
        <img src="/home1.png" alt="homepage image" className="rounded-4xl h-160"/>
                
       </div>
      </section>

      <section className="bg-blue-500 min-h-[100vh] grid grid-cols-2">
        <div className="flex items-start justify-center flex-col ml-[5vw]">
        <img src="/home2.png" alt="homepage image" className="h-[90vh] rounded-4xl"/>
                               
       </div>
          <div className="flex justify-center flex-col gap-7 mr-[5vw]">
        <p className="text-[#D2E823] font-extrabold text-6xl">Create and customize your Linktree in minutes</p>
        <p className="text-white font-semibold text-xl">Connect all your content across social media, websites, stores and more in one link in bio. Customize every detail or let Linktree automatically enhance it to match your brand and drive more clicks.</p>
        <div className="input flex gap-2 mt-5">
                  <button onClick = {() => {createTree()} } className="bg-[#D2E823] text-black rounded-full px-16 py-4 font-bold text-lg">Get started for free</button>
       </div>
       </div>
      
      </section>
    </main>
  );
}
