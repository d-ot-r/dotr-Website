"use client";

import React, { useEffect, useState } from "react";
import { Background_Gradient } from "../ui/Background_Gradient";
import {
  IconPencil,
  IconDiamond,
  IconDeviceGamepad,
  IconTypography,
  IconRefresh,
  IconSparkles,
  IconLayoutGrid,
  IconDeviceDesktop,
  IconLayoutCards,
  IconMovie,
  IconStack,
  IconAppWindow,
  IconAdjustmentsHorizontal,
  IconFileZip,
  IconFolderCheck,
  IconAdCircle,
  IconDevices,
  IconBrush,
  IconShoppingCart,
  IconLayersLinked,
  IconTemplate,
  IconCode,
  IconDeviceMobile,
  IconSpeedboat,
  IconShieldCheck,
  IconRocket,
  IconSettings,
  IconTrendingUp,
  IconServer,
} from "@tabler/icons-react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { Input, Label, LabelInputContainer, Textarea } from "./FORM";

//#region Intro Stuff

export const iconMap: Record<string, React.ElementType> = {
  IconPencil,
  IconDiamond,
  IconDeviceGamepad,
  IconTypography,
  IconRefresh,
  IconSparkles,
  IconLayoutGrid,
  IconDeviceDesktop,
  IconLayoutCards,
  IconMovie,
  IconTemplate,
  IconStack,
  IconAppWindow,
  IconAdjustmentsHorizontal,
  IconFileZip,
  IconFolderCheck,
  IconAdCircle,
  IconDevices,
  IconBrush,
  IconShoppingCart,
  IconLayersLinked,
  IconCode,
  IconDeviceMobile,
  IconShieldCheck,
  IconRocket,
  IconSettings,
  IconTrendingUp,
  IconServer,
  IconSpeedboat,
};

export interface OFFERINGs_CardProps {
  _id?: string;
  title: string;
  tagline?: string;
  description?: string;
  icon: React.ElementType;
  link?: string;
  admin?: boolean; // default to false
  id?: number;
  onDelete?: (_id: string) => void;
  onEdit?: (_id: string) => void;
}

export interface OfferingItems {
  _id?: string;
  id: number;
  title: string;
  tagline: string;
  description?: string;
  icon: string;
}

export interface OfferingsData {
  category: string;
  offerings: OfferingItems[];
}
//#endregion

