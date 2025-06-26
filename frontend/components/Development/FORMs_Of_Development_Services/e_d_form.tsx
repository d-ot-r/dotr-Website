// "use client";
// import React, { useState } from "react";
// import {
//   BottomGradient,
//   Label,
//   Input,
//   LabelInputContainer,
//   Textarea,
// } from "@/components/ui/Form";
// import {
//   ColorSelector,
//   ecommerceIndustryOptions,
//   EcommerceIndustrySelector,
//   ecommerceIndustryToNiches,
//   LocationInput,
// } from "@/components/- ReUseable/FORM";

// export function FORM_Of_Ecommerce_Development() {
//   const [selectedPages, setSelectedPages] = useState<string[]>([]);
//   const [selectedEcommercePaymentOptions, setSelectedEcommercePaymentOptions] =
//     useState<string[]>([]);
//   const [selectedEcommerceFeatures, setSelectedEcommerceFeatures] = useState<
//     string[]
//   >([]);
//   const [selectedIndustry, setSelectedIndustry] = useState<string>("");
//   const [location, setLocation] = useState("");
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [selectedNiche, setSelectedNiche] = useState<string>("");
//   const [availableNiches, setAvailableNiches] = useState<string[]>([]);
//   const [selectedColors, setSelectedColors] = useState<string[]>([]);
//   const [selectedFont, setSelectedFont] = useState("");
//   const [selectedEcommercePlatform, setSelectedEcommercePlatform] =
//     useState("");
//   const [selectedBusinessType, setSelectedBusinessType] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const ecommerceBusinessTypeOptions = [
//     "B2C (Business to Consumer)",
//     "B2B (Business to Business)",
//     "C2C (Consumer to Consumer)",
//     "D2C (Direct to Consumer)",
//     "Subscription-Based",
//     "Marketplace",
//     "Dropshipping",
//     "Wholesale",
//     "Print on Demand",
//     "Digital Products",
//   ];

//   const ecommercePlatformOptions = [
//     "Shopify",
//     "WooCommerce",
//     "Magento",
//     "BigCommerce",
//     "Custom Build",
//     "Squarespace",
//     "Wix",
//     "PrestaShop",
//     "OpenCart",
//     "Other",
//   ];

//   const pageOptions = [
//     "Home",
//     "Products",
//     "About",
//     "Contact",
//     "Cart",
//     "Checkout",
//     "Account",
//     "Testimonials",
//     "Gallery",
//     "FAQ",
//     "Blog",
//     "Other",
//   ];

//   const ecommerceFeaturesOptions = [
//     "Product Search & Filters",
//     "Product Variants (Size, Color)",
//     "Shopping Cart",
//     "Wishlist",
//     "Customer Reviews",
//     "Secure Checkout",
//     "Payment Gateway Integration",
//     "Inventory Management",
//     "Shipping & Delivery Tracking",
//     "Discounts & Coupons",
//     "User Accounts & Order History",
//     "Email Notifications",
//     "Chat Support",
//     "Social Media Integration",
//     "Loyalty Programs",
//     "Multi-language Support",
//     "Multi-currency Support",
//     "Admin Dashboard",
//     "Analytics & Reports",
//     "Customer Support",
//   ];

//   const ecommercePaymentOptions = [
//     "Stripe",
//     "PayPal",
//     "Square",
//     "Razorpay",
//     "Cash on Delivery",
//     "Apple Pay",
//     "Google Pay",
//     "Bank Transfer",
//     "Buy Now, Pay Later (e.g., Klarna, Afterpay)",
//   ];

//   const fontOptions = [
//     "[Modern & Clean] like Open Sans, Roboto, Montserrat, Inter,etc...",
//     "[Minimalist] like Poppins, Futura, Source Sans Pro, Raleway,etc...",
//     "[Elegant & Serif] like Merriweather, Georgia, Baskerville, Cormorant Garamond,etc...",
//     "[Playful & Handwritten] like Pacifico, Caveat, Indie Flower, Dancing Script,etc...",
//     "[Tech & Futuristic] like Orbitron, Rajdhani, Audiowide, Titillium Web,etc...",
//     "[Classic / Timeless] like Times New Roman, Garamond, Charter, Verdana,etc...",
//     "[Creative & Artistic] like Lobster, Oswald, Bangers, Anton,etc...",
//   ];

