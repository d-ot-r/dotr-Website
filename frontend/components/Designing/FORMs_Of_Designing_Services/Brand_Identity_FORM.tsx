"use client";
import React from "react";
import {
  BottomGradient,
  Label,
  Input,
  LabelInputContainer,
  Textarea,
} from "@/components/ui/Form";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { brand_designing_projects } from "@/data";

export function BrandIdentityDesigningForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <section
      id="contact-for-designing"
      className="mb-40 mt-8 flex flex-col item-center shadow-input w-full max-w-6xl mx-auto rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black"
    >
      <h1 className="heading flex flex-col items-center text-xl item-center px-auto pt-10 pb-2 font-bold text-neutral-800 dark:text-neutral-200">
        Design Brand of your Own Choice...
      </h1>
      <p className="flex flex-col items-center px-auto pb-8  mt-2 text-sm text-neutral-600 dark:text-neutral-300">
        Contact us and we will be available in a minute...
      </p>

      <form className="my-8 mx-16" onSubmit={handleSubmit}>
        <div className="mb-8 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-6">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Rajan" type="text" required />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Dhinoja" type="text" />
          </LabelInputContainer>
        </div>
        <div className="mb-8 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-6">
          <LabelInputContainer>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="dhinojaomnitechresolutions@gmail.com"
              type="email"
              required
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              placeholder="+91 8200965524"
              type="tel"
              required
            />
          </LabelInputContainer>
        </div>
        <div className="mb-8 flex flex-col space-y-2 md:flex-row md:space-y-0">
          <LabelInputContainer>
            <Label htmlFor="phone">Company Name</Label>
            <Input
              id="text"
              placeholder="dotr - DHINOJA OmniTech Resolutions"
              type="text"
              required
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer>
          <Label htmlFor="firstname">Message</Label>
          <Textarea id="Message" placeholder="Any Message for Us..." rows={5} />
        </LabelInputContainer>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
        <button
          className="group/btn relative mx-auto block h-12 w-[180px] rounded-t-full bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Send
          <BottomGradient />
        </button>
      </form>
    </section>
  );
}
