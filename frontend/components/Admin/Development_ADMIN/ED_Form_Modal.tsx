// "use client"; // Assuming this is a Next.js client component

// import { useState, useEffect } from "react";
// import { ED_Form_Item } from "./ED_Form_Data";
// import { Input, Label, LabelInputContainer, Textarea } from "../ui/Form";
// // Removed FORM_Of_Custom_Website_Development import as it's not directly used here
// import {
//   LocationInput,
//   ColorSelector,
//   ecommerceIndustryOptions,
//   ecommerceIndustryToNiches,
//   EcommerceIndustrySelector,
// } from "../- ReUseable/FORM";

// export default function EditFormModal({
//   formData,
//   onClose,
//   onSave,
// }: {
//   formData: ED_Form_Item;
//   onClose: () => void;
//   onSave: (updated: ED_Form_Item) => void;
// }) {
//   const [form, setForm] = useState(formData);
//   const [availableNiches, setAvailableNiches] = useState<string[]>([]);

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

//   const handleChange = (field: keyof ED_Form_Item, value: any) => {
//     setForm((prev) => ({ ...prev, [field]: value }));
//   };

//   const handlePageChange = (page: string) => {
//     setForm((prev) => {
//       const updatedPages = prev.pages.includes(page)
//         ? prev.pages.filter((p) => p !== page)
//         : [...prev.pages, page];
//       return { ...prev, pages: updatedPages };
//     });
//   };

//   const handleEcommerceFeaturesChange = (feature: string) => {
//     setForm((prev) => {
//       const updatedFeatures = prev.ecommerceFeatures.includes(feature)
//         ? prev.ecommerceFeatures.filter((f) => f !== feature)
//         : [...prev.ecommerceFeatures, feature];
//       return { ...prev, ecommerceFeatures: updatedFeatures };
//     });
//   };

//   const handleEcommercePaymentOptionsChange = (option: string) => {
//     setForm((prev) => {
//       const updatedOptions = prev.ecommercePaymentOptions.includes(option)
//         ? prev.ecommercePaymentOptions.filter((o) => o !== option)
//         : [...prev.ecommercePaymentOptions, option];
//       return { ...prev, ecommercePaymentOptions: updatedOptions };
//     });
//   };

//   const handleIndustryChange = (industry: string) => {
//     handleChange("industry", industry);
//     if (ecommerceIndustryToNiches[industry]) {
//       setAvailableNiches(ecommerceIndustryToNiches[industry]);
//     } else {
//       setAvailableNiches([]);
//     }
//     handleChange("niche", ""); // Reset niche when industry changes
//   };

//   const handleNicheChange = (niche: string) => {
//     handleChange("niche", niche);
//   };

//   const handleColorsChange = (colors: string[]) => {
//     handleChange("colors", colors);
//   };

//   const handleBusinessTypeChange = (businessType: string) => {
//     handleChange("businessType", businessType);
//   };

//   const handleEcommercePlatformChange = (platform: string) => {
//     handleChange("ecommercePlatform", platform);
//   };

//   const handleFontChange = (font: string) => {
//     handleChange("font", font);
//   };

//   useEffect(() => {
//     // Initialize available niches when the modal opens based on the current industry
//     if (form.industry && ecommerceIndustryToNiches[form.industry]) {
//       setAvailableNiches(ecommerceIndustryToNiches[form.industry]);
//     } else {
//       setAvailableNiches([]);
//     }
//   }, [form.industry]); // Re-run if form.industry changes

//   const handleSubmit = async () => {
//     // Re-generate websitePrompt before sending to ensure it's up-to-date
//     const updatedPromptString = `Reference Website: ${
//       form.reference || "No Reference Website, Build on your Own."
//     } Pages: ${form.pages.join(", ")} Colors: ${form.colors.join(
//       ", "
//     )} Font Style: ${form.font} Message: ${form.message || "No Message."}`;

//     try {
//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/form/ecommerce-development/update/${form._id}`,
//         {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             firstname: form.firstName,
//             lastname: form.lastName,
//             email: form.email,
//             phone: form.phone,
//             company: form.company,
//             tagline: form.tagline,
//             location: form.location,
//             businessType: form.businessType,
//             industry: form.industry,
//             niche: form.niche,
//             reference: form.reference,
//             ecommercePlatform: form.ecommercePlatform,
//             ecommerceFeatures: form.ecommerceFeatures,
//             ecommercePaymentOptions: form.ecommercePaymentOptions,
//             pages: form.pages,
//             colors: form.colors,
//             font: form.font,
//             message: form.message,
//             ecommercePrompt: updatedPromptString, // Use the re-generated prompt
//           }),
//         }
//       );

