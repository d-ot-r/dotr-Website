import { useState, useEffect } from "react";
import { FORM_Data_Card } from "../../- ReUseable/FORM_Data_Card";

//#region Extra Stuff
export interface CWD_Form_Item {
  _id: string;
  clientName: string;
  email: string;
  phone: string;
  location: string;
  company: string;
  tagline: string;
  industry: string;
  niche: string;
  reference: string;
  pages: string[];
  colors: string[];
  font: string;
  message: string;
}

export interface CWD_Form_Group {
  category: string;
  details: CWD_Form_Item[];
}

export interface CWD_Form_CardProps {
  formCard: CWD_Form_Item;
  isActive: boolean;
  onToggle: () => void;
  onDelete: (id: string) => void;
  onEdit: () => void;
}
//#endregion

// //#region CWD_Form_Card
// export const CWD_Form_Card: React.FC<CWD_Form_CardProps> = ({
//   formCard,
//   isActive,
//   onToggle,
//   onDelete,
//   onEdit,
// }) => {
//   const [copied, setCopied] = useState(false);

//   const promptString = `Imagine, you are a professional website developer,
//   Generate a responsive homepage in HTML5 + TailwindCSS + JavaScript using this different details:

//   # Business Details:-
//     - Company Name: ${formCard.company},
//     - Tagline: ${formCard.tagline || "N/A"},
//     - Location: ${formCard.location},
//     - Industry: ${formCard.industry},
//     - Niche: ${formCard.niche}.

//   # Website Details:-
//     - Reference Website: ${
//       formCard.reference || "No Reference Website, Build on your Own."
//     },
//     - Pages: ${formCard.pages.join(", ")},
//     - Colors: ${formCard.colors.join(", ")},
//     - Font Style: ${formCard.font}.`;

