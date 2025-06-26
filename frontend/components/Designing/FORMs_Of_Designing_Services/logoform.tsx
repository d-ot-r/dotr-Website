"use client";
import React from "react";
import {
  BottomGradient,
  Label,
  Input,
  LabelInputContainer,
  Textarea,
} from "@/components/ui/Form";

export function LogoDesigningForm() {
  const [selectedColors, setSelectedColors] = React.useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  type ColorOption = {
    name: string;
    color: string;
  };

  const colorOptions: ColorOption[] = [
    { name: "Black", color: "#000000" },
    { name: "White", color: "#ffffff" },
    { name: "Red", color: "#ff0000" },
    { name: "Blue", color: "#007FFF" },
    { name: "Green", color: "#28a745" },
    { name: "Orange", color: "#fd7e14" },
    { name: "Purple", color: "#6f42c1" },
    { name: "Gold", color: "#FFD700" },
    { name: "Silver", color: "#C0C0C0" },
    { name: "Pink", color: "#FFC0CB" },
    { name: "Yellow", color: "#FFFF00" },
  ];

  const handleColorChange = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitted(true);
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      firstname: formData.get("firstname"),
      lastname: formData.get("lastname"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      tagline: formData.get("tagline"),
      colors: selectedColors,
      message: formData.get("message"),
    };

    console.log("🎨 Logo Form Submission:");
    console.log(data);

    // console.log("🚀 Sending to backend:", data);
    try {
      const response = await fetch(
        "http://localhost:8000/api/designing/logoform/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      console.log("🚀 Response from backend:", response);

      if (!response.ok) {
        // Handle non-2xx responses, including the 500
        const errorData = await response.json(); // Or handle text responses differently
        console.error("Server responded with an error:", errorData); // Log detailed error
        // Display a user-friendly error message based on errorData.message or a generic message
        alert(
          `Form submission failed: ${
            errorData.message || "An unexpected error occurred."
          }`
        );
        return; // Stop further processing on error
      }

      // Process successful response
      const result = await response.json();
      console.log("Form submitted successfully:", result);
      // Update UI or redirect as needed
    } catch (error) {
      // Handle network errors or other exceptions during the request
      console.error("Error during form submission:", error);
      alert("An error occurred while submitting the form. Please try again.");
    }

    // if (response.ok) {
    //   console.log("✅ Request sent successfully!");
    //   // Optional: Reset form fields if needed
    //   // setSelectedColors([]);
    //   // e.currentTarget.reset();
    // } else {
    //   console.error("❌ Server responded with error:", response.status);
    //   // e.currentTarget.reset();
    //   // setSelectedColors([]);
    // }
    // } catch (error) {
    //   console.error("🚨 Error while sending request:", error);
    // }
  };

  return (
    <section
      id="contact-for-designing"
      className="mb-40 mt-8 flex flex-col item-center shadow-input w-full max-w-6xl mx-auto rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black"
    >
      <h1 className="heading flex flex-col items-center text-xl px-auto pt-10 pb-2 font-bold text-neutral-800 dark:text-neutral-200">
        Design LOGO of your Own Choice...
      </h1>
      <p className="flex flex-col items-center px-auto pb-8 mt-2 text-sm text-neutral-600 dark:text-neutral-300">
        Contact us and we will be available in a minute...
      </p>

      <form
        className="my-8 mx-4 md:mx-16"
        method="POST"
        onSubmit={handleSubmit}
      >
        <div className="mb-8 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-6">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              name="firstname"
              placeholder="Rajan"
              type="text"
              required
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              name="lastname"
              placeholder="Dhinoja"
              type="text"
            />
          </LabelInputContainer>
        </div>

        <div className="mb-8 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-6">
          <LabelInputContainer>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              placeholder="dhinojaomnitechresolutions@gmail.com"
              type="email"
              required
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              placeholder="+91 8200965524"
              type="tel"
              required
            />
          </LabelInputContainer>
        </div>

        <div className="mb-8 flex flex-col space-y-2 md:flex-row md:space-y-0">
          <LabelInputContainer>
            <Label htmlFor="company">Company Name</Label>
            <Input
              id="company"
              name="company"
              placeholder="dotr - DHINOJA OmniTech Resolutions"
              type="text"
              required
            />
          </LabelInputContainer>
        </div>

        <div className="mb-8 flex flex-col space-y-2 md:flex-row md:space-y-0">
          <LabelInputContainer>
            <Label htmlFor="tagline">Tagline (Optional)</Label>
            <Input
              id="tagline"
              name="tagline"
              placeholder="One-Stop Tech Partner"
              type="text"
            />
          </LabelInputContainer>
        </div>

        <div className="mb-8 flex flex-col space-y-2 md:flex-row md:space-y-0">
          <Label htmlFor="colors">Preferred Color(s) for Logo</Label>
          <div className="ml-10 grid lg:grid-cols-6 sm:grid-cols-3 md:grid-cols-3 gap-x-6 gap-y-3">
            {colorOptions.map((item: ColorOption, index) => (
              <label
                key={index}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  name="colors"
                  value={item.name}
                  className="accent-black dark:accent-white"
                  checked={selectedColors.includes(item.name)}
                  onChange={() => handleColorChange(item.name)}
                />
                <span
                  className="inline-block w-4 h-4 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></span>
                <span className="text-sm text-neutral-700 dark:text-neutral-300">
                  {item.name}
                </span>
              </label>
            ))}
          </div>
        </div>

        <LabelInputContainer>
          <Label htmlFor="message">Message / Instructions</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Any Extra Instructions for Us..."
            rows={5}
          />
        </LabelInputContainer>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        {/* <div className="mb-8 flex flex-col space-y-2 md:flex-row md:space-y-0">
          <LabelInputContainer>
            <Label htmlFor="logotype">Preferred Logo Type</Label>
            <select
              id="logotype"
              className="w-full rounded-md border border-neutral-300 bg-white p-3 dark:border-neutral-700 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200"
              defaultValue=""
              required
            >
              <option value="minimal">Minimal</option>
              <option value="mascot">Mascot</option>
              <option value="typography">Typography</option>
              <option value="symbolic">Symbolic/Iconic</option>
              <option value="not-sure">Not Sure Yet</option>
            </select>
          </LabelInputContainer>
        </div> */}

        <button
          className="group/btn relative mx-auto block h-12 w-[180px] rounded-t-full bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Send
          <BottomGradient />
        </button>
        {isSubmitted && (
          <p className="text-green-500 flex items-center justify-center mt-5">
            Thanks! We got your request 🙌
          </p>
        )}
      </form>
    </section>
  );
}
