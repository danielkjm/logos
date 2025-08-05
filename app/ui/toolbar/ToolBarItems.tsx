import { motion } from "motion/react";
import { useContext } from "react";
import Image from 'next/image';
import { helveticaNeue, ebGaramond } from "../fonts/fonts";
import { ToolBarContext } from "../../context/ToolBarContext";


export default function ToolBarItems({ items, setHeader }: {
  items: { name: string, icon: string }[],
  setHeader: (header: string) => void;
})  {
  const { expanded, setExpanded } = useContext(ToolBarContext)
  
  const handleItemClick = (item: string) => {
    console.log(`Clicked on: ${item}`);
    setHeader(item);
    setExpanded(true);
  };

  return (
    <>
      <motion.div
        className={`${ebGaramond.className} font-bold text-sm text-white`}
        initial={{ opacity: 1 }}
        animate={{ opacity: expanded ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      >
        L
      </motion.div>
      {
        items.map((item) => {
          return (
            <motion.span
              className={`${helveticaNeue.className} text-sm text-white cursor-pointer`}
              onClick={() => handleItemClick(item.name)}
              initial={{ opacity: 1 }}
              animate={{ opacity: expanded ? 0 : 1 }}
              transition={{ duration: 0.2 }}
              key={item.name}
            >
              {
                item.icon.length ? (
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width="18"
                    height="18"
                  />
                ) : (
                  item.name
                )
              }
            </motion.span>
          )
        })
      }
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