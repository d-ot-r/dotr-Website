"use client";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineDown } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import {
  IconLayoutGrid,
  IconMouse,
  IconPalette,
  IconFolderCheck,
  IconCalendarTime,
  IconClock,
  IconCertificate,
  IconEdit,
  IconFileTypeSvg,
  IconPuzzle,
  IconEye,
  IconRefresh,
  IconAlertCircle,
  IconCalendarStats,
  IconDeviceMobile,
  IconEditCircle,
  IconShoppingBag,
  IconLayersLinked,
  IconRefreshDot,
  IconLifebuoy,
  IconDeviceDesktop,
  IconCode,
  IconTimeline,
  IconPackageExport,
  IconTrendingUp,
} from "@tabler/icons-react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import {
  EditableListField,
  Input,
  Label,
  LabelInputContainer,
  Textarea,
} from "./FORM";

//#region Extra Stuff
const iconMap: Record<string, React.ElementType> = {
  IconLayoutGrid,
  IconMouse,
  IconPalette,
  IconFolderCheck,
  IconCalendarTime,
  IconClock,
  IconCertificate,
  IconEdit,
  IconFileTypeSvg,
  IconPuzzle,
  IconEye,
  IconRefresh,
  IconAlertCircle,
  IconCalendarStats,
  IconDeviceMobile,
  IconEditCircle,
  IconShoppingBag,
  IconLayersLinked,
  IconRefreshDot,
  IconLifebuoy,
  IconDeviceDesktop,
  IconCode,
  IconTimeline,
  IconPackageExport,
  IconTrendingUp,
};

export interface FAQItems {
  _id?: string;
  id: number;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  icon: string;
  intro: string[];
  points: string[];
  outro: string[];
}

export interface FAQsData {
  category: string;
  faqs: FAQItems[];
}

export interface FAQs_CardProps {
  _id?: string;
  id?: number;
  admin?: boolean; // default to false
  faqCard: FAQItems;
  isActive: boolean;
  onToggle: () => void;
  onDelete?: (_id: string) => void;
  onEdit?: (_id: string) => void;
}
//#endregion

