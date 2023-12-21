import React from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { SendHorizonal } from "lucide-react";

const Contact = () => {
  return (
    <div className="flex  flex-col gap-5">
      <h1 className="text-center text-primary font-bold text-3xl">Inquiries</h1>
      <section className=" lg:pl-20 p-4 lg:py-0 lg:pr-0 bg-[#101E2C] flex items-center justify-between">
        <div className="space-y-5 w-full lg:w-2/5">
          <Input className="outline-none text-white" placeholder="NAME *" />
          <Input
            className="outline-none text-white"
            placeholder="EMAIL ADDRESS *"
          />
          <Textarea
            className="outline-none text-white resize-none"
            placeholder="MESSAGE *"
          />

          <section className="">
            <div className="space-y-2">
              <h4 className="text-background">SESSION *</h4>
              <RadioGroup className=" flex" defaultValue="mini">
                <div className="flex items-center space-x-2 mr-2">
                  <RadioGroupItem value="mini" id="mini" />
                  <Label className="text-background" htmlFor="mini">
                    Mini
                  </Label>
                </div>
                <div className="flex items-center mr-2 space-x-2">
                  <RadioGroupItem value="Full" id="Full" />
                  <Label className="text-background" htmlFor="Full">
                    Full
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="byo" id="byo" />
                  <Label className="text-background" htmlFor="byo">
                    Build Your Own
                  </Label>
                </div>
              </RadioGroup>
            </div>
            <Button className="w-full py-6 mt-10" variant={"secondary"}>
              Send
              <SendHorizonal />
            </Button>
          </section>
        </div>
        <Image
          className="lg:w-[750px] hidden lg:flex"
          src="/contact.jpg"
          alt="contact img"
          width={2048}
          height={2048}
        />
      </section>
    </div>
  );
};

export default Contact;
