import Link from "next/link";
import Image from "next/image";
import { ebGaramond, helveticaNeue } from "./fonts/fonts";

export default function Nav() {
  return (
    <div className="flex justify-between items-center w-full h-24 sticky top-0 px-32 bg-white">
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
  );
}