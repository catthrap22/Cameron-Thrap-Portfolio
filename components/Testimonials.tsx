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
            <div className="rounded-3xl -mt-50 -mx-20 bg-white -rotate-4 px-12 py-20 space-x-2">
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
                    <CarouselContent className="-ml-4">
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index} className="p-4 basis-full md:basis-1/2 lg:basis-1/3">
                                <div className="h-full">
                                    <div className="w-full h-72 bg-indigo-700 rounded-[50px] border border-zinc-700/40 text-white p-8 flex flex-col justify-between">
                                        <p className="text-xl font-normal leading-6">
                                            {testimonial.quote}
                                        </p>
                                        <div>
                                            <p className="text-3xl font-bold leading-9">{testimonial.name}</p>
                                            <p className="text-xl text-slate-300 leading-6">{testimonial.title}</p>
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
