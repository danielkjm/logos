"use client"

import { motion } from "motion/react";

export default function ToolBarWrap({ expanded, children }: {
  expanded: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center">
      <motion.div
        className="rounded-sm flex items-center fixed bottom-12 justify-between px-8"
        initial={{ width: "40%", height: "5rem", backgroundColor: "rgba(37, 37, 37, 0.9)" }}
        animate={{ width: expanded ? "85%" : "50%", height: expanded ? "80%" : "5rem", backgroundColor: expanded ? "rgba(37, 37, 37, 1)" : "rgba(37, 37, 37, 0.9)" }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      >
        { children }
      </motion.div>
    </div>
  );
}