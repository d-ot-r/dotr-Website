import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";

import {
  IconEye,
  IconRuler,
  IconPencil, // Tabler uses 'Pencil' instead of 'PenTool'
  IconStar,
  IconHeart,
  IconShieldCheck,
  IconMoodHappy,
  IconDeviceMobile, // Tabler uses 'DeviceMobile' instead of 'MonitorSmartphone'
  IconTrendingUp,
  IconLayoutGrid,
  IconMessageCircle, // Tabler uses 'MessageCircle' instead of 'MessageSquare'
  IconZip,
  IconSpeedboat,
  IconSettings,
  IconMathIntegral,
  IconUserCheck,
  IconShoppingBag,
  IconSettings2,
  IconChartArea,
  IconPackage,
} from "@tabler/icons-react";
import { Background_Lines } from "@/components/ui/Background_Lines"; // Adjust path as needed
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import {
  EditableListField,
  Input,
  Label,
  LabelInputContainer,
  Textarea,
} from "./FORM";

const iconMap: { [key: string]: React.ElementType } = {
  IconEye,
  IconRuler,
  IconPencil,
  IconHeart,
  IconMoodHappy,
  IconDeviceMobile,
  IconTrendingUp,
  IconLayoutGrid,
  IconMessageCircle,
  IconZip,
  IconStar,
  IconSpeedboat,
  IconShieldCheck,
  IconSettings,
  IconMathIntegral,
  IconUserCheck,
  IconShoppingBag,
  IconSettings2,
  IconChartArea,
  IconPackage,
};

type Feature = {
  icon: string;
  title: string;
  description: string;
};

type ImportanceItems = {
  _id?: string;
  category: string;
  heading: string;
  subheading: string;
  paragraphs: string[];
  featuresHeading: string;
  features: Feature[];
};

