'use client';
// import { motion } from "motion/react";
// import { useContext } from "react";
import { helveticaNeue } from "../fonts/fonts";
// import { ToolBarContext } from "../../context/ToolBarContext";
// import { desc } from "motion/react-client";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ToolBarCategories({ setCategories } : { setCategories: (categories: any) => void }) {
  // const { expanded, setExpanded } = useContext(ToolBarContext);

  return (
    <div className="flex-col justify-between h-full w-full mt-12">
      <div className={`${helveticaNeue.className} grid grid-cols-8 gap-8 content-center mb-8 font-bold text-sm `}>
        {/* {
          categories.map((category) => (
            <div
              className="cursor-pointer"
              key={category.id}
              onClick={() => setCategories(category.articles)}
            >
              {category.title}
            </div>
          ))
        } */}
      </div>
    </div>
  )
}