//   //#region Handlers
//   const handlePageChange = (page: string) => {
//     setSelectedPages((prev) =>
//       prev.includes(page) ? prev.filter((p) => p !== page) : [...prev, page]
//     );
//   };

//   const handleEcommcommerceFeaturesChange = (page: string) => {
//     setSelectedEcommerceFeatures((prev) =>
//       prev.includes(page) ? prev.filter((p) => p !== page) : [...prev, page]
//     );
//   };

//   const handleEcommcommercePaymentOptionsChange = (page: string) => {
//     setSelectedEcommercePaymentOptions((prev) =>
//       prev.includes(page) ? prev.filter((p) => p !== page) : [...prev, page]
//     );
//   };

//   // const handleFontChange = (font: string) => {
//   //   setSelectedFont((prev) =>
//   //     prev.includes(font) ? prev.filter((c) => c !== font) : [...prev, font]
//   //   );
//   // };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     // setIsSubmitted(true);
//     e.preventDefault();

//     if (selectedPages.length === 0) {
//       alert("Please select at least 1 Page for your Website...");
//       return;
//     }

//     const formData = new FormData(e.currentTarget);

//     const promptString = `Reference Website: ${
//       formData.get("reference") || "No Reference Website, Build on your Own."
//     } Pages: ${selectedPages.join(", ")} Colors: ${selectedColors.join(
//       ", "
//     )} Font Style: ${selectedFont} Message: ${
//       formData.get("message") || "Noo Message."
//     }`;

//     const data = {
//       category: "ecommerce-development",
//       details: {
//         // Personal Information
//         clientName: formData.get("clientName"),
//         email: formData.get("email"),
//         phone: formData.get("phone"),
//         // Business Information
//         company: formData.get("company"),
//         tagline: formData.get("tagline"),
//         location: location,
//         businessType: selectedBusinessType,
//         industry: selectedIndustry,
//         niche: selectedNiche,
//         // Website Information
//         reference: formData.get("reference"),
//         ecommercePlatform: selectedEcommercePlatform,
//         pages: selectedPages,
//         ecommerceFeatures: selectedEcommerceFeatures,
//         ecommercePaymentOptions: selectedEcommercePaymentOptions,
//         colors: selectedColors,
//         font: selectedFont,
//         message: formData.get("message"),
//         ecommercePrompt: promptString,
//       },
//     };
//     console.log("Form Submission:");
//     console.log(data);

//     try {
//       const response = await fetch(
//         `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/form/ecommerce-development/submit`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(data),
//         }
//       );
//       console.log("🚀 Response from backend:", response);

//       if (!response.ok) {
//         const errorData = await response.json(); // Or handle text responses differently
//         console.error("Server responded with an error:", errorData); // Log detailed error
//         alert(
//           `Form submission failed: ${
//             errorData.message || "An unexpected error occurred."
//           }`
//         );
//         return; // Stop further processing on error
//       } else {
//         const result = await response.json();
//         console.log("Form submitted successfully:", result);

//         setIsSubmitted(true);
//         // setSelectedPages([]);
//         // setSelectedIndustry("");
//         // setLocation("");
//         // e.currentTarget.reset();
//       }
//     } catch (error) {
//       console.error("Error during form submission:", error);
//       alert("An error occurred while submitting the form. Please try again.");
//     }
//   };
//   //#endregion

//   return (
//     <section
//       id="contact-for-designing"
//       className="mb-40 mt-8 flex flex-col item-center shadow-input w-full max-w-6xl mx-auto rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black"
//     >
//       <h1 className="heading flex flex-col items-center text-xl px-auto pt-10 pb-2 font-bold text-neutral-800 dark:text-neutral-200">
//         Develop Online E-Commerce Store of your Own Choice...
//       </h1>
//       <p className="flex flex-col items-center px-auto pb-8 mt-2 text-sm text-neutral-600 dark:text-neutral-300">
//         Contact us and we will be available in a minute...
//       </p>