//#region FAQ Card
export const FAQs_Card: React.FC<FAQs_CardProps> = ({
  _id,
  admin = false, // default to false
  faqCard,
  isActive,
  onToggle,
  onEdit,
  onDelete,
}: FAQs_CardProps) => {
  const IconComponent = iconMap[faqCard.icon] || IconAlertCircle;

  return (
    <div
      onClick={onToggle}
      className="cursor-pointer border rounded-lg px-6 py-4 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 transition"
    >
      <div className="flex">
        {/* Icon */}
        <div className="flex items-center mr-8 text-slate-900 dark:text-slate-400">
          {IconComponent && <IconComponent size={40} />}
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">
            {faqCard.title}
          </h3>
          <motion.p
            key={`expanded-${faqCard.title}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="text-sm text-neutral-700 dark:text-neutral-400 mt-3"
          >
            {faqCard.description}
          </motion.p>
        </div>
        <div className="ml-auto flex items-center">
          {admin && (
            <div className=" flex justify-center items-center mr-5 gap-3">
              <FiEdit2
                size={20}
                className="text-blue-500 hover:text-blue-800 cursor-pointer"
                title="Edit"
                onClick={() => onEdit?.(_id!)}
              />
              <FiTrash2
                size={22}
                className="text-red-600 hover:text-red-800 cursor-pointer"
                title="Delete"
                onClick={() => onDelete?.(_id!)}
              />
            </div>
          )}
          <AiOutlineDown
            size={30}
            className={` transition-transform duration-300 ${
              isActive ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="border-t mt-4 mx-5 pt-4 border-neutral-200 dark:border-neutral-700 space-y-4">
              {/* Intro paragraphs */}
              {faqCard.intro?.map((paragraph, idx) => (
                <p
                  key={`intro-${idx}`}
                  className="text-sm text-neutral-800 dark:text-neutral-300"
                >
                  {paragraph}
                </p>
              ))}

              {/* Bullet points */}
              <ul className="ml-10 list-disc list-inside space-y-2 text-sm text-neutral-800 dark:text-neutral-200">
                {faqCard.points?.map((point, idx) => (
                  <li key={`point-${idx}`}>{point}</li>
                ))}
              </ul>

              {/* Outro paragraphs */}
              {faqCard.outro?.map((paragraph, idx) => (
                <p
                  key={`outro-${idx}`}
                  className="text-sm text-neutral-700 dark:text-neutral-400"
                >
                  {paragraph}
                </p>
              ))}

              {/* CTA Button */}
              {faqCard.ctaText && faqCard.ctaLink && (
                <a
                  href={faqCard.ctaLink}
                  onClick={(e) => e.stopPropagation()} // Prevent toggle
                  className="inline-block px-5 py-3 bg-slate-900 text-white rounded-xl text-sm font-medium hover:bg-neutral-800 transition"
                >
                  {faqCard.ctaText}
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
//#endregion

//#region FAQs
export const FAQs = ({
  department,
  category,
  admin = false, // default to false
}: {
  department: string;
  category: string;
  admin?: boolean; // default to false
}) => {
  const [activeFaq, setActiveFaq] = useState<FAQItems | null>(null);
  const [mode, setMode] = useState<"add" | "edit">("add");
  const [showModal, setShowModal] = useState(false);
  const [faqs, setFaqs] = useState<FAQItems[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/${department}/faqs/${category}`
        );
        const data = await response.json();
        const matchedFaqs = data.find(
          (item: any) => item.category === category
        );
        // if (matchedFaqs) {
        //   setFaqs(matchedFaqs.faqs);
        // }

        // const faqsWithIcons = matchedFaqs.faqs.map((faq: any) => ({
        //   ...faq,
        //   icon: iconMap[faq.icon as string] || IconAlertCircle, // fallback icon,
        // }));
        // // console.log(faqsWithIcons);
        // setFaqs(faqsWithIcons);

        setFaqs(matchedFaqs.faqs); // Keep `icon` as string only
      } catch (error) {
        console.error(`Error fetching FAQs for ${category}:`, error);
      }
    };

    fetchFaqs();
  }, [department, category]);

  const handleToggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleDelete = async (_id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this FAQ?"
    );
    if (!confirmed) return;

    try {
      const res = await fetch(
        `http://localhost:8000/api/${department}/faqs/${category}/delete/${_id}`,
        { method: "DELETE" }
      );

      if (res.ok) {
        setFaqs((prev) => prev?.filter((item) => item._id !== _id) ?? null);
      } else {
        console.error("Delete failed");
      }
    } catch (err) {
      console.error("Error deleting FAQ:", err);
    }
  };

  const handleEdit = (id: string) => {
    const faqToEdit = faqs?.find((o) => o._id === id);
    if (!faqToEdit) return;

    setActiveFaq(faqToEdit);
    setMode("edit");
    setShowModal(true);
  };

  return (
    <section className="my-28 py-14 max-w-6xl mx-auto px-4">
      <h2 className="py-8 text-3xl md:text-5xl font-bold text-center mb-10 text-neutral-900 dark:text-white">
        Got Questions? We’ve Got Honest Answers.
      </h2>
      {admin && (
        <div className="flex justify-center mb-20">
          <button
            onClick={() => {
              setActiveFaq({
                id: faqs?.length ? faqs.length + 1 : 1,
                title: "",
                description: "",
                icon: "IconCode",
                ctaText: "",
                ctaLink: "",
                intro: [],
                points: [],
                outro: [],
              });
              setMode("add");
              setShowModal(true);
            }}
            className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-purple-dark transition "
          >
            + Add FAQ
          </button>
        </div>
      )}
      {!faqs ? (
        <p className="text-center text-red-500">
          No FAQs of this category found...
        </p>
      ) : (
        <div className="grid gap-6">
          {faqs
            .sort((a, b) => a.id - b.id)
            .map((faq: any, index: number) => (
              <FAQs_Card
                key={faq._id || index}
                _id={faq._id}
                id={faq.id}
                faqCard={faq}
                isActive={activeIndex === index}
                onToggle={() => handleToggle(index)}
                admin={admin}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            ))}
        </div>
      )}

      {showModal && activeFaq && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-auto">
          <div className="bg-white dark:bg-black h-auto p-10 px-12 my-auto rounded-lg w-full max-w-3xl">
            <h2 className="text-xl font-bold mb-4 text-center">
              {mode === "add" ? "Add New Faq" : "Edit Faq"}
            </h2>

            <form
              onSubmit={async (e) => {
                e.preventDefault();

                try {
                  const url =
                    mode === "add"
                      ? `http://localhost:8000/api/${department}/faqs/add`
                      : `http://localhost:8000/api/${department}/faqs/${category}/update/${activeFaq._id}`;

                  const method = mode === "add" ? "POST" : "PUT";

                  const res = await fetch(url, {
                    method,
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(
                      mode === "add"
                        ? { category, faqs: [activeFaq] }
                        : activeFaq
                    ),
                  });

                  if (res.ok) {
                    const result = await res.json();

                    if (mode === "add") {
                      setFaqs((prev) =>
                        prev ? [...prev, activeFaq] : [activeFaq]
                      );
                    } else {
                      setFaqs(
                        (prev) =>
                          prev?.map((item) =>
                            item._id === result._id ? result : item
                          ) ?? null
                      );
                    }

                    setShowModal(false);
                    setActiveFaq(null);
                  } else {
                    console.error("Request failed");
                  }
                } catch (err) {
                  console.error("Error:", err);
                }
              }}
            >
              <LabelInputContainer>
                <Label>ID: </Label>
                <Input
                  className="border p-2 w-full mb-3"
                  value={activeFaq.id}
                  onChange={(e) =>
                    setActiveFaq((prev) => ({
                      ...prev!,
                      id: parseInt(e.target.value),
                    }))
                  }
                  placeholder="ID"
                />
              </LabelInputContainer>

              <LabelInputContainer>
                <Label>Title: </Label>
                <Input
                  className="border p-2 w-full mb-3"
                  value={activeFaq.title}
                  onChange={(e) =>
                    setActiveFaq((prev) => ({
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
                  value={activeFaq.description}
                  onChange={(e) =>
                    setActiveFaq((prev) => ({
                      ...prev!,
                      description: e.target.value,
                    }))
                  }
                  rows={4}
                  placeholder="Description"
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label>Icon: </Label>
                <Input
                  className="border p-2 w-full mb-3"
                  value={activeFaq.icon}
                  onChange={(e) =>
                    setActiveFaq((prev) => ({
                      ...prev!,
                      icon: e.target.value,
                    }))
                  }
                  placeholder="Icon"
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label>Call-To-Action(CTA) Text: </Label>
                <Input
                  className="border p-2 w-full mb-3"
                  value={activeFaq.ctaText}
                  onChange={(e) =>
                    setActiveFaq((prev) => ({
                      ...prev!,
                      ctaText: e.target.value,
                    }))
                  }
                  placeholder="CTA Text"
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label>Call-To-Action(CTA) Link: </Label>
                <Input
                  className="border p-2 w-full mb-3"
                  value={activeFaq.ctaLink}
                  onChange={(e) =>
                    setActiveFaq((prev) => ({
                      ...prev!,
                      ctaLink: e.target.value,
                    }))
                  }
                  placeholder="CTA Link"
                />
              </LabelInputContainer>
              <EditableListField
                label="Intro"
                values={activeFaq.intro || []}
                onChange={(value) =>
                  setActiveFaq((prev) => ({
                    ...prev!,
                    intro: value,
                  }))
                }
              />

              <EditableListField
                label="Points"
                values={activeFaq.points || []}
                onChange={(value) =>
                  setActiveFaq((prev) => ({
                    ...prev!,
                    points: value,
                  }))
                }
              />

              <EditableListField
                label="Outro"
                values={activeFaq.outro || []}
                onChange={(value) =>
                  setActiveFaq((prev) => ({
                    ...prev!,
                    outro: value,
                  }))
                }
              />

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setActiveFaq(null);
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
//#endregion
