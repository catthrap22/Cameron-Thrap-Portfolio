import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function Footer() {
    return (
      <section
        id="contact"
        className="bg-[#030115] w-full h-full flex items-center justify-center relative z-0 "
      >
          {/*<div className="flex items-center justify-center w-full bg-indigo-950 rounded-[50px]" >*/}
              {/*<div className="w-full h-[467px] rounded-full relative z-1">*/}
              {/*    <div className="w-1/20 h-44 left-0 top-[156px] absolute bg-linear-to-b from-indigo-700 from-55% to-white rounded-[100px] to-125%" />*/}

              {/*</div>*/}
              {/*<div className=" w-full h-[467px] relative rounded-[100px] z-1">*/}
              {/*    <div className="w-1/20 h-44 left-0 top-[156px] absolute bg-linear-to-b from-indigo-700 from-55% to-white rounded-[100px] to-125%" />*/}
              {/*    <div className="w-1/20 h-64 left-[78.53px] top-25.5 absolute bg-linear-to-b from-indigo-700 from-55% to-white rounded-[100px] to-125%" />*/}
              {/*    <div className="w-1/20 h-80 left-[157.07px] top-[77px] absolute bg-linear-to-b from-indigo-700 from-55% to-white rounded-[100px] to-125%" />*/}
              {/*    <div className="w-1/20 h-96 left-[235.60px] top-[10px] absolute bg-linear-to-b from-indigo-700 from-55% to-white rounded-[100px] to-125%" />*/}
              {/*    <div className="w-1/20 h-96 left-[314.13px] top-[85px] absolute bg-linear-to-b from-indigo-700 from-55% to-white rounded-[100px] to-125%" />*/}
              {/*    <div className="w-1/20 h-96 left-[392.66px] top-[23px] absolute bg-linear-to-b from-indigo-700 from-55% to-white rounded-[100px] to-125%" />*/}
              {/*    <div className="w-1/20 h-96 left-[471.20px] top-0 absolute bg-linear-to-b from-indigo-700 from-55% to-white rounded-[100px] to-125%" />*/}
              {/*    <div className="w-1/20 h-96 left-[549.73px] top-[34px] absolute bg-linear-to-b from-indigo-700 from-55% to-white rounded-[100px] to-125%" />*/}
              {/*    <div className="w-1/20 h-80 left-[628.26px] top-[77px] absolute bg-linear-to-b from-indigo-700 from-55% to-white rounded-[100px] to-125%" />*/}
              {/*    <div className="w-1/20 h-96 left-[706.79px] top-[34px] absolute bg-linear-to-b from-indigo-700 from-55% to-white rounded-[100px] to-125%" />*/}
              {/*    <div className="w-1/20 h-72 left-[785.33px] top-[103px] absolute bg-linear-to-b from-indigo-700 from-55% to-white rounded-[100px] to-125%" />*/}
              {/*    <div className="w-1/20 h-80 left-[863.86px] top-[54px] absolute bg-linear-to-b from-indigo-700 from-55% to-white rounded-[100px] to-125%" />*/}
              {/*    <div className="w-1/20 h-72 left-[942.39px] top-[85px] absolute bg-linear-to-b from-indigo-700 from-55% to-white rounded-[100px] to-125%" />*/}
              {/*    <div className="w-1/20 h-64 left-[1020.92px] top-[116px] absolute bg-linear-to-b from-indigo-700 from-55% to-white rounded-[100px] to-125%" />*/}
              {/*    <div className="w-1/20 h-44 left-[1099.46px] top-[148px] absolute bg-linear-to-b from-indigo-700 from-55% to-white rounded-[100px] to-125%" />*/}
              {/*</div>*/}

          <div className="flex flex-col items-center justify-center space-y-12 bg-[linear-gradient(235.86deg,rgb(0,0,7)_15.356%,rgb(17,16,80)_54.565%,rgb(55,57,186)_87.89%)] w-full h-1/2 lg:w-3/4 lg:h-[467px] rounded-[50px] p-8 md:p-16 mx-2 mb-16 lg:my-32">
              <h1 className="text-white md:text-6xl font-bold font-['Inter'] text-center leading-16 [text-shadow:0px_8px_8px_rgb(0_0_0/0.25)] text-balance text-4xl ">level up your <span className="text-blue-400">VO</span></h1>
              <Button asChild className="h-16 w-50 rounded-[20px] bg-white text-2xl font-bold text-indigo-950 font-inter hover:text-blue-400">
                  <Link href="mailto:catthrap@gmail.com">
                      Contact Me
                  </Link>
              </Button>
          </div>
      </section>
    );
}