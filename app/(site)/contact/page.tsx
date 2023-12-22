"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { SendHorizonal } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(2, {
    message: "Message must be at least 2 characters.",
  }),
  type: z.enum(["mini", "full", "byo", "other"], {
    required_error: "You need to select a session type.",
  }),
});

const Contact = () => {
  const notify = () => toast("We will be in touch with you shortly!");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      type: "mini",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const apiEndpoint = "/api/email";
    console.log(values);
    fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((response) => {
        notify();
        form.reset();
      })
      .catch((err) => {
        alert(err);
      });
  }
  return (
    <div className="flex  flex-col gap-5">
      <h1 className="text-center text-primary font-bold text-3xl">Inquiries</h1>
      <section className=" lg:pl-20 p-4 lg:py-0 lg:pr-0 bg-[#101E2C] flex items-center justify-between">
        <div className="space-y-5 w-full lg:w-2/5">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="outline-none text-white"
                        placeholder="NAME *"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="outline-none text-white"
                        placeholder="EMAIL ADDRESS *"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        className="outline-none text-white resize-none"
                        placeholder="MESSAGE *"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-background">SESSION *</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex items-center gap-5"
                      >
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="mini" />
                          </FormControl>
                          <FormLabel className="font-normal text-background">
                            Mini
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="full" />
                          </FormControl>
                          <FormLabel className="font-normal text-background">
                            Full
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="byo" />
                          </FormControl>
                          <FormLabel className="font-normal text-background">
                            BYO
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="other" />
                          </FormControl>
                          <FormLabel className="font-normal text-background">
                            Other
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* <section className="">
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
                <Button
                  type="submit"
                  className="w-full py-6 mt-10"
                  variant={"secondary"}
                >
                  Send
                  <SendHorizonal />
                </Button>
              </section> */}
              <Button
                type="submit"
                className="w-full py-6 mt-10"
                variant={"secondary"}
              >
                Send
                <SendHorizonal />
              </Button>
            </form>
          </Form>
        </div>
        <Image
          className="lg:w-[750px] hidden lg:flex"
          src="/contact.jpg"
          alt="contact img"
          width={2048}
          height={2048}
        />
      </section>
      <ToastContainer
        position="bottom-right"
        hideProgressBar
        draggable
        closeOnClick
      />
    </div>
  );
};

export default Contact;
