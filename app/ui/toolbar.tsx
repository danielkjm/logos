"use client"

import Image from "next/image";
import { ebGaramond, helveticaNeue } from "./fonts/fonts";
import { motion } from "motion/react";

export default function Toolbar({expanded, setExpanded}: {expanded: boolean, setExpanded: (value: boolean) => void}) {
  return (
    <motion.div
      className="rounded-sm flex items-center fixed bottom-12 justify-between px-8"
      initial={{ width: "40%", height: "5rem", backgroundColor: "rgba(37, 37, 37, 0.8)" }}
      animate={{ width: expanded ? "85%" : "50%", height: expanded ? "80%" : "5rem", backgroundColor: "rgba(37, 37, 37, 1)" }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      {
        expanded ? (
          <div className="flex-col justify-between h-full w-full p-8">
            <div className="flex justify-between items-center">
              <motion.h3
                className="text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: expanded ? 1 : 0 }}
              >
                Categories
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
        ) : (
          <>
            <motion.div
              className={`${ebGaramond.className} font-bold text-sm text-white`}
              initial={{ opacity: 1 }}
              animate={{ opacity: expanded ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            >
              L
            </motion.div>
            <motion.span
              className={`${helveticaNeue.className} text-sm text-white cursor-pointer`}
              onClick={() => setExpanded(true)}
              initial={{ opacity: 1 }}
              animate={{ opacity: expanded ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            >
              Categories
            </motion.span>
            <motion.span
              className={`${helveticaNeue.className} text-sm text-white`}
              initial={{ opacity: 1 }}
              animate={{ opacity: expanded ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            >
              Media
            </motion.span>
            <motion.div
              className="flex justify-center p-5 bg-black rounded-sm"
              initial={{ opacity: 1 }}
              animate={{ opacity: expanded ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/ai.png"
                alt="Chat"
                width="18"
                height="18"
              />
            </motion.div>
          </>
        )
      }
    </motion.div>
  );
}