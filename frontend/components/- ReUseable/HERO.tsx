"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { page_heros } from "@/data";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { Input, Label, LabelInputContainer, Textarea } from "./FORM";

interface HeroItems {
  _id?: string;
  category?: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
}

export const HERO = ({
  department,
  category,
  isPage = false,
  useLocalData = false, // default to false
  admin = false, // default to false
}: {
  department: string;
  category: string;
  isPage: boolean;
  useLocalData: boolean; // default to false
  admin?: boolean; // default to false
}) => {
  const [activeHero, setActiveHero] = useState<HeroItems | null>(null);
  const [mode, setMode] = useState<"add" | "edit">("add");
  const [showModal, setShowModal] = useState(false);
  const [hero, setHero] = useState<HeroItems | null>(null);
  const [heroData, setHeroData] = useState<HeroItems[]>([]);

  useEffect(() => {
    if (useLocalData) {
      const localData = page_heros.find((h) => h.category === category);
      // console.log(data);
      setHero(localData ?? null);
      return;
    }

    const fetchHeroData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/${department}/hero/${category}`
        );
        const data = await response.json();
        if (isPage) {
          setHero(data[0]);
          setHeroData([]);
        } else {
          setHeroData(data);
          setHero(null);
        }
      } catch (error) {
        console.error(`Error fetching ${category} data:`, error);
      }
    };

    fetchHeroData();
  }, [department, category, useLocalData, isPage]);

  const handleEdit = async (id: string) => {
    if (isPage) {
      // if (hero && hero._id === id) {
      //   setActiveHero(hero);
      // } else {
      //   console.warn("Hero not found for editing.");
      // }
      setActiveHero(hero); // assuming hero is an array with at least one element
    } else {
      setActiveHero(heroData.find((o) => o._id === id) || null);
    }
    setMode("edit");
    setShowModal(true);
  };

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this FAQ?"
    );
    if (!confirmed) return;

    try {
      const res = await fetch(
        `http://localhost:8000/api/${department}/hero/${category}/delete/${id}`,
        {
          method: "DELETE",
        }
      );
      const result = await res.json();
      setHeroData((prev) => prev.filter((h) => h._id !== id));

      if (hero?._id === id) {
        setHero(null); // Remove the displayed hero
      }
    } catch (error) {
      console.error("Error deleting hero:", error);
    }
  };

  if (!admin && !hero && heroData.length === 0) {
    return <div>No HERO data found!...</div>;
  }

  return (
    <>
      {admin && ((isPage && !hero) || (!isPage && heroData.length === 0)) ? (
        <div className="flex w-full my-40 items-center justify-center">
          <button
            onClick={() => {
              setActiveHero({
                category: category,
                title: "",
                tagline: "",
                description: "",
                image: "",
              });
              setMode("add");
              setShowModal(true);
            }}
            className="px-14 py-4 bg-green-600 text-white text-2xl font-serif rounded-lg hover:bg-purple-dark transition "
          >
            + Add Hero
          </button>
        </div>
      ) : (
        <>
          {isPage ? (
            <section
              className="flex flex-col items-center justify-center h-[640px] mt-36 relative bg-cover bg-center bg-no-repeat rounded-b-[120px] mb-40"
              style={{
                backgroundImage: `url('/images/${category}/${category}_bg.png')`,
              }}
            >
              {/* Background Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-80 z-10 rounded-b-[120px]" />
              <div className="flex flex-col items-center justify-center relative mb-20 z-20 max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]">
                {admin && (
                  <div className=" h-full flex justify-end items-start mr-10 gap-3">
                    <FiEdit2
                      size={25}
                      className="text-blue-500 hover:text-blue-800 cursor-pointer"
                      title="Edit"
                      onClick={() => handleEdit(hero?._id!)}
                    />
                    <FiTrash2
                      size={25}
                      className="text-red-600 hover:text-red-800 cursor-pointer"
                      title="Delete"
                      onClick={() => handleDelete(hero?._id!)}
                    />
                  </div>
                )}
                <p className="pt-20 uppercase tracking-widest text-xs text-center text-blue-100">
                  {hero?.tagline}
                </p>

                <motion.h1 className="text-center text-[30px] md:text-5xl lg:text-6xl">
                  {hero?.title}
                </motion.h1>

                <p className="pt-3 px-4 text-center md:tracking-wider mb-4 text-sm md:text-base lg:text-lg">
                  {hero?.description}
                </p>
              </div>
            </section>
          ) : (
            <section className="flex h-[600px] mt-40 mb-16">
              {heroData?.map((hero) => (
                <div
                  key={hero._id || hero.title}
                  className="flex w-full mb-10 px-4"
                >
                  <div className="flex-1 flex flex-col justify-center pr-10">
                    <p className="uppercase tracking-widest text-xs text-left text-blue-100 mb-2">
                      {hero.tagline}
                    </p>

                    <motion.h1
                      className="text-left text-4xl md:text-5xl lg:text-6xl mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {hero.title}
                    </motion.h1>

                    <p className="text-left text-sm md:text-lg lg:text-xl mb-6">
                      {hero.description}
                    </p>

                    {/* <a href="#contact">
              <MagicButton
              title="Contact Now!..."
              icon={<FaPhone />}
              position="left"
              />
              </a> */}
                  </div>

                  <div className="flex items-center justify-center">
                    <Image
                      src={hero.image}
                      alt={hero.title}
                      width={550}
                      height={400}
                      className="h-[400px] w-[450px] rounded-3xl"
                    />
                    {admin && (
                      <div className=" h-full flex justify-end items-start mr-10 gap-3">
                        <FiEdit2
                          size={25}
                          className="text-blue-500 hover:text-blue-800 cursor-pointer"
                          title="Edit"
                          onClick={() => handleEdit(hero._id!)}
                        />
                        <FiTrash2
                          size={25}
                          className="text-red-600 hover:text-red-800 cursor-pointer"
                          title="Delete"
                          onClick={() => handleDelete(hero._id!)}
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </section>
          )}
        </>
      )}

      {showModal && activeHero && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-auto">
          <div className="bg-white dark:bg-black h-auto p-10 px-12 my-auto rounded-lg w-full max-w-3xl">
            <h2 className="text-xl font-bold mb-4 text-center">
              {mode === "add" ? "Add New" : "Edit"} HERO
            </h2>

            <form
              onSubmit={async (e) => {
                e.preventDefault();

                try {
                  const url =
                    mode === "add"
                      ? `http://localhost:8000/api/${department}/hero/${category}/add`
                      : `http://localhost:8000/api/${department}/hero/${category}/update/${activeHero._id}`;

                  const method = mode === "add" ? "POST" : "PUT";

                  const res = await fetch(url, {
                    method,
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(
                      mode === "add" ? { category, ...activeHero } : activeHero
                    ),
                  });

                  if (res.ok) {
                    const result = await res.json();

                    if (isPage) {
                      // handle single hero case
                      setHero(result);
                    } else {
                      // handle multiple hero entries
                      if (mode === "add") {
                        setHeroData((prev) => [...prev, result]);
                      } else {
                        setHeroData((prev) =>
                          prev.map((item) =>
                            item._id === result._id ? result : item
                          )
                        );
                      }
                    }

                    setShowModal(false);
                    setActiveHero(null);
                  } else {
                    console.error("Request failed");
                  }
                } catch (err) {
                  console.error("Error:", err);
                }
              }}
            >
              <LabelInputContainer>
                <Label>Category: </Label>
                <Input
                  className="border p-2 w-full mb-3"
                  value={activeHero.category}
                  onChange={(e) =>
                    setActiveHero((prev) => ({
                      ...prev!,
                      category: e.target.value,
                    }))
                  }
                  placeholder="Category"
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label>Title: </Label>
                <Input
                  className="border p-2 w-full mb-3"
                  value={activeHero.title}
                  onChange={(e) =>
                    setActiveHero((prev) => ({
                      ...prev!,
                      title: e.target.value,
                    }))
                  }
                  placeholder="Title"
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label>Tagline: </Label>
                <Input
                  className="border p-2 w-full mb-3"
                  value={activeHero.tagline}
                  onChange={(e) =>
                    setActiveHero((prev) => ({
                      ...prev!,
                      tagline: e.target.value,
                    }))
                  }
                  placeholder="Tagline"
                />
              </LabelInputContainer>

              <LabelInputContainer>
                <Label>Description: </Label>
                <Textarea
                  className="border p-2 w-full mb-3"
                  value={activeHero.description}
                  onChange={(e) =>
                    setActiveHero((prev) => ({
                      ...prev!,
                      description: e.target.value,
                    }))
                  }
                  rows={4}
                  placeholder="Description"
                />
              </LabelInputContainer>

              <LabelInputContainer>
                <Label>Image: </Label>
                <Input
                  className="border p-2 w-full mb-3"
                  value={activeHero.image}
                  onChange={(e) =>
                    setActiveHero((prev) => ({
                      ...prev!,
                      image: e.target.value,
                    }))
                  }
                  placeholder="Image URL"
                />
              </LabelInputContainer>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setActiveHero(null);
                  }}
                  className="px-4 py-2 border rounded text-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  // onClick={() => {
                  //   setShowModal(false);
                  //   setActiveHero(null);
                  //   // maybe trigger fetch again or useEffect re-run logic
                  // }}
                  // onClick={() => window.location.reload()}
                  className={`px-4 py-2 rounded text-white ${
                    mode === "add" ? "bg-green-600" : "bg-blue-600"
                  }`}
                >
                  {mode === "add" ? "Add" : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

// //#region HERO Of Services
// export const Old_HERO = ({
//   department,
//   category,
//   isPage = false,
//   admin = false, // default to false
// }: {
//   department: string;
//   category: string;
//   isPage: boolean;
//   admin?: boolean; // default to false
// }) => {
//   const [activeHero, setActiveHero] = useState<HeroItems | null>(null);
//   const [mode, setMode] = useState<"add" | "edit">("add");
//   const [showModal, setShowModal] = useState(false);
//   const [hero, setHero] = useState<HeroItems[]>([]);
//   const [heroData, setHeroData] = useState<HeroItems[]>([]);

//   useEffect(() => {
//     const fetchHeroData = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:8000/api/${department}/hero/${category}`
//         );
//         const data = await response.json();
//         setHeroData(data);
//       } catch (error) {
//         console.error(`Error fetching ${category} data:`, error);
//       }
//     };

//     fetchHeroData();
//   }, [department, category]);

//   const handleEdit = async (id: string) => {
//     setActiveHero(heroData.find((o) => o._id === id) || null);
//     setMode("edit");
//     setShowModal(true);
//   };

//   const handleDelete = async (id: string) => {
//     const confirmed = window.confirm(
//       "Are you sure you want to delete this FAQ?"
//     );
//     if (!confirmed) return;

//     try {
//       const res = await fetch(
//         `http://localhost:8000/api/${department}/hero/${category}/delete/${id}`,
//         {
//           method: "DELETE",
//         }
//       );
//       const result = await res.json();
//       setHeroData((prev) => prev.filter((h) => h._id !== id));
//     } catch (error) {
//       console.error("Error deleting hero:", error);
//     }
//   };

//   return (
//     <>
//       <section className="flex h-[600px] mt-40 mb-16">
//         {admin && heroData.length === 0 && (
//           <div className="flex w-full items-start justify-center">
//             <button
//               onClick={() => {
//                 setActiveHero({
//                   category: category,
//                   title: "",
//                   tagline: "",
//                   description: "",
//                   image: "",
//                 });
//                 setMode("add");
//                 setShowModal(true);
//               }}
//               className="px-12 py-3 bg-green-600 text-white text-lg font-serif rounded-lg hover:bg-purple-dark transition "
//             >
//               + Add Hero
//             </button>
//           </div>
//         )}
//         {heroData?.map((hero) => (
//           <div key={hero._id || hero.title} className="flex w-full mb-10 px-4">
//             <div className="flex-1 flex flex-col justify-center pr-10">
//               <p className="uppercase tracking-widest text-xs text-left text-blue-100 mb-2">
//                 {hero.tagline}
//               </p>

//               <motion.h1
//                 className="text-left text-4xl md:text-5xl lg:text-6xl mb-4"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 {hero.title}
//               </motion.h1>

//               <p className="text-left text-sm md:text-lg lg:text-xl mb-6">
//                 {hero.description}
//               </p>

//               {/* <a href="#contact">
//               <MagicButton
//               title="Contact Now!..."
//               icon={<FaPhone />}
//               position="left"
//               />
//               </a> */}
//             </div>

//             <div className="flex items-center justify-center">
//               <Image
//                 src={hero.image}
//                 alt={hero.title}
//                 width={550}
//                 height={400}
//                 className="h-[400px] w-[450px] rounded-3xl"
//               />
//               {admin && (
//                 <div className=" h-full flex justify-end items-start mr-10 gap-3">
//                   <FiEdit2
//                     size={25}
//                     className="text-blue-500 hover:text-blue-800 cursor-pointer"
//                     title="Edit"
//                     onClick={() => handleEdit(hero._id!)}
//                   />
//                   <FiTrash2
//                     size={25}
//                     className="text-red-600 hover:text-red-800 cursor-pointer"
//                     title="Delete"
//                     onClick={() => handleDelete(hero._id!)}
//                   />
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//         {showModal && activeHero && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-auto">
//             <div className="bg-white dark:bg-black h-auto p-10 px-12 my-auto rounded-lg w-full max-w-3xl">
//               <h2 className="text-xl font-bold mb-4 text-center">
//                 {mode === "add" ? "Add New Hero" : "Edit Hero"}
//               </h2>

//               <form
//                 onSubmit={async (e) => {
//                   e.preventDefault();

//                   try {
//                     const url =
//                       mode === "add"
//                         ? `http://localhost:8000/api/${department}/hero/${category}/add`
//                         : `http://localhost:8000/api/${department}/hero/${category}/update/${activeHero._id}`;

//                     const method = mode === "add" ? "POST" : "PUT";

//                     const res = await fetch(url, {
//                       method,
//                       headers: { "Content-Type": "application/json" },
//                       body: JSON.stringify(
//                         mode === "add"
//                           ? { category, ...activeHero }
//                           : activeHero
//                       ),
//                     });

//                     if (res.ok) {
//                       const result = await res.json();

//                       if (mode === "add") {
//                         setHero((prev) =>
//                           prev ? [...prev, activeHero] : [activeHero]
//                         );
//                       } else {
//                         setHero(
//                           (prev) =>
//                             prev?.map((item) =>
//                               item._id === result._id ? result : item
//                             ) ?? null
//                         );
//                       }

//                       setShowModal(false);
//                       setActiveHero(null);
//                     } else {
//                       console.error("Request failed");
//                     }
//                   } catch (err) {
//                     console.error("Error:", err);
//                   }
//                 }}
//               >
//                 <LabelInputContainer>
//                   <Label>Category: </Label>
//                   <Input
//                     className="border p-2 w-full mb-3"
//                     value={activeHero.category}
//                     onChange={(e) =>
//                       setActiveHero((prev) => ({
//                         ...prev!,
//                         category: e.target.value,
//                       }))
//                     }
//                     placeholder="Category"
//                   />
//                 </LabelInputContainer>
//                 <LabelInputContainer>
//                   <Label>Title: </Label>
//                   <Input
//                     className="border p-2 w-full mb-3"
//                     value={activeHero.title}
//                     onChange={(e) =>
//                       setActiveHero((prev) => ({
//                         ...prev!,
//                         title: e.target.value,
//                       }))
//                     }
//                     placeholder="Title"
//                   />
//                 </LabelInputContainer>
//                 <LabelInputContainer>
//                   <Label>Tagline: </Label>
//                   <Input
//                     className="border p-2 w-full mb-3"
//                     value={activeHero.tagline}
//                     onChange={(e) =>
//                       setActiveHero((prev) => ({
//                         ...prev!,
//                         tagline: e.target.value,
//                       }))
//                     }
//                     placeholder="Tagline"
//                   />
//                 </LabelInputContainer>

//                 <LabelInputContainer>
//                   <Label>Description: </Label>
//                   <Textarea
//                     className="border p-2 w-full mb-3"
//                     value={activeHero.description}
//                     onChange={(e) =>
//                       setActiveHero((prev) => ({
//                         ...prev!,
//                         description: e.target.value,
//                       }))
//                     }
//                     rows={4}
//                     placeholder="Description"
//                   />
//                 </LabelInputContainer>

//                 <LabelInputContainer>
//                   <Label>Image: </Label>
//                   <Input
//                     className="border p-2 w-full mb-3"
//                     value={activeHero.image}
//                     onChange={(e) =>
//                       setActiveHero((prev) => ({
//                         ...prev!,
//                         image: e.target.value,
//                       }))
//                     }
//                     placeholder="Image URL"
//                   />
//                 </LabelInputContainer>

//                 <div className="flex justify-end gap-3">
//                   <button
//                     type="button"
//                     onClick={() => {
//                       setShowModal(false);
//                       setActiveHero(null);
//                     }}
//                     className="px-4 py-2 border rounded text-gray-700"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     onClick={() => window.location.reload()}
//                     className={`px-4 py-2 rounded text-white ${
//                       mode === "add" ? "bg-green-600" : "bg-blue-600"
//                     }`}
//                   >
//                     {mode === "add" ? "Add" : "Save"}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}
//       </section>
//     </>
//   );
// };
// // #endregion

// // #region HERO Of Pages
// export const HERO_Of_Pages = ({
//   department,
//   category,
//   useLocalData = false, // default to false
//   admin = false, // default to false
// }: {
//   department: string;
//   category: string;
//   useLocalData: boolean;
//   admin?: boolean;
// }) => {
//   const [hero, setHero] = useState<HeroItems | null>(null);
//   const [activeHero, setActiveHero] = useState<HeroItems | null>(null);
//   const [mode, setMode] = useState<"add" | "edit">("add");
//   const [showModal, setShowModal] = useState(false);
//   const [heroData, setHeroData] = useState<HeroItems[]>([]);

//   useEffect(() => {
//     if (useLocalData) {
//       const localData = page_heros.find((h) => h.category === category);
//       // console.log(data);
//       setHero(localData ?? null);
//       return;
//     }

//     const fetchHero = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:8000/api/${department}/hero/${category}`
//         ).then((response) => response.json());
//         // console.log(response[0]);
//         setHero(response[0]);
//         // setHeroData(response); // or setHeroData([response[0]]);
//       } catch (error) {
//         console.error(`Error fetching ${category}'s hero data:`, error);
//       } finally {
//       }
//     };

//     fetchHero();
//   }, [department, category, useLocalData]);

//   const handleEdit = async (id: string) => {
//     if (hero && hero._id === id) {
//       setActiveHero(hero);
//       setMode("edit");
//       setShowModal(true);
//     } else {
//       console.warn("Hero not found for editing.");
//     }
//   };

//   const handleDelete = async (id: string) => {
//     const confirmed = window.confirm(
//       "Are you sure you want to delete this FAQ?"
//     );
//     if (!confirmed) return;

//     try {
//       const res = await fetch(
//         `http://localhost:8000/api/${department}/hero/${category}/delete/${id}`,
//         {
//           method: "DELETE",
//         }
//       );
//       const result = await res.json();

//       // Remove deleted hero from state
//       setHeroData((prev) => prev.filter((h) => h._id !== id));

//       if (hero?._id === id) {
//         setHero(null); // Remove the displayed hero
//       }
//     } catch (error) {
//       console.error("Error deleting hero:", error);
//     }
//   };

//   return (
//     <>
//       {!hero && !admin ? (
//         <div>No Hero data found for the selected category.</div>
//       ) : !hero && admin ? (
//         <div className="flex w-full mt-40 items-start justify-center">
//           <button
//             onClick={() => {
//               setActiveHero({
//                 category: category,
//                 title: "",
//                 tagline: "",
//                 description: "",
//                 image: "",
//               });
//               setMode("add");
//               setShowModal(true);
//             }}
//             className="px-14 py-4 bg-green-600 text-white text-2xl font-serif rounded-lg hover:bg-purple-dark transition "
//           >
//             + Add Hero
//           </button>
//         </div>
//       ) : (
//         <section
//           className="flex flex-col items-center justify-center h-[640px] mt-36 relative bg-cover bg-center bg-no-repeat rounded-b-[120px] mb-40"
//           style={{
//             backgroundImage: `url('/images/${category}/${category}_bg.png')`,
//           }}
//         >
//           {/* Background Overlay */}
//           <div className="absolute inset-0 bg-black bg-opacity-80 z-10 rounded-b-[120px]" />
//           <div className="flex flex-col items-center justify-center relative mb-20 z-20 max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]">
//             {admin && (
//               <div className=" h-full flex justify-end items-start mr-10 gap-3">
//                 <FiEdit2
//                   size={25}
//                   className="text-blue-500 hover:text-blue-800 cursor-pointer"
//                   title="Edit"
//                   onClick={() => handleEdit(hero?._id!)}
//                 />
//                 <FiTrash2
//                   size={25}
//                   className="text-red-600 hover:text-red-800 cursor-pointer"
//                   title="Delete"
//                   onClick={() => handleDelete(hero?._id!)}
//                 />
//               </div>
//             )}
//             <p className="pt-20 uppercase tracking-widest text-xs text-center text-blue-100">
//               {hero?.tagline}
//             </p>

//             <motion.h1 className="text-center text-[30px] md:text-5xl lg:text-6xl">
//               {hero?.title}
//             </motion.h1>

//             <p className="pt-3 px-4 text-center md:tracking-wider mb-4 text-sm md:text-base lg:text-lg">
//               {hero?.description}
//             </p>
//           </div>
//         </section>
//       )}

//       {showModal && activeHero && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-auto">
//           <div className="bg-white dark:bg-black h-auto p-10 px-12 my-auto rounded-lg w-full max-w-3xl">
//             <h2 className="text-xl font-bold mb-4 text-center">
//               {mode === "add" ? "Add New Hero" : "Edit Hero"}
//             </h2>

//             <form
//               onSubmit={async (e) => {
//                 e.preventDefault();

//                 try {
//                   const url =
//                     mode === "add"
//                       ? `http://localhost:8000/api/${department}/hero/${category}/add`
//                       : `http://localhost:8000/api/${department}/hero/${category}/update/${activeHero._id}`;

//                   const method = mode === "add" ? "POST" : "PUT";

//                   const res = await fetch(url, {
//                     method,
//                     headers: { "Content-Type": "application/json" },
//                     body: JSON.stringify(
//                       mode === "add" ? { category, ...activeHero } : activeHero
//                     ),
//                   });

//                   if (res.ok) {
//                     const result = await res.json();

//                     if (mode === "add") {
//                       setHero((prev) =>
//                         prev ? [...prev, activeHero] : [activeHero]
//                       );
//                     } else {
//                       setHero(
//                         (prev) =>
//                           prev?.map((item) =>
//                             item._id === result._id ? result : item
//                           ) ?? null
//                       );
//                     }

//                     setShowModal(false);
//                     setActiveHero(null);
//                   } else {
//                     console.error("Request failed");
//                   }
//                 } catch (err) {
//                   console.error("Error:", err);
//                 }
//               }}
//             >
//               <LabelInputContainer>
//                 <Label>Category: </Label>
//                 <Input
//                   className="border p-2 w-full mb-3"
//                   value={activeHero.category}
//                   onChange={(e) =>
//                     setActiveHero((prev) => ({
//                       ...prev!,
//                       category: e.target.value,
//                     }))
//                   }
//                   placeholder="Category"
//                 />
//               </LabelInputContainer>
//               <LabelInputContainer>
//                 <Label>Title: </Label>
//                 <Input
//                   className="border p-2 w-full mb-3"
//                   value={activeHero.title}
//                   onChange={(e) =>
//                     setActiveHero((prev) => ({
//                       ...prev!,
//                       title: e.target.value,
//                     }))
//                   }
//                   placeholder="Title"
//                 />
//               </LabelInputContainer>
//               <LabelInputContainer>
//                 <Label>Tagline: </Label>
//                 <Input
//                   className="border p-2 w-full mb-3"
//                   value={activeHero.tagline}
//                   onChange={(e) =>
//                     setActiveHero((prev) => ({
//                       ...prev!,
//                       tagline: e.target.value,
//                     }))
//                   }
//                   placeholder="Tagline"
//                 />
//               </LabelInputContainer>

//               <LabelInputContainer>
//                 <Label>Description: </Label>
//                 <Textarea
//                   className="border p-2 w-full mb-3"
//                   value={activeHero.description}
//                   onChange={(e) =>
//                     setActiveHero((prev) => ({
//                       ...prev!,
//                       description: e.target.value,
//                     }))
//                   }
//                   rows={4}
//                   placeholder="Description"
//                 />
//               </LabelInputContainer>

//               <LabelInputContainer>
//                 <Label>Image: </Label>
//                 <Input
//                   className="border p-2 w-full mb-3"
//                   value={activeHero.image}
//                   onChange={(e) =>
//                     setActiveHero((prev) => ({
//                       ...prev!,
//                       image: e.target.value,
//                     }))
//                   }
//                   placeholder="Image URL"
//                 />
//               </LabelInputContainer>

//               <div className="flex justify-end gap-3">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setShowModal(false);
//                     setActiveHero(null);
//                   }}
//                   className="px-4 py-2 border rounded text-gray-700"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   onClick={() => window.location.reload()}
//                   className={`px-4 py-2 rounded text-white ${
//                     mode === "add" ? "bg-green-600" : "bg-blue-600"
//                   }`}
//                 >
//                   {mode === "add" ? "Add" : "Save"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };
// // #endregion
