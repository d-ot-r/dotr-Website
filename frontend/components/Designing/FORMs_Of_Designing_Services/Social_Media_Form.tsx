// "use client";
// import React from "react";
// import {
//   BottomGradient,
//   Label,
//   Input,
//   LabelInputContainer,
//   Textarea,
// } from "@/components/General/Form";

// export function FORM_Of_Social_Media_Designing() {
//   const [selectedPlatforms, setSelectedPlatforms] = React.useState<string[]>(
//     []
//   );
//   const [selectedDesignTypes, setSelectedDesignTypes] = React.useState<
//     string[]
//   >([]);
//   const [isSubmitted, setIsSubmitted] = React.useState(false);

//   const platformOptions = [
//     "Facebook",
//     "Instagram",
//     "Twitter",
//     "LinkedIn",
//     "YouTube",
//     "Pinterest",
//     "WhatsApp",
//     "Other",
//   ];
//   const designTypes = [
//     "Posts",
//     "Stories",
//     "Reels Thumbnails",
//     "Highlight Covers",
//     "Ad Creatives",
//     "Monthly Templates",
//     "Campaign Graphics",
//   ];

//   const handleCheckboxChange = (
//     value: string,
//     setter: React.Dispatch<React.SetStateAction<string[]>>
//   ) => {
//     setter((prev) =>
//       prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
//     );
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     setIsSubmitted(true);
//     e.preventDefault();

//     if (selectedPlatforms.length === 0) {
//       alert("Please select at least one platform.");
//       return;
//     }

//     const formData = new FormData(e.currentTarget);
//     const data = {
//       firstname: formData.get("firstname"),
//       lastname: formData.get("lastname"),
//       email: formData.get("email"),
//       phone: formData.get("phone"),
//       company: formData.get("company"),
//       tagline: formData.get("tagline"),
//       platforms: selectedPlatforms,
//       designTypes: selectedDesignTypes,
//       message: formData.get("message"),
//       style: formData.get("style"),
//       startDate: formData.get("startDate"),
//       deadline: formData.get("deadline"),
//       budget: formData.get("budget"),
//     };

//     console.log("🎨 Form Submission:", data);

//     try {
//       const response = await fetch(
//         `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/designing/form/social-media-designing/submit`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(data),
//         }
//       );

//       if (!response.ok) {
//         const errorData = await response.json();
//         alert(`Submission failed: ${errorData.message || "Unknown error."}`);
//         return;
//       }

//       const result = await response.json();
//       console.log("Success:", result);
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <section className="max-w-5xl mx-auto mt-8 p-6 bg-white dark:bg-black rounded-lg shadow-md">
//       <h1 className="text-2xl font-bold text-center">
//         Social Media Design Inquiry
//       </h1>
//       <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
//         <div className="grid md:grid-cols-2 gap-4">
//           <LabelInputContainer>
//             <Label htmlFor="firstname">First name</Label>
//             <Input name="firstname" required />
//           </LabelInputContainer>
//           <LabelInputContainer>
//             <Label htmlFor="lastname">Last name</Label>
//             <Input name="lastname" />
//           </LabelInputContainer>
//         </div>
//         <div className="grid md:grid-cols-2 gap-4">
//           <LabelInputContainer>
//             <Label htmlFor="email">Email</Label>
//             <Input name="email" type="email" required />
//           </LabelInputContainer>
//           <LabelInputContainer>
//             <Label htmlFor="phone">Phone</Label>
//             <Input name="phone" type="tel" required />
//           </LabelInputContainer>
//         </div>
//         <div className="grid md:grid-cols-2 gap-4">
//           <LabelInputContainer>
//             <Label htmlFor="company">Company</Label>
//             <Input name="company" required />
//           </LabelInputContainer>
//           <LabelInputContainer>
//             <Label htmlFor="tagline">Tagline</Label>
//             <Input name="tagline" />
//           </LabelInputContainer>
//         </div>

//         <div>
//           <Label>Preferred Platforms</Label>
//           <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-2">
//             {platformOptions.map((p) => (
//               <label key={p} className="flex items-center space-x-2">
//                 <input
//                   type="checkbox"
//                   value={p}
//                   checked={selectedPlatforms.includes(p)}
//                   onChange={() => handleCheckboxChange(p, setSelectedPlatforms)}
//                 />
//                 <span>{p}</span>
//               </label>
//             ))}
//           </div>
//         </div>

//         <div>
//           <Label>Content Types Needed</Label>
//           <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
//             {designTypes.map((t) => (
//               <label key={t} className="flex items-center space-x-2">
//                 <input
//                   type="checkbox"
//                   value={t}
//                   checked={selectedDesignTypes.includes(t)}
//                   onChange={() =>
//                     handleCheckboxChange(t, setSelectedDesignTypes)
//                   }
//                 />
//                 <span>{t}</span>
//               </label>
//             ))}
//           </div>
//         </div>

//         <LabelInputContainer>
//           <Label htmlFor="style">Design Style / Reference Brands</Label>
//           <Textarea
//             name="style"
//             rows={4}
//             placeholder="Minimalistic, Bold, Example: Nike, Zomato..."
//           />
//         </LabelInputContainer>

//         <LabelInputContainer>
//           <Label htmlFor="startDate">Start Date</Label>
//           <Input name="startDate" type="date" required />
//         </LabelInputContainer>
//         <LabelInputContainer>
//           <Label htmlFor="deadline">Deadline (if any)</Label>
//           <Input name="deadline" type="date" />
//         </LabelInputContainer>

//         <LabelInputContainer>
//           <Label htmlFor="budget">Estimated Budget</Label>
//           <select
//             name="budget"
//             className="w-full p-2 rounded border dark:bg-neutral-900"
//           >
//             <option value="">Select your budget</option>
//             <option value="5k-10k">₹5k – ₹10k</option>
//             <option value="10k-25k">₹10k – ₹25k</option>
//             <option value="25k-plus">₹25k+</option>
//           </select>
//         </LabelInputContainer>

//         <LabelInputContainer>
//           <Label htmlFor="message">Additional Instructions</Label>
//           <Textarea
//             name="message"
//             rows={5}
//             placeholder="Any extra info for us..."
//           />
//         </LabelInputContainer>

//         <div className="flex items-center">
//           <input type="checkbox" required className="mr-2" />
//           <span>I agree to be contacted for this project.</span>
//         </div>

//         <button
//           type="submit"
//           className="w-full md:w-48 mx-auto bg-black text-white py-2 px-4 rounded"
//         >
//           Send Request
//           <BottomGradient />
//         </button>

//         {isSubmitted && (
//           <p className="text-green-500 text-center mt-4">
//             Thanks! We received your request.
//           </p>
//         )}
//       </form>
//     </section>
//   );
// }
