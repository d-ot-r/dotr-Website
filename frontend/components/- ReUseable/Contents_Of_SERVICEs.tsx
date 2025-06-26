import { IconPencil } from "@tabler/icons-react";
import { Background_Gradient } from "../ui/Background_Gradient";
import { OFFERINGs_CardProps } from "./OFFERINGs";
import Link from "next/link";

export const contents = [
  {
    id: 1,
    title: "HERO",
    tagline: "A Heading in each Service page...",
  },
  {
    id: 2,
    title: "IMPORTANCE",
    tagline:
      "A Section which give the reason to get that Service in their Business...",
  },
  {
    id: 3,
    title: "OFFERINGs",
    tagline: "Different Services/Offerings inside Sub-Services... ",
  },

  {
    id: 4,
    title: "Why-DOTR",
    tagline: "Fresh look, same essence.",
  },

  {
    id: 5,
    title: "FAQs",
    tagline: "Everything you need in one zip.",
  },

  {
    id: 6,
    title: "FORMs",
    tagline: "More than a logo. A whole vibe.",
  },
];

//#region OFFERINGs_Card
export function CONTENTs_Card({ title, link }: OFFERINGs_CardProps) {
  return (
    <Background_Gradient className="rounded-lg max-w-sm w-full p-4 sm:p-8 bg-white dark:bg-zinc-900 hover:scale-[1.03] transition-transform duration-300">
      <Link href={link || "#"}>
        <div className="flex items-center justify-center h-20 w-40">
          <h3 className="text-2xl font-semibold text-black dark:text-white">
            {title}
          </h3>
        </div>
      </Link>
    </Background_Gradient>
  );
}
//#endregion

export const CONTENTs = ({
  department,
  category,
}: {
  department: string;
  category: string;
}) => {
  return (
    <section id={`contents`} className="p-20 ">
      <h1 className="text-center text-5xl font-bold mb-24">
        Which Content{" "}
        <span className="text-purple">
          <i>dotr</i>
        </span>{" "}
        offer&apos;s in{" "}
        <span className="text-purple">
          {category.split("-").join(" ").toUpperCase()}?
        </span>
      </h1>

      {!contents.length ? (
        <p className="text-center text-red-500">
          No Content of this Service found...
        </p>
      ) : (
        <div className="flex flex-wrap gap-20 items-center justify-center mb-40 mx-auto">
          {contents
            .sort((a, b) => a.id - b.id)
            .map((content) => {
              return (
                <CONTENTs_Card
                  key={content.id}
                  title={content.title}
                  icon={IconPencil}
                  link={`/admin/${department}/${category}/${content.title.toLowerCase()}`}
                />
              );
            })}
        </div>
      )}
    </section>
  );
};
