"use client"

import {AudioPlayer} from "@/components/AudioPlayer";
import Image from "next/image";

export default function Demos() {
    return (
        <section
            id="demos"
            className="bg-[#030115] w-full h-full flex flex-row items-center justify-center"
        >
            <div className="flex flex-row justify-center items-stretch mx-8 my-16 lg:my-32 w-full lg:w-5/8 h-fit gap-8">
              <div className="space-y-8 w-full md:w-2/3 lg:w-1/2 flex flex-col justify-center">
                  <h1 className="text-white text-5xl font-bold font-['Inter'] leading-12">Demos</h1>
                  <AudioPlayer src="/src/Demos/CommercialCameronThrapDEMO.mp3" title="Comercial Demo" />
                  <AudioPlayer src="/src/Demos/InteractiveAndVideoGamesCameronThrapDEMO.mp3" title="Interactive and Video Games Demo" />
                  <AudioPlayer src="/src/Demos/AudiobookDemo.mp3" title="Audiobook Demo" />
                  <AudioPlayer src="/src/Demos/ELearningDemo.mp3" title="E-Learning Demo" />
              </div>
              <div className="hidden md:flex flex-1 relative w-1/3 lg:w-1/2 min-w-[350px] max-w-[400px]">
                  <Image
                      src="/src/NingaTurtle.jpg"
                      alt="Picture of Cameron Thrap with a ninga turtle shirt"
                      fill
                      className="rounded-2xl object-cover"
                      loading="eager"
                  />
              </div>
          </div>
        </section>
    )
}