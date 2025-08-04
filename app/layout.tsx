"use client"

import type { Metadata } from "next";
import { ebGaramond, helveticaNeue } from "./ui/fonts/fonts";
import "./globals.css";
import { useState, createContext } from 'react';
import Nav from "./ui/nav";
import Toolbar from "./ui/toolbar";

export const ToolbarContext = createContext<{
  expanded: boolean;
  setExpanded: (value: boolean) => void;
}>({
  expanded: false,
  setExpanded: () => {},
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <html lang="en">
      <body
        className={`${ebGaramond.variable} ${helveticaNeue} antialiased`}
      >
        <Nav />
        <ToolbarContext.Provider value={{ expanded, setExpanded }}>
          {children}
        </ToolbarContext.Provider>
        <div className="flex justify-center ">
          <Toolbar
            expanded={expanded}
            setExpanded={setExpanded}
          />
        </div>
      </body>
    </html>
  );
}