//   const handleCopy = () => {
//     navigator.clipboard.writeText(promptString || "");
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   return (
//     <div
//       onClick={onToggle}
//       className="cursor-pointer border-b-4 rounded-2xl px-6 py-4 transition"
//     >
//       <div className="flex">
//         <div className="flex flex-1 items-center justify-start space-x-40">
//           <h2 className="ml-6 text-lg text-wrap text-neutral-800 dark:text-neutral-100">
//             {formCard.clientName}
//           </h2>
//         </div>
//         <div className="flex flex-1 flex-col items-center text-neutral-800 dark:text-neutral-100">
//           <p className="text-lg font-bold">{formCard.company}</p>
//           <p className="text-sm mt-1 text-center">{formCard.location}</p>
//         </div>
//         <div className="flex flex-1 items-center justify-end space-x-4 ">
//           {/* <FiEdit2
//             size={20}
//             className="text-blue-500 hover:text-blue-800 cursor-pointer"
//             title="Edit"
//             onClick={(e) => {
//               e.stopPropagation();
//               onEdit();
//             }}
//           /> */}
//           <FiTrash2
//             size={22}
//             className="text-red-600 hover:text-red-800 cursor-pointer mr-5"
//             title="Delete"
//             onClick={(e) => {
//               e.stopPropagation();
//               onDelete(formCard._id);
//             }}
//           />
//           <AiOutlineDown
//             size={30}
//             className={`transition-transform duration-300 ${
//               isActive ? "rotate-180" : ""
//             }`}
//           />
//         </div>
//       </div>

//       <AnimatePresence>
//         {isActive && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//             className="overflow-hidden "
//           >
//             <div className="border-t-2 border-neutral-200 dark:border-neutral-700 my-4 max-w-5xl mx-auto" />
//             <div className="mx-5 p-5 rounded-2xl border-neutral-200 dark:border-neutral-700 space-y-2 bg-gray-950">
//               <h3 className="text-lg font-serif">Personal Details:</h3>
//               <ul className="ml-5 mt-2 pb-5 list-disc list-inside space-y-2 text-sm">
//                 <li>Name: {formCard.clientName},</li>
//                 <li>Email: {formCard.email},</li>
//                 <li>Phone: {formCard.phone},</li>
//                 <li>Location: {formCard.location}.</li>
//               </ul>

//               <h3 className="text-lg font-serif">Business Details:</h3>
//               <ul className="ml-5 mt-2 pb-5 list-disc list-inside space-y-2 text-sm">
//                 <li>Company: {formCard.company},</li>
//                 <li>Tagline: {formCard.tagline || "N/A"},</li>
//                 <li>Industry: {formCard.industry},</li>
//                 <li>Niche: {formCard.niche}.</li>
//               </ul>

//               <h3 className="text-lg font-serif">Website Details:</h3>
//               <ul className="ml-5 pb-5 list-disc list-inside space-y-2 text-sm">
//                 <li>Reference: {formCard.reference || "N/A"},</li>
//                 <li>
//                   Pages:{" "}
//                   {formCard.pages?.map((page, index) => (
//                     <span key={index}>
//                       {page}
//                       {index < formCard.pages.length - 1 ? ", " : ""}
//                     </span>
//                   ))}
//                   ,
//                 </li>
//                 <li>
//                   Colors:{" "}
//                   {formCard.colors?.map((color, index) => (
//                     <span key={index}>
//                       {color}
//                       {index < formCard.colors.length - 1 ? ", " : ""}
//                     </span>
//                   ))}
//                   ,
//                 </li>
//                 <li>Font: {formCard.font},</li>
//                 <li>Message: {formCard.message || "N/A"}.</li>
//               </ul>

//               <div className="flex justify-between items-center">
//                 <h3 className="text-lg font-serif">Prompt:</h3>
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     handleCopy();
//                   }}
//                   className="text-sm text-blue-500 hover:text-blue-700 flex items-center space-x-1"
//                 >
//                   {copied ? (
//                     <>
//                       <FiCheck className="text-green-500" />
//                       <span>Copied</span>
//                     </>
//                   ) : (
//                     <>
//                       <FiCopy />
//                       <span>Copy</span>
//                     </>
//                   )}
//                 </button>
//               </div>
//               <p className="text-base text-neutral-300 mt-2 whitespace-pre-wrap">
//                 {promptString}
//               </p>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };
// //#endregion

//#region CWD_Form_Data
export const CWD_Form_Data: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [formItems, setFormItems] = useState<CWD_Form_Item[]>([]);
  const [editingForm, setEditingForm] = useState<CWD_Form_Item | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const res = await fetch(
          `http://localhost:8000/api/form/custom-website-development/all`
        );
        if (!res.ok) throw new Error("Failed to fetch form data");

        const data = await res.json();

        // console.log(data.data);
        // // Assuming each item has a 'details' object as before
        // const normalized = data.data.map((item: any) => {
        //   const { firstname, lastname, ...rest } = item.details;
        //   return {
        //     ...rest,
        //     firstName: firstname,
        //     lastName: lastname,
        //   };
        // });

        const normalized = data.data.map((item: any): CWD_Form_Item => {
          const d = item.details;
          return {
            _id: item._id, // ✅ Grab _id from root
            clientName: d.clientName,
            email: d.email,
            phone: d.phone,
            company: d.company,
            tagline: d.tagline,
            location: d.location,
            industry: d.industry,
            niche: d.niche,
            reference: d.reference,
            pages: d.pages,
            colors: d.colors,
            font: d.font,
            message: d.message,
          };
        });

        setFormItems(normalized);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchForms();
  }, []);

  const handleToggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleDelete = async (id: string) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this form?"
    );
    if (!confirm) return;

    console.log(id);
    try {
      const res = await fetch(
        `http://localhost:8000/api/form/custom-website-development/delete/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!res.ok) throw new Error("Failed to delete");
      setFormItems((prev) => prev.filter((item) => item._id !== id));
    } catch (err: any) {
      alert(err.message || "Something went wrong while deleting");
    }
  };

  return (
    <section className="mt-10 mb-28 pb-14">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="py-8 text-3xl md:text-5xl font-bold text-center mb-10 text-neutral-900 dark:text-white">
          Custom Website Development FORM Details
        </h2>

        {formItems.length === 0 ? (
          <p className="text-center text-red-500">
            No data available to display...
          </p>
        ) : (
          <div className="grid gap-6">
            {formItems.map((formItem, index) => (
              <FORM_Data_Card
                category="custom-website"
                key={index}
                formCard={formItem}
                isActive={activeIndex === index}
                onToggle={() => handleToggle(index)}
                onDelete={handleDelete} // ✅ pass handler
                onEdit={() => setEditingForm(formItem)}
              />
            ))}
          </div>
        )}
      </div>
      {/* {editingForm && (
        <EditFormModal
          formData={editingForm}
          onClose={() => setEditingForm(null)}
          onSave={(updatedForm) => {
            setFormItems((prev) =>
              prev.map((item) =>
                item._id === updatedForm._id ? updatedForm : item
              )
            );
          }}
        />
      )} */}
    </section>
  );
};
//#endregion
