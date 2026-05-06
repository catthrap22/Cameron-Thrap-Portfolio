"use client"

import {AudioPlayer} from "@/components/AudioPlayer";
import Image from "next/image";

export default function Demos() {
    return (
        <section
            id="demos"
            className="bg-[#030115] w-screen h-screen flex flex-row items-center justify-center"
        >
          <div className="flex flex-row items-center sm:w-full lg:w-275">
              <div className="space-y-8 w-150 mx-4 h-full">
                  <h1 className="text-white text-5xl font-bold font-['Inter'] leading-12">Demos</h1>
                  <AudioPlayer src="/src/Demos/CommercialCameronThrapDEMO.mp3" title="Comercial Demo" />
                  <AudioPlayer src="/src/Demos/AudiobookDemo.mp3" title="Audiobook Demo" />
                  <AudioPlayer src="/src/Demos/ELearningDemo.mp3" title="E-Learning Demo" />
                  <AudioPlayer src="/src/Demos/InteractiveAndVideoGamesCameronThrapDEMO.mp3" title="Interactive and Video Games Demo" />
              </div>
              <div className="flex flex-row items-end p-8">
                  {/* TODO:// see how I can make this in line with the bottom of the button for the play bar*/}
                  <Image
                      src="/src/NingaTurtle.jpg"
                      alt="Picture of Cameron Thrap with a ninga turtle shirt"
                      width={4284}
                      height={5712}
                      className="w-90 h-full pt-1 rounded-2xl mx-4"
                      loading="eager"
                  />
              </div>
          </div>
        </section>
    )
}