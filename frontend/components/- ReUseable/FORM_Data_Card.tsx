import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { FiTrash2, FiCheck, FiCopy } from "react-icons/fi";
import { CWD_Form_Item } from "../Admin/Development_ADMIN/CWD_Form_Data";
import { ED_Form_Item } from "../Admin/Development_ADMIN/ED_Form_Data";

export const PERSONAL_Details_Data = ({ formCard }: any) => {
  return (
    <div>
      <h3 className="text-lg font-serif">Personal Details:</h3>
      <ul className="ml-5 mt-2 pb-5 list-disc list-inside space-y-2 text-sm">
        <li>Name: {formCard.clientName},</li>
        <li>Email: {formCard.email},</li>
        <li>Phone: {formCard.phone},</li>
        <li>Location: {formCard.location}.</li>
      </ul>
    </div>
  );
};

export const BUSINESS_Details_Data = ({ formCard }: any) => {
  return (
    <div>
      <h3 className="text-lg font-serif">Business Details:</h3>
      <ul className="ml-5 mt-2 pb-5 list-disc list-inside space-y-2 text-sm">
        <li>Company Name: {formCard.company},</li>
        <li>Tagline: {formCard.tagline || "N/A"},</li>
        <li>Industry: {formCard.industry},</li>
        <li>Niche: {formCard.niche}.</li>
      </ul>
    </div>
  );
};

export const STYLE_Details_Data = ({ formCard }: any) => {
  return (
    <>
      <li>
        Colors:{" "}
        {formCard.colors?.map((color: string, index: number) => (
          <span key={index}>
            {color}
            {index < formCard.colors.length - 1 ? ", " : ""}
          </span>
        ))}
        ,
      </li>
      <li>Font: {formCard.font},</li>
    </>
  );
};

export const WEBSTE_DETAILS_Data = ({ formCard, category }: any) => {
  return (
    <div>
      <h3 className="text-lg font-serif">Website Details:</h3>
      <ul className="ml-5 mt-2 pb-5 list-disc list-inside space-y-2 text-sm">
        <li>
          Reference Website: {formCard.reference || "No Reference Website"}
        </li>
        <li>Pages: {formCard.pages?.join(", ")}</li>
        {category === "ecommerce" && (
          <>
            <li>Ecommerce Platform: {formCard.ecommercePlatform}</li>
            <li>
              Ecommerce Features: {formCard.ecommerceFeatures?.join(", ")}
            </li>
            <li>
              Ecommerce Payment Options:{" "}
              {formCard.ecommercePaymentOptions?.join(", ")}
            </li>
          </>
        )}
        <li>Colors: {formCard.colors?.join(", ")}</li>
        <li>Font: {formCard.font}</li>
      </ul>
    </div>
  );
};

//#region FORM_Data_Card

type FORM_Data_CardProps =
  | {
      category: "ecommerce";
      formCard: ED_Form_Item;
      isActive: boolean;
      onToggle: () => void;
      onDelete: (id: string) => void;
      onEdit: () => void;
    }
  | {
      category: "custom-website";
      formCard: CWD_Form_Item;
      isActive: boolean;
      onToggle: () => void;
      onDelete: (id: string) => void;
      onEdit: () => void;
    };

export const FORM_Data_Card: React.FC<FORM_Data_CardProps> = ({
  category,
  formCard,
  isActive,
  onToggle,
  onDelete,
  onEdit,
}) => {
  const [copied, setCopied] = useState(false);

  const promptString = `Imagine, you are a professional ecommerce website developer,
  Generate a responsive homepage in HTML5 + TailwindCSS + JavaScript using this different details:

  # Business Details:-
    - Company Name: ${formCard.company},
    - Tagline: ${formCard.tagline || "N/A"},
    - Location: ${formCard.location},
    - Industry: ${formCard.industry},
    - Niche: ${formCard.niche}.

  # Website Details:-
    - Reference Website: ${
      formCard.reference || "No Reference Website, Build on your Own."
    },
    - Pages: ${formCard.pages.join(", ")},
    ${
      category === "ecommerce"
        ? `- eCommerce Platform: ${formCard.ecommercePlatform}
    - Features: ${formCard.ecommerceFeatures.join(", ")}
    - Payment Options: ${formCard.ecommercePaymentOptions.join(", ")}`
        : ""
    }- Colors: ${formCard.colors.join(", ")},
    - Font Style: ${formCard.font}.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(promptString || "");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      onClick={onToggle}
      className="cursor-pointer border-b-4 rounded-2xl px-6 py-4 transition"
    >
      <div className="flex">
        <div className="flex flex-1 items-center justify-start space-x-40">
          <h2 className="ml-6 text-lg text-wrap text-neutral-800 dark:text-neutral-100">
            {formCard.clientName}
          </h2>
        </div>
        <div className="flex flex-1 flex-col items-center text-neutral-800 dark:text-neutral-100">
          <p className="text-lg font-bold">{formCard.company}</p>
          <p className="text-sm mt-1 text-center">{formCard.location}</p>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4 ">
          <FiTrash2
            size={22}
            className="text-red-600 hover:text-red-800 cursor-pointer mr-5 "
            title="Delete"
            onClick={(e) => {
              e.stopPropagation();
              onDelete(formCard._id);
            }}
          />
          <AiOutlineDown
            size={30}
            className={`transition-transform duration-300 ${
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
            <div className="border-t-2 border-neutral-200 dark:border-neutral-700 my-4 max-w-5xl mx-auto" />
            <div className="mx-5 p-5 rounded-2xl border-neutral-200 dark:border-neutral-700 space-y-2 bg-gray-950">
              <PERSONAL_Details_Data formCard={formCard} />
              <BUSINESS_Details_Data formCard={formCard} />
              <WEBSTE_DETAILS_Data formCard={formCard} category={category} />
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-serif">Prompt:</h3>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCopy();
                  }}
                  className="text-sm text-blue-500 hover:text-blue-700 flex items-center space-x-1"
                >
                  {copied ? (
                    <>
                      <FiCheck className="text-green-500" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <FiCopy />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-base text-neutral-300 mt-2 whitespace-pre-wrap">
                {promptString}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
//#endregion
