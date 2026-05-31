"use client";

import {cn} from "@/lib/utils";

export const BentoGrid = (
        {
            className, children,
        }: {
            className?: string;
            children?: React.ReactNode;
        }
    ) =>
{
    return (
        <div
            className={cn("grid grid-cols-1 md:grid-cols-6 lg:grid-cols-10 auto-rows-[minmax(120px,auto)] gap-4 lg:gap-8 mx-auto", className)}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = (
        {
            className, description, img, imgClassName, titleClassName,
        }: {
            className?: string;
            id: number;
            title?: string | React.ReactNode;
            description?: string | React.ReactNode;
            img?: string;
            imgClassName?: string;
            titleClassName?: string;
            spareImg?: string;
        }
    ) =>

{
    return (
        <div
            className={cn("row-span-1 relative overflow-hidden group/bento justify-between flex flex-col space-y-4 ", className)}
        >
            <div className="w-full h-full absolute">
                {img && (<img
                        src={img}
                        alt={img}
                        className={cn(imgClassName, "object-cover object-center rounded-3xl")}
                    />)}
            </div>
            <div
                className={cn(titleClassName, "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-10 flex flex-col")}
            >
                <div className="font-inter text-xl lg:text-2xl font-bold text-white z-10 font-inter md:text-base
                 {/*text-center*/}
                 ">
                    {description}
                </div>

            </div>
        </div>
    );
};