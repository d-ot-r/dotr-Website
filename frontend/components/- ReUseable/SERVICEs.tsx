"use client";
import React, { useEffect, useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import { motion } from "framer-motion";
import ProgressLink from "../ui/ProgressLink";
import { cn } from "@/lib/utils";
import { LampContainer } from "../ui/LampContainer";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import {
  EditableListField,
  Input,
  Label,
  LabelInputContainer,
  Textarea,
} from "./FORM";
import Link from "next/link";

export interface ServiceItem {
  _id?: string;
  id: number;
  title: string;
  description: string;
  image: string;
  icons: string[];
  link: string;
}

export interface ServicesProps {
  department: string;
  group: string;
  heading: string;
  gradientColors: string[];
  linksMap?: { title: string; url: string }[];
  admin?: boolean; // default to false
}

// #region Resuable Components

export const ServiceContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <div
      className={cn(
        "relative group/pin z-30  cursor-pointer",
        containerClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 mt-10 ml-[0.09375rem] -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{
            transform: transform,
          }}
          // remove  bg-black
          className="absolute left-1/2 p-4 top-44  flex justify-start items-start  rounded-2xl  shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden"
        >
          <div className={cn(" relative z-30 ", className)}>{children}</div>
        </div>
      </div>
      <ServicePerspective title={title} href={href} />
    </div>
  );
};

export const ServicePerspective = ({
  title,
  href,
}: {
  title?: string;
  href?: string;
}) => {
  return (
    // change w-96 to w-full
    <motion.div className="pointer-events-none w-full h-[580px] flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
      <div className=" w-full h-full flex-none  inset-0">
        <div className="absolute top-0 inset-x-0  flex justify-center">
          <a
            href={href}
            target={"_blank"}
            className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 "
          >
            <span className="relative w-[180px] z-20 text-white text-[14px] text-center font-bold inline-block py-2">
              {title}
            </span>

            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
          </a>
        </div>

        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-36 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 0,
              }}
              className="absolute left-1/2 top-36  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-100/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 2,
              }}
              className="absolute left-1/2 top-36  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-100/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 4,
              }}
              className="absolute left-1/2 top-36  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-100/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
          </>
        </div>

        <>
          <motion.div className="absolute right-1/2 top-8 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]" />
          <motion.div className="absolute right-1/2 top-8 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40  " />
          <motion.div className="absolute right-1/2 top-8 translate-x-[1.5px] bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-30 blur-[3px]" />
          <motion.div className="absolute right-1/2 top-8 translate-x-[0.5px]  bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-30 " />
        </>
      </div>
    </motion.div>
  );
};
//#endregion

