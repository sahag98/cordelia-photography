import { Button } from "@/components/ui/button";
import { CheckSquare } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Investment",
  description: "Investment page",
};

const Page = () => {
  const investmentData = [
    {
      id: 1,
      title: "Mini",
      price: 50,
      description:
        "Example text: Perfect for small businesses/families and simple description about shoot",
      perks: [
        { id: 1, text: "20 minutes" },
        { id: 2, text: "5 finished digital images" },
        { id: 3, text: "Add ons Available" },
      ],
    },
    {
      id: 2,
      title: "Standard",
      price: 100,
      description:
        "Example text: Perfect for small businesses/families and simple description about shoot",
      perks: [
        { id: 1, text: "60 minutes" },
        { id: 2, text: "40-50 finished digital images" },
        { id: 3, text: "Add ons Available" },
      ],
    },
    {
      id: 3,
      title: "BYO",
      price: 75,
      description:
        "Example text: Perfect for small businesses/families and simple description about shoot",
      perks: [
        { id: 1, text: "Time is up to you but definitely not infinite lol" },
        { id: 2, text: "$10/finished digital images" },
        { id: 3, text: "Add ons Available" },
      ],
    },
  ];
  return (
    <div className="flex bg- gap-10 lg:px-20 px-4  mt-10 flex-col">
      <div className="relative flex justify-center items-center ">
        <div className="w-full h-[2px] bg-primary" />
        <h1 className="text-center bg-background p-5 absolute font-bold text-3xl">
          Investments
        </h1>
      </div>
      <section className="grid lg:grid-cols-3 grid-cols-1 gap-10 lg:gap-16">
        {investmentData.map((investment) => (
          <div
            className="bg-[#E5EEF6] rounded-md shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] flex flex-col items-center px-10 py-5"
            key={investment.id}
          >
            <h2 className="font-bold text-2xl">{investment.title}</h2>
            <span className="text-accent text-2xl font-semibold">
              ${investment.price}
            </span>
            <p className="mb-5 text-primary">{investment.description}</p>
            <ul className="w-full mb-5 space-y-5">
              {investment.perks.map((perk) => (
                <div key={perk.id} className="flex items-center gap-1">
                  <CheckSquare className="text-primary" />
                  <li className="text-primary">{perk.text}</li>
                </div>
              ))}
            </ul>
            <Link
              className="w-full"
              href={`/contact/?type=${investment.title}`}
            >
              <Button className="w-full">Schedule Now</Button>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Page;