//       <form
//         className="my-8 mx-4 md:mx-16"
//         method="POST"
//         onSubmit={handleSubmit}
//       >
//         {/* PERSONAL Details */}
//         <div id="personal-details" className="flex flex-col">
//           <h1 className="text-3xl font-serif border-b-4 flex flex-col items-start px-auto pt-10 pb-2 font-bold text-neutral-800 dark:text-neutral-200">
//             Personal Details...
//           </h1>

//           {/* Name */}
//           <div className="my-8 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-6">
//             <LabelInputContainer>
//               <Label htmlFor="firstname">
//                 Your Name<span className="text-red-500 text-lg">*</span>
//               </Label>
//               <Input
//                 id="clientName"
//                 name="clientName"
//                 placeholder="Enter your Full Name..."
//                 type="text"
//                 pattern="[A-Za-z]+"
//                 title="Only alphabetic characters allowed..."
//                 required
//               />
//             </LabelInputContainer>
//             <LabelInputContainer>
//               <Label htmlFor="email">
//                 Email Address<span className="text-red-500 text-lg">*</span>
//               </Label>
//               <Input
//                 id="email"
//                 name="email"
//                 placeholder="dhinojaomnitechresolutions@gmail.com"
//                 type="email"
//                 pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
//                 title="Please enter a valid email address..."
//                 required
//               />
//             </LabelInputContainer>
//           </div>

//           {/* Email and Phone */}
//           {/* Location Input */}
//           <div
//             className="mb-8 flex
//            flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-6"
//           >
//             <LabelInputContainer>
//               <Label htmlFor="phone">
//                 Phone<span className="text-red-500 text-lg">*</span>
//               </Label>
//               <Input
//                 id="phone"
//                 name="phone"
//                 placeholder="+918200965524"
//                 type="tel"
//                 // pattern=""
//                 title="Please enter a valid phone number..."
//                 required
//               />
//             </LabelInputContainer>
//             <LabelInputContainer className="mb-8">
//               <Label htmlFor="location">
//                 Location<span className="text-red-500 text-lg">*</span>
//               </Label>
//               <LocationInput value={location} onChange={setLocation} />
//             </LabelInputContainer>
//           </div>
//         </div>

//         {/* BUSINESS Details */}
//         <div id="business-details" className="flex flex-col">
//           <h1 className="text-3xl font-serif border-b-4 flex flex-col items-start px-auto pt-10 pb-2 font-bold text-neutral-800 dark:text-neutral-200">
//             Business Details...
//           </h1>

//           {/* CompanyName and Tagline */}
//           <div className="my-8 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-6">
//             <LabelInputContainer>
//               <Label htmlFor="company">
//                 Company Name<span className="text-red-500 text-lg">*</span>
//               </Label>
//               <Input
//                 id="company"
//                 name="company"
//                 placeholder="dotr - DHINOJA OmniTech Resolutions"
//                 type="text"
//                 // pattern="[A-Za-z]+(?: [A-Za-z]+)*"
//                 // title="Only alphabetic characters allowed..."
//                 required
//               />
//             </LabelInputContainer>
//             <LabelInputContainer>
//               <Label htmlFor="tagline">Tagline (Optional)</Label>
//               <Input
//                 id="tagline"
//                 name="tagline"
//                 placeholder="One-Stop Tech Partner"
//                 type="text"
//               />
//             </LabelInputContainer>
//           </div>

//           {/* Dropdown for BusinessType Selection */}
//           <LabelInputContainer className="mb-8">
//             <Label htmlFor="industry">
//               Business Type <span className="text-red-500 text-lg">*</span>
//             </Label>
//             <select
//               id="business-types"
//               name="business-types"
//               className="w-full rounded-md border border-neutral-300 bg-white p-3 text-neutral-700 shadow-sm
//                                   dark:border-neutral-600 dark:bg-black dark:text-neutral-300"
//               value={selectedBusinessType}
//               onChange={(e) => setSelectedBusinessType(e.target.value)}
//               required
//             >
//               <option value="" disabled>
//                 Select a Business Type
//               </option>
//               {ecommerceBusinessTypeOptions.map((businessType, index) => (
//                 <option key={index} value={businessType}>
//                   {businessType}
//                 </option>
//               ))}
//             </select>
//           </LabelInputContainer>