//#region Services
export const SERVICEs: React.FC<ServicesProps> = ({
  department,
  group,
  heading,
  gradientColors,
  linksMap,
  admin = false,
}) => {
  const [error, setError] = useState(false);
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [activeServices, setActiveServices] = useState<ServiceItem | null>(
    null
  );
  const [mode, setMode] = useState<"add" | "edit">("add");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/${department}/services/${group}`
        ).then((response) => response.json());
        const matchedServices = response.services ?? [];
        // console.log(matchedServices);
        // console.log(department, group);
        setServices(matchedServices);

        // console.log(response);
        // console.log(response[0]);
        // console.log(response[0]?.services[0]);
        // if (department === "development") {
        //   const developmentServices = response?.services ?? [];
        //   console.log(developmentServices);
        //   setServices(developmentServices);
        // } else if (department === "designing") {
        //   const designingServices = response?.services ?? [];
        //   console.log(designingServices);
        //   setServices(designingServices);
        // }
      } catch (error) {
        setError(true);
        console.error(`Error fetching  ${group} services:`, error);
      }
    };

    fetchServices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [group]);

  const handleDelete = async (_id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this service?"
    );
    if (!confirmed) return;

    try {
      const res = await fetch(
        `http://localhost:8000/api/${department}/services/${group}/delete/${_id}`,
        { method: "DELETE" }
      );

      if (res.ok) {
        setServices((prev) => prev?.filter((item) => item._id !== _id) ?? null);
      } else {
        const resText = await res.text();
        console.error("Delete failed:", res.status, resText);
      }
    } catch (err) {
      console.error("Error deleting service:", err);
    }
  };

  const handleEdit = (id: string) => {
    const serviceToEdit = services?.find((o) => o._id === id);
    if (!serviceToEdit) return;

    setActiveServices(serviceToEdit);
    setMode("edit");
    setShowModal(true);
  };

  return (
    <section
      id={`${group.toLowerCase()}-services`}
      className="relative w-full h-full py-28"
    >
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            ease: "easeInOut",
          }}
          className={`heading bg-gradient-to-br from-${gradientColors[0]} to-${gradientColors[1]} pb-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl`}
        >
          <span className="text-purple">{heading}</span> Services
        </motion.h1>
      </LampContainer>

      {/* {const href = linksMap?.[item.id] ?? "#"} */}
      <div className="flex flex-wrap justify-center items-center gap-x-20 gap-y-20 -mt-32">
        {admin && (
          <div className="relative flex justify-center item-start">
            <button
              onClick={() => {
                setActiveServices({
                  id: services?.length ? services.length + 1 : 1,
                  title: "",
                  description: "",
                  image: "",
                  icons: [],
                  link: "",
                });
                setMode("add");
                setShowModal(true);
              }}
              className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-purple-dark transition "
            >
              + Add Service
            </button>
          </div>
        )}
        {error ? (
          <p className="text-red-400">
            Failed to load services. Please try again later.
          </p>
        ) : services.length === 0 ? (
          <p className="text-gray-500 text-center">No services available.</p>
        ) : (
          services.map((item) => {
            const href =
              linksMap?.find((link) => link.title === item.title)?.url ?? "#";

            return (
              <div
                className="h-[500px] flex flex-wrap items-center justify-center w-[350px] py-20"
                key={item.id}
              >
                <Link href={href}>
                  <ServiceContainer title={item.title} href={href}>
                    <div className="relative flex items-center justify-center w-[350px] overflow-hidden mb-6">
                      <div
                        className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                        style={{ backgroundColor: "#13162D" }}
                      >
                        <Image
                          height={500}
                          width={500}
                          src="/images/bg.png"
                          alt="bgimg"
                        />
                      </div>
                      <Image
                        width={192}
                        height={192}
                        src={item.image}
                        alt={item.title}
                        className="h-48 w-48 z-10 transition-transform duration-300 absolute ease-out hover:scale-125 shadow-2xl"
                      />
                    </div>

                    <h1 className="font-bold lg:text-3xl md:text-2xl text-lg line-clamp-2 mb-4">
                      {item.title}
                    </h1>

                    <p
                      className="lg:text-lg lg:font-normal font-light text-sm line-clamp-3 mb-4"
                      style={{ color: "#BEC1DD" }}
                    >
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between mb-3">
                      {/* <div className="flex items-center">
                        {item.icons &&
                          item.icons.length > 0 &&
                          item.icons.map((icon, index) => (
                            <div
                              key={index}
                              className="border border-white/[.2] rounded-full bg-black lg:w-9 lg:h-9 w-7 h-7 flex justify-center items-center"
                              style={{
                                transform: `translateX(-${5 * index + 2}px)`,
                              }}
                            >
                              <Image
                                height={70}
                                width={70}
                                src={icon}
                                alt={`icon-${index}`}
                                className="p-2"
                              />
                            </div>
                          ))}
                      </div> */}

                      <div className="flex justify-center items-center">
                        <p className="flex lg:text-xl md:text-lg text-sm text-purple">
                          Check it out...
                        </p>
                        <FaLocationArrow
                          size={25}
                          className="ml-1"
                          color="#CBACF9"
                        />
                      </div>
                    </div>
                    {admin && (
                      <div className=" flex justify-end items-end gap-5 m-5">
                        <FiEdit2
                          size={30}
                          className="text-blue-500 hover:text-blue-800 cursor-pointer"
                          title="Edit"
                          onClick={() => handleEdit(item._id!)}
                        />
                        <FiTrash2
                          size={30}
                          className="text-red-600 hover:text-red-800 cursor-pointer"
                          title="Delete"
                          onClick={() => handleDelete(item._id!)}
                        />
                      </div>
                    )}
                  </ServiceContainer>
                </Link>
              </div>
            );
          })
        )}
      </div>

      {showModal && activeServices && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-auto">
          <div className="bg-white dark:bg-black h-auto p-10 px-12 my-auto rounded-lg w-full max-w-3xl">
            <h2 className="text-xl font-bold mb-4 text-center">
              {mode === "add" ? "Add New" : "Edit"} Service
            </h2>

            <form
              onSubmit={async (e) => {
                e.preventDefault();

                // Check for duplicate ID in current list
                const isDuplicate = services.some((item) => {
                  if (mode === "add") return item.id === activeServices.id;
                  // In edit mode, skip comparing to itself
                  return (
                    item.id === activeServices.id &&
                    item._id !== activeServices._id
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
                      ? `http://localhost:8000/api/${department}/services/add`
                      : `http://localhost:8000/api/${department}/services/${group}/update/${activeServices._id}`;

                  const method = mode === "add" ? "POST" : "PUT";

                  const res = await fetch(url, {
                    method,
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(
                      mode === "add"
                        ? { group, services: [activeServices] }
                        : activeServices
                    ),
                  });

                  if (res.ok) {
                    const result = await res.json();

                    if (mode === "add") {
                      setServices((prev) =>
                        prev ? [...prev, activeServices] : [activeServices]
                      );
                    } else {
                      setServices(
                        (prev) =>
                          prev?.map((item) =>
                            item._id === result._id ? result : item
                          ) ?? null
                      );
                    }

                    setShowModal(false);
                    setActiveServices(null);
                  } else {
                    console.error("Request failed");
                  }
                } catch (err) {
                  console.error("Error:", err);
                }
              }}
            >
              <LabelInputContainer>
                <Label>Group: </Label>
                <Input
                  className="border p-2 w-full mb-3"
                  value={group}
                  disabled
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label>ID: </Label>
                <Input
                  className="border p-2 w-full mb-3"
                  value={activeServices.id}
                  onChange={(e) =>
                    setActiveServices((prev: any) => ({
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
                  value={activeServices.title}
                  onChange={(e) =>
                    setActiveServices((prev) => ({
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
                  value={activeServices.description}
                  onChange={(e) =>
                    setActiveServices((prev) => ({
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
                  value={activeServices.image}
                  onChange={(e) =>
                    setActiveServices((prev) => ({
                      ...prev!,
                      image: e.target.value,
                    }))
                  }
                  placeholder="Image URL"
                />
              </LabelInputContainer>

              <EditableListField
                label="icons"
                values={activeServices.icons}
                onChange={(e) =>
                  setActiveServices((prev) => ({
                    ...prev!,
                    icons: e,
                  }))
                }
              />

              <LabelInputContainer>
                <Label>Link: </Label>
                <Input
                  className="border p-2 w-full mb-3"
                  value={activeServices.link}
                  onChange={(e) =>
                    setActiveServices((prev) => ({
                      ...prev!,
                      link: e.target.value,
                    }))
                  }
                  placeholder="Link"
                />
              </LabelInputContainer>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setActiveServices(null);
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
