"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";
// import { WhyDOTR_Card } from "@/components/ui/Cards/WhyDOTR_Card";
import { AnimatePresence, motion } from "framer-motion";
import { why_choose_dotr } from "../Home/DOTR_For_All";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { Input, Label, LabelInputContainer, Textarea } from "./FORM";

//#region WhyDOTR_Card
const WhyDOTR_Card = ({
  _id,
  id,
  title,
  icon,
  children,
  description,
  admin = false,
  onDelete,
  onEdit,
}: {
  _id?: string;
  id: number;
  title: string;
  icon: ReactNode;
  children?: React.ReactNode;
  description: string;
  admin?: boolean;
  onDelete?: (_id: string) => void;
  onEdit?: (_id: string) => void;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      // change h-[30rem] to h-[35rem], add rounded-3xl
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
          dark:border-white/[0.2] max-w-[400px] w-full mx-auto relative lg:h-[25rem] rounded-lg mb-5"
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* change to h-10 w-10 , add opacity-30  */}
      <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        {admin && (
          <div className=" flex justify-center items-start mb-16 gap-3">
            <FiEdit2
              size={25}
              className="text-blue-500 hover:text-blue-800 cursor-pointer"
              title="Edit"
              onClick={() => onEdit?.(_id!)}
            />
            <FiTrash2
              size={25}
              className="text-red-600 hover:text-red-800 cursor-pointer"
              title="Delete"
              onClick={() => onDelete?.(_id!)}
            />
          </div>
        )}
        <div
          // add this for making it center
          // absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
          group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
        >
          {icon}
        </div>
        <h6
          // change text-3xl, add text-center
          className="dark:text-white text-center text-2xl opacity-0 group-hover/canvas-card:opacity-100
           relative z-10 text-black mt-2 font-bold group-hover/canvas-card:text-white 
           group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {title}
        </h6>
        {/* add this one for the description */}
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
           relative z-10 my-4 group-hover/canvas-card:text-white text-center
           group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: "#E4ECFF" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
// #endregion

//#region Why_DOTR
export const Why_DOTR = ({
  department,
  heading,
  category,
  useLocalData = false,
  admin = false, // default to false
}: {
  department: string;
  heading: string;
  category: string;
  useLocalData?: boolean;
  admin?: boolean; // default to false
}) => {
  const [whyDOTR, setWhyDOTR] = useState<any[]>([]);
  const [activeWhyDOTR, setActiveWhyDOTR] = useState<any | null>(null);
  const [mode, setMode] = useState<"add" | "edit">("add");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (useLocalData) {
      // Filter the local dataset based on the category matching the category
      const filteredData = why_choose_dotr.filter(
        (item) => item.category === category
      );
      setWhyDOTR(filteredData);
    } else {
      const fetchWhyDOTR = async () => {
        try {
          const response = await fetch(
            `http://localhost:8000/api/${department}/why-dotr/${category}`
          );
          const data = await response.json();

          const matchedWhyDOTR = data.find(
            (item: any) => item.category === category
          );
          // console.log(matchedWhyDOTR);
          if (matchedWhyDOTR) {
            setWhyDOTR(matchedWhyDOTR.reasons);
          }
        } catch (error) {
          console.error(
            `Error fetching ${heading} Designing Offerings:`,
            error
          );
        }
      };

      fetchWhyDOTR();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [department, category, useLocalData]);

  const handleDelete = async (_id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this Why Choose DOTR?"
    );
    if (!confirmed) return;

    try {
      const res = await fetch(
        `http://localhost:8000/api/${department}/why-dotr/${category}/delete/${_id}`,
        { method: "DELETE" }
      );

      if (res.ok) {
        setWhyDOTR((prev) => prev?.filter((item) => item._id !== _id) ?? null);
      } else {
        console.error("Delete failed");
      }
    } catch (err) {
      console.error("Error deleting Why-DOTR:", err);
    }
  };

  const handleEdit = (id: string) => {
    const whyDOTRToEdit = whyDOTR?.find((o) => o._id === id);
    if (!whyDOTRToEdit) return;

    setActiveWhyDOTR(whyDOTRToEdit);
    setMode("edit");
    setShowModal(true);
  };

  return (
    <section className="relative w-full pb-20 my-40">
      <h1 className=" text-center text-6xl font-bold my-28">
        Why Choose <span className="text-purple">DOTR</span> for{" "}
        <span className="text-purple">
          <i>{heading}</i>
        </span>{" "}
        ?
      </h1>
      {admin && (
        <div className="flex justify-center mb-20">
          <button
            onClick={() => {
              setActiveWhyDOTR({
                category: category,
                id: whyDOTR?.length ? whyDOTR.length + 1 : 1,
                title: "",
                description: "",
                bgColor: "",
              });
              setMode("add");
              setShowModal(true);
            }}
            className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-purple-dark transition "
          >
            + Add Why choose DOTR
          </button>
        </div>
      )}
      {!whyDOTR ? (
        <p className="text-center text-red-500">
          No offerings of this category found...
        </p>
      ) : (
        <div className="mx-auto mt-20 flex flex-wrap items-center justify-center w-full gap-4">
          {whyDOTR
            .sort((a: any, b: any) => a.id - b.id)
            .map((item, index) => (
              <WhyDOTR_Card
                _id={item._id}
                id={item.id}
                key={index}
                title={item.title}
                icon={<AceternityIcon order={item.title} />}
                description={item.description}
                admin={admin}
                onDelete={handleDelete}
                onEdit={handleEdit}
              >
                <CanvasRevealEffect
                  animationSpeed={3}
                  containerClassName={`${item.bgColor} rounded-3xl overflow-hidden`}
                  colors={[[125, 211, 252]]}
                  dotSize={2.5}
                />
              </WhyDOTR_Card>
            ))}
        </div>
      )}
      {showModal && activeWhyDOTR && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-auto">
          <div className="bg-white dark:bg-black h-auto p-10 px-12 my-auto rounded-lg w-full max-w-3xl">
            <h2 className="text-xl font-bold mb-4 text-center">
              {mode === "add" ? "Add New" : "Edit"} Why choose DOTR
            </h2>

            <form
              onSubmit={async (e) => {
                e.preventDefault();

                // Check for duplicate ID in current list
                const isDuplicate = whyDOTR.some((item) => {
                  if (mode === "add") return item.id === activeWhyDOTR.id;
                  // In edit mode, skip comparing to itself
                  return (
                    item.id === activeWhyDOTR.id &&
                    item._id !== activeWhyDOTR._id
                  );
                });

                if (isDuplicate) {
                  alert(
                    "A reason with this ID already exists. Please use a unique ID."
                  );
                  return;
                }

                try {
                  const url =
                    mode === "add"
                      ? `http://localhost:8000/api/${department}/why-dotr/add`
                      : `http://localhost:8000/api/${department}/why-dotr/${category}/update/${activeWhyDOTR._id}`;

                  const method = mode === "add" ? "POST" : "PUT";

                  const res = await fetch(url, {
                    method,
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(
                      mode === "add"
                        ? { category, reasons: [activeWhyDOTR] }
                        : activeWhyDOTR
                    ),
                  });

                  if (res.ok) {
                    const result = await res.json();

                    if (mode === "add") {
                      setWhyDOTR((prev) =>
                        prev ? [...prev, activeWhyDOTR] : [activeWhyDOTR]
                      );
                    } else {
                      setWhyDOTR(
                        (prev) =>
                          prev?.map((item) =>
                            item._id === activeWhyDOTR._id
                              ? { ...item, ...activeWhyDOTR }
                              : item
                          ) ?? []
                      );
                    }
                    console.log(result);
                    setShowModal(false);
                    setActiveWhyDOTR(null);
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
                  value={category}
                  disabled
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label>ID: </Label>
                <Input
                  className="border p-2 w-full mb-3"
                  value={activeWhyDOTR.id}
                  onChange={(e) =>
                    setActiveWhyDOTR((prev: any) => ({
                      ...prev!,
                      id: e.target.value,
                    }))
                  }
                  placeholder="ID"
                />
              </LabelInputContainer>

              <LabelInputContainer>
                <Label>Title: </Label>
                <Input
                  className="border p-2 w-full mb-3"
                  value={activeWhyDOTR.title}
                  onChange={(e) =>
                    setActiveWhyDOTR((prev: any) => ({
                      ...prev!,
                      title: e.target.value,
                    }))
                  }
                  placeholder="Title"
                />
              </LabelInputContainer>

              <LabelInputContainer>
                <Label>Description: </Label>
                <Textarea
                  className="border p-2 w-full mb-3"
                  value={activeWhyDOTR.description}
                  onChange={(e) =>
                    setActiveWhyDOTR((prev: any) => ({
                      ...prev!,
                      description: e.target.value,
                    }))
                  }
                  rows={4}
                  placeholder="Description"
                />
              </LabelInputContainer>

              <LabelInputContainer>
                <Label>Background Color: </Label>
                <Input
                  className="border p-2 w-full mb-3"
                  value={activeWhyDOTR.bgColor}
                  onChange={(e) =>
                    setActiveWhyDOTR((prev: any) => ({
                      ...prev!,
                      bgColor: e.target.value,
                    }))
                  }
                  placeholder="Background Color"
                />
              </LabelInputContainer>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setActiveWhyDOTR(null);
                  }}
                  className="px-4 py-2 border rounded text-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
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
    </section>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative w-[320px] inline-flex overflow-hidden rounded-full p-[1px] ">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
          bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-slate-950 px-5 py-4 text-purple backdrop-blur-2xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
  );
};

// #endregion