//           {/* Dropdown for Industry Selection */}
//           <EcommerceIndustrySelector
//             selectedIndustry={selectedIndustry}
//             onIndustryChange={(industry) => {
//               setSelectedIndustry(industry);
//               if (ecommerceIndustryToNiches[industry]) {
//                 setAvailableNiches(ecommerceIndustryToNiches[industry]);
//               } else {
//                 setAvailableNiches([]);
//               }
//               setSelectedNiche("");
//             }}
//             selectedNiche={selectedNiche}
//             onNicheChange={setSelectedNiche}
//             industryOptions={ecommerceIndustryOptions}
//             industryToNiches={ecommerceIndustryToNiches}
//           />
//         </div>

//         {/* WEBSITE Details */}
//         <div id="website-details" className="flex flex-col">
//           <h1 className="text-3xl font-serif border-b-4 flex flex-col items-start px-auto pt-10 pb-2 font-bold text-neutral-800 dark:text-neutral-200">
//             Website Details...
//           </h1>

//           {/* Reference Website Input */}
//           <LabelInputContainer className="my-8">
//             <Label htmlFor="firstname">
//               Any reference websites you like? (Optional)
//             </Label>
//             <Input
//               id="reference"
//               name="reference"
//               placeholder="Paste Link of that Website Here..."
//               type="url"
//               title="Please Enter Valid URL..."
//             />
//           </LabelInputContainer>

//           {/* Dropdown for Ecommerce Platform Selection */}
//           <LabelInputContainer className="mb-8">
//             <Label htmlFor="ecommmmerce-platform">
//               Ecommerce Platform <span className="text-red-500 text-lg">*</span>
//             </Label>
//             <select
//               id="ecommmmerce-platform"
//               name="ecommmmerce-platform"
//               className="w-full rounded-md border border-neutral-300 bg-white p-3 text-neutral-700 shadow-sm
//                                   dark:border-neutral-600 dark:bg-black dark:text-neutral-300"
//               value={selectedEcommercePlatform}
//               onChange={(e) => setSelectedEcommercePlatform(e.target.value)}
//               required
//             >
//               <option value="" disabled>
//                 Select a Ecommerce Platform
//               </option>
//               {ecommercePlatformOptions.map((ecommercePlatform, index) => (
//                 <option key={index} value={ecommercePlatform}>
//                   {ecommercePlatform}
//                 </option>
//               ))}
//             </select>
//           </LabelInputContainer>

