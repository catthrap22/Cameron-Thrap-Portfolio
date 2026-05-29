import {Button} from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section
            id="home"
            className="
                flex
                flex-1
                w-full
                h-full
                flex-row
                items-center
                bg-[linear-gradient(235.86deg,rgb(0,0,7)_15.356%,rgb(17,16,80)_54.565%,rgb(55,57,186)_87.89%)]
                md:px-20
                lg:px-45
                pb-20
                justify-between
                pt-20
                lg:pt-5
                "
        >
            {/* this is the text blob on the right side of the page. */}
            <div className="flex flex-col flex-1 items-center md:items-start">
                <div className="text-white text-4xl lg:text-6xl font-bold font-['Inter'] leading-16 text-nowrap">Cameron Thrap</div>
                <div className="text-blue-400 text-xl font-bold font-['Inter'] pb-3 leading-6">Voice Actor</div>
                <div className="text-white text-xl font-bold font-['Inter'] leading-6 text-nowrap">Respectably, caring, and efficiently</div>
                <div className="text-white text-xl font-bold font-['Inter'] leading-6 pb-3">creating art and entertainment </div>
                <div className="space-x-2 py-2 flex flex-row">
                    <Button className="h-16 w-40 rounded-[20px] bg-white text-2xl font-bold text-indigo-950 font-inter hover:text-blue-400">
                        Contact
                    </Button>
                    <Button className="h-16 w-40 rounded-[20px] bg-white text-2xl font-bold text-indigo-950 font-inter hover:text-blue-400">
                        Demos
                    </Button>
                </div>
            </div>

            {/* This is the image of Cameron thrap that shows on the title screen of the website */}
            <Image
                className="w-1/2 lg:w-9/16 mt-0 lg:-mt-13 hidden md:block"
                src="/CameronThrapTransparentBackground.png"
                alt="
                    Transparent Picture of Cameron Thrap holding a lightsaber.
                    He is wearing a blue shirt and has a slight smirk.
                "
                loading="eager"
                width={1620}
                height={2160}>
            </Image>
        </section>
    );
}

