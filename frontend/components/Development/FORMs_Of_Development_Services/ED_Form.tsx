"use client";
import React, { useState } from "react";
import {
  BottomGradient,
  BusinessDetailsForm,
  ecommerceIndustryOptions,
  ecommerceIndustryToNiches,
  Label,
  LabelInputContainer,
  PersonalDetailsForm,
  StyleDetailsForm,
  Textarea,
  WebsiteDetailsForm,
} from "@/components/- ReUseable/FORM";

export function FORM_Of_Ecommerce_Development() {
  //#region Handlers
  const [location, setLocation] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState<string>("");
  const [selectedNiche, setSelectedNiche] = useState<string>("");
  const [availableNiches, setAvailableNiches] = useState<string[]>([]);
  const [selectedEcommercePlatform, setSelectedEcommercePlatform] =
    useState("");
  const [selectedPages, setSelectedPages] = useState<string[]>([]);
  const [selectedEcommerceFeatures, setSelectedEcommerceFeatures] = useState<
    string[]
  >([]);
  const [selectedEcommercePaymentOptions, setSelectedEcommercePaymentOptions] =
    useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedFont, setSelectedFont] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const pageOptions = [
    "Home",
    "Products",
    "About",
    "Contact",
    "Cart",
    "Checkout",
    "Account",
    "Testimonials",
    "Gallery",
    "FAQ",
    "Blog",
    "Other",
  ];

  const handlePageChange = (page: string) => {
    setSelectedPages((prev) =>
      prev.includes(page) ? prev.filter((p) => p !== page) : [...prev, page]
    );
  };

  const handleEcommerceFeaturesChange = (ecommerceFeature: string) => {
    setSelectedEcommerceFeatures((prev) =>
      prev.includes(ecommerceFeature)
        ? prev.filter((p) => p !== ecommerceFeature)
        : [...prev, ecommerceFeature]
    );
  };

  const handleEcommercePaymentOptionsChange = (
    ecommercePaymentOption: string
  ) => {
    setSelectedEcommercePaymentOptions((prev) =>
      prev.includes(ecommercePaymentOption)
        ? prev.filter((p) => p !== ecommercePaymentOption)
        : [...prev, ecommercePaymentOption]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // setIsSubmitted(true);
    e.preventDefault();

    if (selectedPages.length === 0) {
      alert("Please select at least 1 Page for your Website...");
      return;
    }

    const formData = new FormData(e.currentTarget);

    const data = {
      category: "ecommerce-development",
      details: {
        // Personal Information
        clientName: formData.get("clientName"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        location: location,
        // Business Information
        company: formData.get("company"),
        tagline: formData.get("tagline"),
        businessType: selectedBusinessType,
        industry: selectedIndustry,
        niche: selectedNiche,
        // Website Information
        reference: formData.get("reference"),
        ecommercePlatform: selectedEcommercePlatform,
        pages: selectedPages,
        ecommerceFeatures: selectedEcommerceFeatures,
        ecommercePaymentOptions: selectedEcommercePaymentOptions,
        colors: selectedColors,
        font: selectedFont,
        message: formData.get("message"),
      },
    };
    console.log("Form Submission:");
    console.log(data);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/form/ecommerce-development/submit`,
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
        const errorData = await response.json(); // Or handle text responses differently
        console.error("Server responded with an error:", errorData); // Log detailed error
        alert(
          `Form submission failed: ${
            errorData.message || "An unexpected error occurred."
          }`
        );
        return; // Stop further processing on error
      } else {
        const result = await response.json();
        console.log("Form submitted successfully:", result);

        setIsSubmitted(true);
        // setSelectedPages([]);
        // setSelectedIndustry("");
        // setLocation("");
        // e.currentTarget.reset();
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      alert("An error occurred while submitting the form. Please try again.");
    }
  };
  //#endregion

  return (
    <section
      id="contact-for-designing"
      className="mb-40 mt-8 flex flex-col item-center shadow-input w-full max-w-6xl mx-auto rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black"
    >
      <h1 className="heading flex flex-col items-center text-xl px-auto pt-10 pb-2 font-bold text-neutral-800 dark:text-neutral-200">
        Develop Online E-Commerce Store of your Own Choice...
      </h1>
      <p className="flex flex-col items-center px-auto pb-8 mt-2 text-sm text-neutral-600 dark:text-neutral-300">
        Contact us and we will be available in a minute...
      </p>

      <form
        className="my-8 mx-4 md:mx-16"
        method="POST"
        onSubmit={handleSubmit}
      >
        <PersonalDetailsForm location={location} setLocation={setLocation} />
        <BusinessDetailsForm
          selectedBusinessType={selectedBusinessType}
          setSelectedBusinessType={setSelectedBusinessType}
          selectedIndustry={selectedIndustry}
          setSelectedIndustry={setSelectedIndustry}
          selectedNiche={selectedNiche}
          setSelectedNiche={setSelectedNiche}
          ecommerceIndustryOptions={ecommerceIndustryOptions}
          ecommerceIndustryToNiches={ecommerceIndustryToNiches}
          setAvailableNiches={setAvailableNiches}
          isEcommerce={true}
        />
        <WebsiteDetailsForm
          selectedEcommercePlatform={selectedEcommercePlatform}
          setSelectedEcommercePlatform={setSelectedEcommercePlatform}
          selectedPages={selectedPages}
          handlePageChange={handlePageChange}
          pageOptions={pageOptions}
          selectedEcommerceFeatures={selectedEcommerceFeatures}
          handleEcommerceFeaturesChange={handleEcommerceFeaturesChange}
          selectedEcommercePaymentOptions={selectedEcommercePaymentOptions}
          handleEcommercePaymentOptionsChange={
            handleEcommercePaymentOptionsChange
          }
          isEcommerce={true}
        />
        <StyleDetailsForm
          selectedColors={selectedColors}
          setSelectedColors={setSelectedColors}
          selectedFont={selectedFont}
          setSelectedFont={setSelectedFont}
        />

        {/* Message Input */}
        <LabelInputContainer>
          <Label htmlFor="message">
            Any other Message / Instructions (Optional)...
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Any Extra Instructions for Us..."
            rows={5}
          />
        </LabelInputContainer>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        <button
          className="group/btn relative mx-auto block h-12 w-[180px] rounded-t-full bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Send"}
          {/* Send */}
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
