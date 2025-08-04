'use client';
import { motion } from "motion/react";
import { useContext } from "react";
import { ToolBarContext } from "../../context/ToolBarContext";

export default function ToolBarContent({ header } : { header: string }) {
  const { expanded, setExpanded } = useContext(ToolBarContext);

  return (
    <div className="flex-col justify-between h-full w-full p-12">
      <div className="flex justify-between items-center">
        <motion.h3
          className="text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: expanded ? 1 : 0 }}
        >
          {header}
        </motion.h3>
        <div onClick={() => setExpanded(false)} className="cursor-pointer">
          <motion.span
            className="absolute w-4.5 h-0.5 bg-white"
            initial={{ rotate: 0 }}
            animate={{ rotate: expanded ? 45 : 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          />
          <motion.span
            className="absolute w-4.5 h-0.5 bg-white"
            initial={{ rotate: 0 }}
            animate={{ rotate: expanded ? -45 : 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          />
        </div>
      </div>
      <div className="text-white">
        {/* ------- */}
      </div>
    </div>
  )
}