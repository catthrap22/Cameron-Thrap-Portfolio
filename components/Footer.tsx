import {Button} from "@/components/ui/button";

export default function Footer() {
    return (
      <section
        id="footer"
        className="bg-[#030115] w-screen h-screen flex items-center justify-center relative z-0 "
      >
          <div className="flex items-center justify-center w-3/4 h-5/8 bg-indigo-950 rounded-[50px]" >
              <div className=" w-[1153px] h-[467px] relative rounded-[100px] z-1">
                  <div className="w-14 h-44 left-0 top-[156px] absolute bg-linear-to-b from-indigo-700 from-55% to-white rounded-[100px] to-125%" />
                  <div className="w-14 h-64 left-[78.53px] top-25.5 absolute bg-linear-to-b from-indigo-700 from-55% to-white rounded-[100px] to-125%" />
                  <div className="w-14 h-80 left-[157.07px] top-[77px] absolute bg-linear-to-b from-indigo-700 from-55% to-white rounded-[100px] to-125%" />
                  <div className="w-14 h-96 left-[235.60px] top-[10px] absolute bg-linear-to-b from-indigo-700 from-55% to-white rounded-[100px] to-125%" />
                  <div className="w-14 h-96 left-[314.13px] top-[85px] absolute bg-linear-to-b from-indigo-700 from-55% to-white rounded-[100px] to-125%" />
                  <div className="w-14 h-96 left-[392.66px] top-[23px] absolute bg-linear-to-b from-indigo-700 from-55% to-white rounded-[100px] to-125%" />
                  <div className="w-14 h-96 left-[471.20px] top-0 absolute bg-linear-to-b from-indigo-700 from-55% to-white rounded-[100px] to-125%" />
                  <div className="w-14 h-96 left-[549.73px] top-[34px] absolute bg-linear-to-b from-indigo-700 from-55% to-white rounded-[100px] to-125%" />
                  <div className="w-14 h-80 left-[628.26px] top-[77px] absolute bg-linear-to-b from-indigo-700 from-55% to-white rounded-[100px] to-125%" />
                  <div className="w-14 h-96 left-[706.79px] top-[34px] absolute bg-linear-to-b from-indigo-700 from-55% to-white rounded-[100px] to-125%" />
                  <div className="w-14 h-72 left-[785.33px] top-[103px] absolute bg-linear-to-b from-indigo-700 from-55% to-white rounded-[100px] to-125%" />
                  <div className="w-14 h-80 left-[863.86px] top-[54px] absolute bg-linear-to-b from-indigo-700 from-55% to-white rounded-[100px] to-125%" />
                  <div className="w-14 h-72 left-[942.39px] top-[85px] absolute bg-linear-to-b from-indigo-700 from-55% to-white rounded-[100px] to-125%" />
                  <div className="w-14 h-64 left-[1020.92px] top-[116px] absolute bg-linear-to-b from-indigo-700 from-55% to-white rounded-[100px] to-125%" />
                  <div className="w-14 h-44 left-[1099.46px] top-[148px] absolute bg-linear-to-b from-indigo-700 from-55% to-white rounded-[100px] to-125%" />
              </div>
          </div>
          <div className="flex flex-col items-center justify-center absolute z-10 space-y-[47px]">
              <h1 className="text-white text-6xl font-bold font-['Inter'] leading-16 [text-shadow:0px_8px_8px_rgb(0_0_0/0.25)]">level up your VO</h1>
              <Button className="h-16 w-50 rounded-[20px] bg-white text-2xl font-bold text-indigo-950 font-inter hover:text-blue-400">
                  Contact Me
              </Button>
          </div>
      </section>
    );
}