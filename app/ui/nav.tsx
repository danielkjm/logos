import Link from "next/link";
import Image from "next/image";
import { ToolBarContext } from "../context/ToolBarContext";
import { ebGaramond, helveticaNeue } from "./fonts/fonts";
import { useContext } from 'react'

export default function Nav() {
  const { setExpanded } = useContext(ToolBarContext)
  return (
    <div
      className="flex justify-between items-center w-full h-24 sticky top-0 px-32 bg-white"
      onClick={() => setExpanded(false)}
    >
      <Link href="/" className={`${ebGaramond.className} font-bold`}>
        LOGOS
      </Link>
      <div className="flex gap-14">
        <Link href="/" className={`${helveticaNeue.className} text-xs`}>
          BROWSE
        </Link>
        <Link href="/today"  className={`${helveticaNeue.className} text-xs`}>
          TODAY
        </Link>
      </div>
      <div className={`flex items-center ${helveticaNeue.className} text-xs font-normal gap-4`}>
        <Link href="/profile">
          <Image
            src="/profile.png"
            alt="Profile"
            width="40"
            height="40"
            className="rounded-full"
          />
        </Link>
      </div>
    </div>
  );
}