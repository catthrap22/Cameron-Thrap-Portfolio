import Demos from "@/components/Demos";
import Footer from "../components/Footer";
import AboutMe from "@/components/AboutMe";
import Policies from "@/components/Policies";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black overflow-hidden">
        <HeroSection/>
        <Testimonials/>
        <Demos/>
        <AboutMe/>
        <Policies/>
        <Footer/>
    </div>
  );
}
