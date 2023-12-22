import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Circle } from "lucide-react";
import Slider from "@/components/slider";

export default function Home() {
  return (
    <main className="flex gap-10 md:gap-3 flex-col items-center justify-center">
      <div className="flex flex-col px-2 gap-1 justify-center items-center">
        <h1 className="text-5xl font-semibold tracking-widest italic">
          Making Stories Known
        </h1>
        <div className="flex flex-col items-center">
          <p className="text-center md:text-start">
            I praise you because I am fearfully and wonderfully made; your works
            are wonderful, I know that full well.
          </p>
          <span className="text-accent">- Psalm 139:14</span>
        </div>
        <Button
          size={"lg"}
          className="self-end md:hidden  w-full font-semibold"
        >
          Get In Touch
        </Button>
      </div>
      <Slider />
      {/* <div className="w-full flex items-center justify-center relative">
        <Image
          src="/hero.png"
          width={1440}
          height={713}
          className="w-full object-cover h-[292px] md:h-[500px] lg:h-full"
          alt="hero-img"
        />
        <div className="absolute flex gap-2 bottom-2">
          <Circle fill="white" color="white" size={10} />
          <Circle color="white" size={10} />
          <Circle color="white" size={10} />
        </div>
      </div> */}
    </main>
  );
}
