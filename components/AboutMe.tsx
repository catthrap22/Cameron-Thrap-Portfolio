import {AboutMeItems} from "@/data";
import { BentoGrid, BentoGridItem } from "./AboutMeBentoGrid";

export default function AboutMe() {
    return (
        <section id="about" className="bg-[#030115] w-full h-full">
            <div className="flex flex-col items-center">
                <h1 className="text-white text-5xl md:text-6xl lg:text-[84px] font-bold font-['Inter'] leading-16 [text-shadow:0px_8px_8px_rgb(0_0_0/0.25)] pb-0 lg:pb-8">About Me</h1>
                <BentoGrid className="sm:w-full lg:w-275 py-8 max-w-7/8">
                    {AboutMeItems.map((item, i) => (
                        <BentoGridItem
                            id={item.id}
                            key={i}
                            description={item.description}
                            className={item.className}
                            img={item.img}
                            imgClassName={item.imgClassName}
                        />
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
};