//       if (!res.ok) {
//         const errorData = await res.json();
//         throw new Error(errorData.message || "Update failed");
//       }
//       const result = await res.json();
//       onSave({ ...form, ecommercePrompt: updatedPromptString }); // Update parent with re-generated prompt
//       onClose();
//     } catch (err: any) {
//       alert(err.message || "Failed to update");
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 -top-44  flex justify-center items-start z-50 overflow-auto ">
//       <div className="bg-white dark:bg-black h-[310vh] p-6 rounded-lg w-full max-w-5xl mt-60 pb-96 ">
//         <h2 className="text-xl text-center font-bold mb-4">
//           Edit Ecommerce Development Form
//         </h2>

//         <div id="personal-details" className="flex flex-col">
//           <h1 className="text-xl font-serif border-b-4 flex flex-col items-start px-auto pt-5 font-bold text-neutral-800 dark:text-neutral-200">
//             Personal Details...
//           </h1>

//           {/* Name */}
//           <div className="my-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-6">
//             <LabelInputContainer>
//               <Label htmlFor="firstname">
//                 First name<span className="text-red-500 text-lg">*</span>
//               </Label>
//               <Input
//                 id="firstname"
//                 name="firstname"
//                 value={form.firstName}
//                 placeholder="Rajan"
//                 type="text"
//                 pattern="[A-Za-z]+"
//                 title="Only alphabetic characters allowed..."
//                 onChange={(e) => handleChange("firstName", e.target.value)}
//               />
//             </LabelInputContainer>
//             <LabelInputContainer>
//               <Label htmlFor="lastname">
//                 Last name<span className="text-red-500 text-lg">*</span>
//               </Label>
//               <Input
//                 id="lastname"
//                 name="lastname"
//                 value={form.lastName}
//                 placeholder="Dhinoja"
//                 type="text"
//                 pattern="[A-Za-z]+"
//                 title="Only alphabetic characters allowed..."
//                 onChange={(e) => handleChange("lastName", e.target.value)}
//               />
//             </LabelInputContainer>
//           </div>

//           {/* Email and Phone */}
//           <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-6">
//             <LabelInputContainer>
//               <Label htmlFor="email">
//                 Email Address<span className="text-red-500 text-lg">*</span>
//               </Label>
//               <Input
//                 id="email"
//                 name="email"
//                 value={form.email}
//                 placeholder="dhinojaomnitechresolutions@gmail.com"
//                 type="email"
//                 pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
//                 title="Please enter a valid email address..."
//                 onChange={(e) => handleChange("email", e.target.value)}
//               />
//             </LabelInputContainer>
//             <LabelInputContainer>
//               <Label htmlFor="phone">
//                 Phone<span className="text-red-500 text-lg">*</span>
//               </Label>
//               <Input
//                 id="phone"
//                 name="phone"
//                 value={form.phone}
//                 placeholder="+918200965524"
//                 type="tel"
//                 title="Please enter a valid phone number..."
//                 onChange={(e) => handleChange("phone", e.target.value)}
//               />
//             </LabelInputContainer>
//           </div>
//         </div>

//         <div id="business-details" className="flex flex-col">
//           <h1 className="text-xl font-serif border-b-4 flex flex-col items-start px-auto pt-5 font-bold text-neutral-800 dark:text-neutral-200">
//             Business Details...
//           </h1>
//           {/* CompanyName and Tagline */}
//           <div className="my-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-6">
//             <LabelInputContainer>
//               <Label htmlFor="company">
//                 Company Name<span className="text-red-500 text-lg">*</span>
//               </Label>
//               <Input
//                 id="company"
//                 name="company"
//                 value={form.company}
//                 placeholder="dotr - DHINOJA OmniTech Resolutions"
//                 type="text"
//                 onChange={(e) => handleChange("company", e.target.value)}
//               />
//             </LabelInputContainer>
//             <LabelInputContainer>
//               <Label htmlFor="tagline">Tagline (Optional)</Label>
//               <Input
//                 id="tagline"
//                 name="tagline"
//                 value={form.tagline}
//                 placeholder="One-Stop Tech Partner"
//                 type="text"
//                 onChange={(e) => handleChange("tagline", e.target.value)}
//               />
//             </LabelInputContainer>
//           </div>

