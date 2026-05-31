import {PoliciesGridItems} from "@/data";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "@/components/ui/accordion"

export default function Policies() {
    return (
        <section
            id="policies"
            className="bg-[#030115] w-full h-full flex flex-col items-center justify-center relative z-0 p-0 md:p8 "
        >
            <div className="flex justify-center flex-col items-center w-full h-full my-16 lg:my-32 p-2">
            <h1 className="pb-8 text-white text-5xl md:text-6xl lg:text-[84px] font-bold font-['Inter'] leading-16 [text-shadow:0px_8px_8px_rgb(0_0_0/0.25)]">Policies</h1>
            <Accordion
                type="single"
                collapsible
                className="sm:w-full lg:w-275 rounded-lg border bg-white text-indigo-950 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] "
            >
                {PoliciesGridItems.map((item) => (
                    <AccordionItem
                        key={item.id}
                        value={item.title}
                        className="border-b px-4 last:border-b-0 "
                    >
                        <AccordionTrigger
                            className="text-2xl md:text-4xl p-6 font-bold font-inter leading-6">{item.title}
                        </AccordionTrigger>
                        <AccordionContent className="h-fit px-3 text-xl font-inter">
                            {item.description}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
                </div>
        </section>
    );
}
