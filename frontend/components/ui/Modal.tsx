"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";

const Modal = ({
  image,
  title,
  description,
  onClose,
}: {
  image: string;
  title: string;
  description: string;
  onClose: () => void;
}) => {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="relative p-5 bg-gray-900 rounded-lg shadow-lg max-w-3xl w-full flex flex-col md:flex-row items-center"
        onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking inside
      >
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-white text-2xl cursor-pointer hover:scale-110 transition-transform duration-200"
          onClick={onClose}
        >
          ✖
        </button>

        {/* Image Section */}
        <div className="md:w-1/2 w-full p-2">
          <Image
            src={image}
            alt="Project Image"
            width={900}
            height={900}
            className="rounded-lg w-full h-auto object-cover"
            loading="lazy"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 w-full p-4 text-white">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">{title}</h2>
          <p className="text-sm md:text-base opacity-75">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