//#region OFFERINGs_Card
export function OFFERINGs_Card({
  _id,
  title,
  tagline,
  description,
  icon: Icon,
  admin = false, // default to false
  onDelete,
  onEdit,
}: OFFERINGs_CardProps) {
  return (
    <Background_Gradient className="rounded-lg max-w-sm w-full p-4 sm:p-8 bg-white dark:bg-zinc-900 hover:scale-[1.03] transition-transform duration-300">
      {admin && (
        <div className="mb-5 flex justify-end items-start gap-3">
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
      <div className="flex items-center gap-4">
        <Icon className="w-10 h-10 text-black dark:text-white" />
        <h3 className="text-2xl font-semibold text-black dark:text-white">
          {title}
        </h3>
      </div>
      <p className="text-sm ml-14 mt-1 text-neutral-500 italic dark:text-neutral-400">
        {tagline}
      </p>
      <p className="text-sm text-neutral-700 mt-6 dark:text-neutral-300">
        {description}
      </p>
    </Background_Gradient>
  );
}
//#endregion

//#region OFFERINGs
export const OFFERINGs = ({
  department,
  category,
  heading,
  admin = false, // default to false
}: {
  department: string;
  category: string;
  heading: string;
  admin?: boolean; // default to false
}) => {
  const [showModal, setShowModal] = useState(false);
  const [activeOffering, setActiveOffering] = useState<OfferingItems | null>(
    null
  );
  const [mode, setMode] = useState<"add" | "edit">("add");
  const [offerings, setOfferings] = useState<OfferingItems[] | null>(null);

  useEffect(() => {
    const fetchOfferings = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/${department}/offerings/${category}`
        );
        const data: OfferingsData[] = await response.json();
        const matchedOfferings = data.find(
          (item) => item.category === category
        );

        // console.log(matchedOfferings);
        if (matchedOfferings) {
          setOfferings(matchedOfferings.offerings);
        }
      } catch (error) {
        console.error(`Error fetching ${category} offerings:`, error);
      }
    };

    fetchOfferings();
  }, [department, category]);

  const handleDelete = async (_id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this offering?"
    );
    if (!confirmed) return;

    try {
      const res = await fetch(
        `http://localhost:8000/api/${department}/offerings/${category}/delete/${_id}`,
        { method: "DELETE" }
      );

      if (res.ok) {
        setOfferings(
          (prev) => prev?.filter((item) => item._id !== _id) ?? null
        );
      } else {
        console.error("Delete failed");
      }
    } catch (err) {
      console.error("Error deleting offering:", err);
    }
  };

  const handleEdit = (id: string) => {
    const offeringToEdit = offerings?.find((o) => o._id === id);
    if (!offeringToEdit) return;

    setActiveOffering(offeringToEdit);
    setMode("edit");
    setShowModal(true);
  };

  return (
    <section id={`${category}-offerings`} className=" pt-20 pb-5">
      <h1 className="text-center text-5xl font-bold mb-24">
        What does{" "}
        <span className="text-purple">
          <i>dotr</i>
        </span>{" "}
        offer in <span className="text-purple">{heading}</span>?
      </h1>
      {admin && (
        <div className="flex justify-center mb-20">
          <button
            onClick={() => {
              setActiveOffering({
                id: offerings?.length ? offerings.length + 1 : 1,
                title: "",
                tagline: "",
                description: "",
                icon: "IconPencil",
              });
              setMode("add");
              setShowModal(true);
            }}
            className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-purple-dark transition "
          >
            + Add Offering
          </button>
        </div>
      )}

      {!offerings ? (
        <p className="text-center text-red-500">
          No offerings of this category found...
        </p>
      ) : (
        <div className="flex flex-wrap gap-10 items-center justify-center mb-40 mx-auto">
          {offerings
            .sort((a, b) => a.id - b.id)
            .map((offering) => {
              return (
                <OFFERINGs_Card
                  key={offering._id}
                  _id={offering._id}
                  id={offering.id}
                  title={offering.title}
                  tagline={offering.tagline}
                  description={offering.description}
                  icon={iconMap[offering.icon] || IconPencil}
                  admin={admin}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                />
              );
            })}
        </div>
      )}

      {showModal && activeOffering && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-auto">
          <div className="bg-white dark:bg-black h-auto p-10 px-12 my-auto rounded-lg w-full max-w-3xl">
            <h2 className="text-xl font-bold mb-4 text-center">
              {mode === "add" ? "Add New Offering" : "Edit Offering"}
            </h2>

            <form
              onSubmit={async (e) => {
                e.preventDefault();

                try {
                  const url =
                    mode === "add"
                      ? `http://localhost:8000/api/${department}/offerings/add`
                      : `http://localhost:8000/api/${department}/offerings/${category}/update/${activeOffering._id}`;

                  const method = mode === "add" ? "POST" : "PUT";

                  const res = await fetch(url, {
                    method,
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(
                      mode === "add"
                        ? { category, offerings: [activeOffering] }
                        : activeOffering
                    ),
                  });

                  if (res.ok) {
                    const result = await res.json();

                    if (mode === "add") {
                      setOfferings((prev) =>
                        prev ? [...prev, activeOffering] : [activeOffering]
                      );
                    } else {
                      setOfferings(
                        (prev) =>
                          prev?.map((item) =>
                            item._id === result._id ? result : item
                          ) ?? null
                      );
                    }

                    setShowModal(false);
                    setActiveOffering(null);
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
                  value={activeOffering.id}
                  onChange={(e) =>
                    setActiveOffering((prev) => ({
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
                  value={activeOffering.title}
                  onChange={(e) =>
                    setActiveOffering((prev) => ({
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
                  value={activeOffering.tagline}
                  onChange={(e) =>
                    setActiveOffering((prev) => ({
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
                  value={activeOffering.description}
                  onChange={(e) =>
                    setActiveOffering((prev) => ({
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
                  value={activeOffering.icon}
                  onChange={(e) =>
                    setActiveOffering((prev) => ({
                      ...prev!,
                      icon: e.target.value,
                    }))
                  }
                  placeholder="e.g., IconDiamond"
                />
              </LabelInputContainer>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setActiveOffering(null);
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

      {/* {showModal && newOffering && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-auto">
          <div className="bg-white dark:bg-black h-[60vh] px-10 my-auto rounded-lg w-full max-w-3xl">
            <h2 className="text-xl font-bold mb-4 text-center">
              Add New Offering
            </h2>

            <form
              onSubmit={async (e) => {
                e.preventDefault();
                try {
                  const res = await fetch(
                    `http://localhost:8000/api/${department}/offerings/add`,
                    {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        category,
                        offerings: [newOffering],
                      }),
                    }
                  );

                  if (res.ok) {
                    const result = await res.json();
                    setOfferings((prev) =>
                      prev ? [...prev, newOffering] : [newOffering]
                    );
                    setNewOffering(null);
                    setShowModal(false);
                  } else {
                    console.error("Failed to add offering");
                  }
                } catch (err) {
                  console.error("Error adding offering:", err);
                }
              }}
            >
              <LabelInputContainer>
                <Label>Title: </Label>
                <Input
                  className="border p-2 w-full mb-3"
                  value={newOffering.title}
                  onChange={(e) =>
                    setNewOffering((prev) => ({
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
                  value={newOffering.tagline}
                  onChange={(e) =>
                    setNewOffering((prev) => ({
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
                  value={newOffering.description}
                  onChange={(e) =>
                    setNewOffering((prev) => ({
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
                  value={newOffering.icon}
                  onChange={(e) =>
                    setNewOffering((prev) => ({
                      ...prev!,
                      icon: e.target.value,
                    }))
                  }
                  placeholder="e.g., IconDiamond"
                />
              </LabelInputContainer>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setNewOffering(null);
                  }}
                  className="px-4 py-2 border rounded text-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )} 

         {showModal && editingOffering && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-auto ">
          <div className="bg-white dark:bg-black h-[60vh] px-10 my-auto rounded-lg w-full max-w-3xl">
            <h2 className="text-xl font-bold mb-4 text-center">
              Edit Offering
            </h2>

            <form
              onSubmit={async (e) => {
                e.preventDefault();

                try {
                  const res = await fetch(
                    `http://localhost:8000/api/${department}/offerings/${category}/update/${editingOffering._id}`,
                    {
                      method: "PUT",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(editingOffering),
                    }
                  );

                  if (res.ok) {
                    const updated = await res.json();

                    setOfferings(
                      (prev) =>
                        prev?.map((item) =>
                          item._id === updated._id ? updated : item
                        ) ?? null
                    );

                    setShowModal(false);
                    setEditingOffering(null);
                  } else {
                    console.error("Update failed");
                  }
                } catch (err) {
                  console.error("Error updating offering:", err);
                }
              }}
            >
              <LabelInputContainer>
                <Label>Title: </Label>
                <Input
                  className="border p-2 w-full mb-3"
                  value={editingOffering.title}
                  onChange={(e) =>
                    setEditingOffering((prev) => ({
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
                  value={editingOffering.tagline}
                  onChange={(e) =>
                    setEditingOffering((prev) => ({
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
                  value={editingOffering.description}
                  onChange={(e) =>
                    setEditingOffering((prev) => ({
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
                  value={editingOffering.icon}
                  onChange={(e) =>
                    setEditingOffering((prev) => ({
                      ...prev!,
                      icon: e.target.value,
                    }))
                  }
                  placeholder="Icon"
                />
              </LabelInputContainer>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setEditingOffering(null);
                  }}
                  className="px-4 py-2 border rounded text-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )} */}
    </section>
  );
};
//#endregion
