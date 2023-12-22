import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "About",
  description: "Hi, My name is Cordelia!",
};

const Page = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-3xl">About</h1>
      <section className="lg:px-20 lg:h-[calc(100vh-100px)] flex items-center justify-center px-4">
        <div className="flex  lg:flex-row flex-col-reverse items-center lg:gap-0 gap-5 py-5 lg:py-20 justify-between">
          <div>
            <h2 className="text-accent font-bold text-2xl underline underline-offset-2">
              Get To Know Me
            </h2>
            <h3 className="font-semibold text-lg">Hi, My name is Cordelia!</h3>
            <p className="text-lg lg:w-1/2">
              I&apos;m so glad you&apos;re here. I am a Southern Ontario
              portrait and lifestyle photographer serving Niagara, the Greater
              Hamilton Area, and beyond. I love Jesus and have a passion for
              capturing life&apos;s sweetest moments.
            </p>
            <br />
            <p className="text-lg lg:w-1/2">
              Whether it&apos;s the biggest day of your life, or the smaller
              moments in your day to day, your story deserves to be told, and I
              would love to help you do that.
            </p>
          </div>
          <div className="relative">
            <div className="w-[350px] hidden lg:flex h-full -z-10 rounded-md absolute inset-0 -rotate-12 bg-[#daa477]" />
            <Image
              alt="image of Cordelia"
              src="/about1.jpg"
              className="w-96 lg:h-full lg:object-cover lg:bg-none h-80 bg-[#E5EEF6] object-contain rounded-md shadow-sm"
              width={1080}
              height={1920}
            />
          </div>
        </div>
      </section>
      <section className="bg-[#E5EEF6] px-4 lg:px-20 lg:h-[calc(100vh-100px)] flex items-center justify-center">
        <div className="flex lg:flex-row flex-col items-center lg:gap-0 gap-5 py-5 lg:py-20 justify-between">
          <Image
            alt="image of Camera"
            src="/about2.jpg"
            className="w-96 lg:h-full lg:object-cover lg:bg-none h-80 bg-[#E5EEF6] object-contain rounded-md shadow-sm"
            width={1080}
            height={1920}
          />
          <div className="lg:w-1/2">
            <h2 className="text-accent font-bold text-2xl underline underline-offset-2">
              Equipment
            </h2>

            <p className="text-lg">
              At every shoot you will find me with my trusty Canon Rebel T7 and
              18-35mm lense, two battery packs and 64GB SD cards, and a handful
              of lense filters.
            </p>
            <br />
            <p className="text-lg">
              Finished photos are uploaded to lightroom for edits and final
              touches before being added to their own google drive and sent off
              to your inbox!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