//           {/* Location Input */}
//           <LabelInputContainer className="mb-4">
//             <Label htmlFor="location">
//               Location<span className="text-red-500 text-lg">*</span>
//             </Label>
//             <LocationInput
//               value={form.location}
//               onChange={(value) => handleChange("location", value)}
//             />
//           </LabelInputContainer>

//           {/* Dropdown for BusinessType Selection */}
//           <LabelInputContainer className="mb-8">
//             <Label htmlFor="industry">
//               Business Type <span className="text-red-500 text-lg">*</span>
//             </Label>
//             <select
//               id="business-types"
//               name="business-types"
//               className="w-full rounded-md border border-neutral-300 bg-white p-3 text-neutral-700 shadow-sm
//                                             dark:border-neutral-600 dark:bg-black dark:text-neutral-300"
//               value={form.businessType}
//               onChange={(e) => handleBusinessTypeChange(e.target.value)}
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

//           {/* Dropdown for Industry and Niche Selection */}
//           <EcommerceIndustrySelector
//             selectedIndustry={form.industry}
//             onIndustryChange={handleIndustryChange}
//             selectedNiche={form.niche}
//             onNicheChange={handleNicheChange}
//             industryOptions={ecommerceIndustryOptions}
//             industryToNiches={ecommerceIndustryToNiches}
//             // You might need to pass availableNiches prop if your IndustrySelector uses it internally
//             // Or ensure IndustrySelector updates its internal state based on selectedIndustry
//           />
//         </div>

//         <div id="website-details" className="flex flex-col">
//           <h1 className="text-xl font-serif border-b-4 flex flex-col items-start px-auto pt-5 font-bold text-neutral-800 dark:text-neutral-200">
//             Website Details...
//           </h1>

//           {/* Reference Website Input */}
//           <LabelInputContainer className="my-5">
//             <Label htmlFor="reference">
//               Any reference websites you like? (Optional)
//             </Label>
//             <Input
//               id="reference"
//               name="reference"
//               value={form.reference}
//               placeholder="Paste Link of that Website Here..."
//               type="url"
//               title="Please Enter Valid URL..."
//               onChange={(e) => handleChange("reference", e.target.value)}
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
//                                             dark:border-neutral-600 dark:bg-black dark:text-neutral-300"
//               value={form.ecommercePlatform}
//               onChange={(e) => handleEcommercePlatformChange(e.target.value)}
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
//           <div className="mb-4 flex flex-col space-y-2">
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
//                     checked={form.pages?.includes(page)} // Use optional chaining for safety
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
//                     checked={form.ecommerceFeatures.includes(ecommerceFeature)}
//                     onChange={() =>
//                       handleEcommerceFeaturesChange(ecommerceFeature)
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
//                     checked={form.ecommercePaymentOptions.includes(
//                       ecommercePayment
//                     )}
//                     onChange={() =>
//                       handleEcommercePaymentOptionsChange(ecommercePayment)
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
//             useCase="Website" // Keep consistency with your original form
//             selectedColors={form.colors || []} // Provide default empty array if colors is null/undefined
//             onChange={handleColorsChange}
//           />

//           {/* Dropdown for Font Selection */}
//           <LabelInputContainer className="mb-4">
//             <Label htmlFor="font">
//               Font Style <span className="text-red-500 text-lg">*</span>
//             </Label>
//             <select
//               id="font"
//               name="font"
//               className="w-full rounded-md border border-neutral-300 bg-white p-3 text-neutral-700 shadow-sm
//                                   dark:border-neutral-600 dark:bg-black dark:text-neutral-300"
//               value={form.font}
//               onChange={(e) => handleFontChange(e.target.value)}
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
//               value={form.message}
//               placeholder="Any Extra Instructions for Us..."
//               rows={5}
//               onChange={(e) => handleChange("message", e.target.value)}
//             />
//           </LabelInputContainer>
//         </div>
//         <div className="flex justify-end gap-4 mt-6">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 rounded-md text-red-500 border border-red-500 hover:bg-red-500 hover:text-white transition-colors duration-200"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSubmit}
//             className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
//           >
//             Save Changes
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
