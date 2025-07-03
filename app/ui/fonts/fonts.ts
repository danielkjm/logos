import { EB_Garamond } from "next/font/google";
import localFont from "next/font/local";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"]
});

export const helveticaNeue = localFont({
  src: [
    { path: "./HelveticaNeue-Medium.woff2", weight: "400", style: "normal" },
  ]
});