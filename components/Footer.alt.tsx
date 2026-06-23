import Link from "next/link";
import {Copyright} from "lucide-react";
import {Button} from "@/components/ui/button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faImdb, faInstagram, faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faCopy} from "@fortawesome/free-solid-svg-icons";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import Image from "next/image";

export default function Footer() {
    const socialLinks: { href: string, icon: IconDefinition, alt: string }[] = [
        {
            href: "https://www.imdb.com/name/nm14713806/?ref_=fn_t_1",
            icon: faImdb,
            alt: "Link to Internet movie database profile for Cameron Thrap"
        },
        {
            href: "https://www.instagram.com/cameronthrap/",
            icon: faInstagram,
            alt: "Link to the Instagram profile for Cameron Thrap"
        },
        {
            href: "https://www.facebook.com/cameron.thrap/",
            icon: faFacebook,
            alt: "Link to the Facebook profile for Cameron Thrap"
        },
    ]

    return (
        <section
            id="contact"
            className="bg-[#030115] w-full h-full flex flex-col items-center justify-center relative z-0 "
        >


            <div
                className="flex flex-col items-center justify-center space-y-12 bg-[linear-gradient(235.86deg,rgb(0,0,7)_15.356%,rgb(17,16,80)_54.565%,rgb(55,57,186)_87.89%)] w-full h-1/2 lg:w-3/4 lg:h-[467px] rounded-[50px] p-8 md:p-16 mx-2 mb-10 lg:my-32">
                <h1 className="text-white md:text-6xl font-bold font-['Inter'] text-center leading-16 [text-shadow:0px_8px_8px_rgb(0_0_0/0.25)] text-balance text-4xl ">Level
                    up your <span className="text-blue-400">VO</span></h1>
                {/*  TODO:// add the contact center here for the agency*/}
                <div className="flex flex-row justify-center items-center space-x-4">
                    <div className="font-inter text-xl lg:text-2xl font-bold text-white z-10 font-inter md:text-base
                 {/*text-center*/} space-y-4">
                        {/* Button Group */}
                        <div className="space-x-2">
                            <Button asChild
                                    className="h-16 w-fit rounded-[20px] bg-white text-2xl font-bold text-indigo-950 font-inter hover:text-blue-400">
                                <Link href="mailto:catthrap@gmail.com">
                                    Copy Agency Address
                                </Link>
                            </Button>
                            <Button asChild
                                    className="h-16 w-50 rounded-[20px] bg-white text-2xl font-bold text-indigo-950 font-inter hover:text-blue-400">
                                <Link href="mailto:catthrap@gmail.com">
                                    Contact Me
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>

            </div>


            {/* Footer with socials and copyright info */}
            <div className="p-8 w-full h-fit flex justify-between">
                <p className="flex flex-row items-center text-white font-[400] text-[18px]">
                    <Copyright className="w-5 h-5"/>
                    <span
                        className="text-white text-xl font-bold text-center md:text-start ml-2">Cameron Thrap 2026</span>
                </p>
                {/* Socials: */}
                <div className="flex space-x-4 pb-4 md:pb-0">
                    {socialLinks.map((social) => (<a
                        key={social.alt}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.alt}
                        className="transition-transform transform hover:scale-110 hover:opacity-80"
                    >
                        <FontAwesomeIcon className="text-white" size="3x" icon={social.icon}/>
                    </a>))}
                </div>
            </div>
        </section>
    );
}