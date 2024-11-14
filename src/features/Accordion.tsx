"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { ACCORDION_ITEM } from "../../types";

export default function Accordion({ items }: { items: ACCORDION_ITEM[] }) {
  const [expand, setExpand] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <AccordionItem
          title={item.title}
          content={item.content}
          index={index}
          expand={expand}
          setExpand={setExpand}
          key={index}
        />
      ))}
    </div>
  );
}

const AccordionItem = ({
  title,
  content,
  index,
  expand,
  setExpand,
}: {
  title: string;
  content: React.ReactNode;
  index: number;
  expand: number | null;
  setExpand: Dispatch<SetStateAction<number | null>>;
}) => {
  return (
    <div className="">
      <div
        onClick={() => setExpand((curr) => (curr === index ? null : index))}
        className="bg-sky-700 flex items-center gap-4 py-2 px-4 rounded-md"
      >
        {expand === index ? <FaMinus size={20} /> : <FaPlus size={20} />}
        <p>{title}</p>
      </div>
      <div
        className={
          (expand === index
            ? "h-32 p-4 border-[1px] border-zinc-200 rounded-md"
            : "-translate-y-4 h-0 invisible opacity-0 ") +
          " transition-all duration-300 text-zinc-700"
        }
      >
        {content}
      </div>
    </div>
  );
};