export const IMPORTANCE = ({
  department,
  category,
  admin = false, // default to false
}: {
  department: string;
  category: string;
  admin?: boolean; // default to false
}) => {
  const [activeImportance, setActiveImportance] =
    useState<ImportanceItems | null>(null);
  const [mode, setMode] = useState<"add" | "edit">("add");
  const [showModal, setShowModal] = useState(false);
  const [importance, setImportance] = useState<ImportanceItems[]>([]);
  const [data, setData] = useState<ImportanceItems | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchImportanceData = async () => {
        try {
          const response = await fetch(
            `http://localhost:8000/api/${department}/importance/${category}`
          );
          const data = await response.json();
          setData(data[0]);
          setLoading(false);
        } catch (error) {
          console.error(`Error fetching ${category} data:`, error);
        }
      };

      fetchImportanceData();
    } catch (error) {
      console.error(`Error fetching ${category} data:`, error);
    }
  }, [department, category]);

  const handleEdit = (id: string) => {
    if (!data) return;
    setActiveImportance(data); // Load current data into the form
    setMode("edit");
    setShowModal(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this importance item?"))
      return;
    try {
      await axios.delete(
        `http://localhost:8000/api/${department}/importance/${category}/delete/${id}`
      );
      setData(null);
    } catch (error) {
      console.error("Failed to delete importance:", error);
    }
  };

  const handleSubmit = async () => {
    if (!activeImportance) return;

    try {
      if (mode === "add") {
        const response = await axios.post(
          `http://localhost:8000/api/${department}/importance/${category}/add`,
          activeImportance
        );
        setData(response.data);
      } else if (mode === "edit") {
        const response = await axios.put(
          `http://localhost:8000/api/${department}/importance/${category}/update/${activeImportance._id}`,
          activeImportance
        );
        setData(response.data.data); // note `.data.data` because of your response structure
      }
      setShowModal(false);
    } catch (error) {
      console.error(
        `Error ${mode === "add" ? "adding" : "editing"} importance:`,
        error
      );
    }
  };

  return (
    <section>
      {loading ? (
        <div>Loading...</div>
      ) : !data && !admin ? (
        <div>No Importance data found for the selected category.</div>
      ) : !data && admin ? (
        <div className="flex w-full mt-40 items-start justify-center">
          <button
            onClick={() => {
              setActiveImportance({
                category: category,
                heading: "",
                subheading: "",
                paragraphs: [],
                featuresHeading: "",
                features: [],
              });
              setMode("add");
              setShowModal(true);
            }}
            className="px-14 py-4 bg-green-600 text-white text-2xl font-serif rounded-lg hover:bg-purple-dark transition "
          >
            + Add Importance
          </button>
        </div>
      ) : (
        <Background_Lines className="relative flex flex-col items-center justify-center py-20 mb-40 lg:h-[1200px] bg-gray-50 dark:bg-black rounded-full">
          {admin && (
            <div className=" mb-10 z-40 flex justify-center items-center gap-10">
              <FiEdit2
                size={40}
                className="text-blue-500 hover:text-blue-800 cursor-pointer"
                title="Edit"
                onClick={() => handleEdit(data?._id!)}
              />
              <FiTrash2
                size={40}
                className="text-red-600 hover:text-red-800 cursor-pointer"
                title="Delete"
                onClick={() => handleDelete(data?._id!)}
              />
            </div>
          )}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            className="max-w-[1100px] px-4 text-start"
          >
            {/* Heading */}
            <h2 className="mx-auto pb-4 max-w-[800px] text-center text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              {data?.heading}
            </h2>

            {/* Subheading */}
            <p className="pb-10 text-center text-base md:text-lg text-gray-700 dark:text-gray-400 max-w-[900px] mx-auto">
              {data?.subheading}
            </p>

            {/* Paragraphs */}
            <div className="pb-16 text-center space-y-6 text-base md:text-lg text-gray-800 dark:text-gray-200">
              {data?.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Features Section */}
            <div className="text-center space-y-8">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                {data?.featuresHeading}
              </h3>
              <div className=" flex flex-col items-center justify-center">
                <ul className="text-base md:text-lg text-gray-800 dark:text-gray-200 space-y-4">
                  {data?.features.map((feature, index) => {
                    const Icon = iconMap[feature.icon] || IconEye;

                    return (
                      <li
                        key={index}
                        className="flex items-start w-full mx-auto gap-4"
                      >
                        <Icon className="text-green-600 w-6 h-6 shrink-0" />
                        <div>
                          <span className="font-semibold text-gray-900 dark:text-white">
                            {feature.title}
                          </span>{" "}
                          —{" "}
                          <span className="text-gray-700 dark:text-gray-300">
                            {feature.description}
                          </span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </motion.div>
        </Background_Lines>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-auto">
          <div className="bg-white dark:bg-black h-auto p-10 px-14 my-auto rounded-lg w-full max-w-5xl space-y-5">
            <h2 className="text-xl font-bold mb-4 text-center">
              {mode === "add" ? "Add" : "Edit"} Importance
            </h2>
            <LabelInputContainer>
              <Label>Category: </Label>
              <Input
                className="border p-2 w-full"
                value={activeImportance?.category || ""}
                onChange={(e) =>
                  setActiveImportance((prev) => ({
                    ...prev!,
                    category: e.target.value,
                  }))
                }
                placeholder="Category"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label>Heading</Label>
              <Input
                value={activeImportance?.heading || ""}
                onChange={(e) =>
                  setActiveImportance((prev) =>
                    prev ? { ...prev, heading: e.target.value } : null
                  )
                }
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label>Subheading</Label>
              <Input
                value={activeImportance?.subheading || ""}
                onChange={(e) =>
                  setActiveImportance((prev) =>
                    prev ? { ...prev, subheading: e.target.value } : null
                  )
                }
              />
            </LabelInputContainer>
            <EditableListField
              label="Paragraphs"
              values={activeImportance?.paragraphs || []}
              onChange={(value) =>
                setActiveImportance((prev) => ({
                  ...prev!,
                  paragraphs: value,
                }))
              }
            />
            <LabelInputContainer>
              <Label>Features Heading: </Label>
              <Input
                className="border p-2 w-full mb-3"
                value={activeImportance?.featuresHeading || ""}
                onChange={(e) =>
                  setActiveImportance((prev) => ({
                    ...prev!,
                    featuresHeading: e.target.value,
                  }))
                }
                placeholder="Features Heading"
              />
            </LabelInputContainer>

            {/* Features */}
            <div className="mb-6">
              <Label className="block text-lg font-semibold mb-2">
                Features
              </Label>

              {activeImportance?.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row gap-4 mb-4 border p-4 rounded-lg bg-gray-50 dark:bg-gray-900"
                >
                  <Input
                    className="flex-1"
                    placeholder="Icon (e.g., IconEye)"
                    value={feature.icon}
                    onChange={(e) =>
                      setActiveImportance((prev) => {
                        const updated = [...prev!.features];
                        updated[index].icon = e.target.value;
                        return { ...prev!, features: updated };
                      })
                    }
                  />
                  <Input
                    className="flex-1"
                    placeholder="Title"
                    value={feature.title}
                    onChange={(e) =>
                      setActiveImportance((prev) => {
                        const updated = [...prev!.features];
                        updated[index].title = e.target.value;
                        return { ...prev!, features: updated };
                      })
                    }
                  />
                  <Textarea
                    rows={3}
                    className="flex-1 w-80"
                    placeholder="Description"
                    value={feature.description}
                    onChange={(e) =>
                      setActiveImportance((prev) => {
                        const updated = [...prev!.features];
                        updated[index].description = e.target.value;
                        return { ...prev!, features: updated };
                      })
                    }
                  />
                  <button
                    type="button"
                    className="text-red-500 hover:text-red-700 items-center justify-end ml-auto"
                    onClick={() =>
                      setActiveImportance((prev) => {
                        const updated = [...prev!.features];
                        updated.splice(index, 1);
                        return { ...prev!, features: updated };
                      })
                    }
                  >
                    Remove
                  </button>
                </div>
              ))}

              <div className="flex justify-end pb-10">
                <button
                  type="button"
                  className=" mt-2 px-4 text-green-600 ml-80 hover:underline text-base"
                  onClick={() =>
                    setActiveImportance((prev) => ({
                      ...prev!,
                      features: [
                        ...prev!.features,
                        { icon: "", title: "", description: "" },
                      ],
                    }))
                  }
                >
                  + Add Feature
                </button>
              </div>
            </div>

            <div className="flex justify-end gap-4 ">
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                {mode === "add" ? "Add" : "Update"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