//           {/* Checkbox for Page Selection */}
//           <div className="mb-8 flex flex-col space-y-2">
//             <Label htmlFor="pages" className="">
//               Preferred Page(s) for your Website...
//               <span className="text-red-500 text-lg">*</span>
//             </Label>
//             <div className=" w-full ml-10 sm:ml-6 lg:ml-10 grid lg:grid-cols-6 sm:grid-cols-3 md:grid-cols-3 gap-x-6 gap-y-3">
//               {pageOptions.map((page, index) => (
//                 <label
//                   key={index}
//                   className="flex items-center space-x-2 cursor-pointer"
//                 >
//                   <input
//                     type="checkbox"
//                     name="pages"
//                     value={page}
//                     className="accent-black dark:accent-white"
//                     checked={selectedPages.includes(page)}
//                     onChange={() => handlePageChange(page)}
//                   />
//                   <span className="text-base pl-2 text-neutral-700 dark:text-neutral-300">
//                     {page}
//                   </span>
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Checkbox for Ecommerce Feature Selection */}
//           <div className="mb-8 flex flex-col space-y-2">
//             <Label htmlFor="pages" className="">
//               Preferred Feature(s) for your Website...
//               <span className="text-red-500 text-lg">*</span>
//             </Label>
//             <div className=" w-full ml-10 sm:ml-6 lg:ml-10 grid lg:grid-cols-5 sm:grid-cols-3 md:grid-cols-3 gap-x-6 gap-y-3">
//               {ecommerceFeaturesOptions.map((ecommerceFeature, index) => (
//                 <label
//                   key={index}
//                   className="flex items-center space-x-2 cursor-pointer"
//                 >
//                   <input
//                     type="checkbox"
//                     name="ecommerce-features"
//                     value={ecommerceFeature}
//                     className="accent-black dark:accent-white"
//                     checked={selectedEcommerceFeatures.includes(
//                       ecommerceFeature
//                     )}
//                     onChange={() =>
//                       handleEcommcommerceFeaturesChange(ecommerceFeature)
//                     }
//                   />
//                   <span className="text-base pl-2 text-neutral-700 dark:text-neutral-300">
//                     {ecommerceFeature}
//                   </span>
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Checkbox for Ecommerce Payment Selection */}
//           <div className="mb-8 flex flex-col space-y-2">
//             <Label htmlFor="pages" className="">
//               Preferred Payment Option(s) for your Website...
//               <span className="text-red-500 text-lg">*</span>
//             </Label>
//             <div className=" w-full ml-10 sm:ml-6 lg:ml-10 grid lg:grid-cols-5 sm:grid-cols-3 md:grid-cols-3 gap-x-6 gap-y-3">
//               {ecommercePaymentOptions.map((ecommercePayment, index) => (
//                 <label
//                   key={index}
//                   className="flex items-center space-x-2 cursor-pointer"
//                 >
//                   <input
//                     type="checkbox"
//                     name="ecommerce-payayment-options"
//                     value={ecommercePayment}
//                     className="accent-black dark:accent-white"
//                     checked={selectedEcommercePaymentOptions.includes(
//                       ecommercePayment
//                     )}
//                     onChange={() =>
//                       handleEcommcommercePaymentOptionsChange(ecommercePayment)
//                     }
//                   />
//                   <span className="text-base pl-2 text-neutral-700 dark:text-neutral-300">
//                     {ecommercePayment}
//                   </span>
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Color Selector */}
//           <ColorSelector
//             useCase="Website"
//             selectedColors={selectedColors}
//             onChange={setSelectedColors}
//           />

//           {/* Dropdown for Font Selection */}
//           <LabelInputContainer className="mb-8">
//             <Label htmlFor="font">
//               Font Style <span className="text-red-500 text-lg">*</span>
//             </Label>
//             <select
//               id="font"
//               name="font"
//               className="w-full rounded-md border border-neutral-300 bg-white p-3 text-neutral-700 shadow-sm
//                                   dark:border-neutral-600 dark:bg-black dark:text-neutral-300"
//               value={selectedFont}
//               onChange={(e) => setSelectedFont(e.target.value)}
//               required
//             >
//               <option value="" disabled>
//                 Select a Font Style
//               </option>
//               {fontOptions.map((font, index) => (
//                 <option key={index} value={font}>
//                   {font}
//                 </option>
//               ))}
//             </select>
//           </LabelInputContainer>

//           {/* Message Input */}
//           <LabelInputContainer>
//             <Label htmlFor="message">
//               Any other Message / Instructions (Optional)...
//             </Label>
//             <Textarea
//               id="message"
//               name="message"
//               placeholder="Any Extra Instructions for Us..."
//               rows={5}
//             />
//           </LabelInputContainer>
//         </div>

//         <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

//         <button
//           className="group/btn relative mx-auto block h-12 w-[180px] rounded-t-full bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
//           type="submit"
//           disabled={isLoading}
//         >
//           {isLoading ? "Sending..." : "Send"}
//           {/* Send */}
//           <BottomGradient />
//         </button>
//         {isSubmitted && (
//           <p className="text-green-500 flex items-center justify-center mt-5">
//             Thanks! We got your request 🙌
//           </p>
//         )}
//       </form>
//     </section>
//   );
// }
