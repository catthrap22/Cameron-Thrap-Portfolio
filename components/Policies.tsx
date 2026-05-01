import {items} from "@/data";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "@/components/ui/accordion"

export default function Policies() {
    return (
        <section
            id="policies"
            className="bg-[#030115] w-full h-full flex flex-col items-center justify-center relative z-0 sm:p-8 md:p-0 "
        >
            <h1 className="pb-8 text-white text-6xl font-bold font-['Inter'] leading-16 [text-shadow:0px_8px_8px_rgb(0_0_0/0.25)]">Policies</h1>
            <Accordion
                type="single"
                collapsible
                className="md:w-1/2 sm:w-full rounded-lg border bg-white text-indigo-950 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            >
                {items.map((item) => (
                    <AccordionItem
                        key={item.id}
                        value={item.title}
                        className="border-b px-4 last:border-b-0"
                    >
                        <AccordionTrigger
                            className="text-2xl font-bold font-inter leading-6">{item.title}
                        </AccordionTrigger>
                        <AccordionContent className="h-fit">
                            {item.description}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    );
}