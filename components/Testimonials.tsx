"use client"
import {testimonials} from "@/data";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import AutoScroll from "embla-carousel-auto-scroll"

export default function Testimonials() {
    const plugin = AutoScroll({
        speed: 2,
        stopOnInteraction: false,
        playOnInit: true
    })

    return (
        <section
            id="testimonials"
            className="bg-[#030115]"
        >
            <div className="mt-0 md:-mt-20 -mx-20 bg-white sm:rotate-0 md:-rotate-4 px-12 py-5 md:py-10 lg:py-20 space-x-2">
                <Carousel
                    plugins={[plugin]}
                    opts={{
                        align: "center",
                        loop: true,
                        dragFree: false,
                        containScroll: "trimSnaps",
                        skipSnaps: false,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="ml-.5">
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index} className="p-4 basis-1/3">
                                <div className="h-full">
                                    <div className="w-full h-90 md:h-90 bg-indigo-700 rounded-[50px] border border-zinc-700/40 text-white p-8 flex flex-col justify-between">
                                        <p className="md:text-xl font-normal leading-6 text-balance">
                                            {testimonial.quote}
                                        </p>
                                        <div>
                                            <p className="text-2xl md:text-3xl font-bold leading-9 text-balance">{testimonial.name}</p>
                                            <p className="md:text-xl text-slate-300 leading-6 text-balance">{testimonial.title}</p>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
}
