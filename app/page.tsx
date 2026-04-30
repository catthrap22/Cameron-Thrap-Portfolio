import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import Demos from "@/components/Demos";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black overflow-hidden">
        <HeroSection/>
        <Testimonials/>
        <Demos/>
    </div>
  );
}
