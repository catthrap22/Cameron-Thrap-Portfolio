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
                px-45
                pb-40
                "
        >
            {/* this is the text blob on the right side of the page. */}
            <div className="flex flex-col flex-1 gap-y-3 justify-center w-12.5 content-center">
                <div className="self-stretch justify-center text-white text-6xl font-bold font-['Inter'] leading-16">Cameron Thrap</div>
                <div className="self-stretch justify-center text-blue-400 text-2xl font-bold font-['Inter'] leading-6">Voice Actor</div>
                <div className="justify-start text-white text-2xl font-bold font-['Inter'] leading-6">Respectably, caring, and efficiently </div>
                <div className="justify-start text-white text-2xl font-bold font-['Inter'] leading-6">creating art and entertainment </div>
                <div className="space-x-2 py-2">
                    <Button className="h-16 w-40 rounded-[20px] bg-white text-2xl font-bold text-indigo-950 font-inter hover:text-blue-400">
                        Contact
                    </Button>
                    <Button className="h-16 w-40 rounded-[20px] bg-white text-2xl font-bold text-indigo-950 font-inter hover:text-blue-400">
                        Demos
                    </Button>
                </div>
            </div>

            {/* This is the image of cameron thrap that shows on the title screen of the website */}
            <Image
                className="w-217 h-289.25 -mt-20"
                src="/CameronThrapTransparentBackground.png"
                alt="
                    Transparent Picture of Cameron Thrap holding a lightsaber.
                    He is wearing a blue shirt and has a slight smirk.
                "
                width={1620}
                height={2160}>
            </Image>
        </section>
    );
}

