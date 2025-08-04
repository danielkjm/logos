"use client"

import { ebGaramond, helveticaNeue } from "./ui/fonts/fonts";
import "./globals.css";
import { useState } from 'react';
import { ToolBarContext } from "./context/ToolBarContext";
import Nav from "./ui/Nav";

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
        <ToolBarContext.Provider value={{ expanded, setExpanded }}>
          <Nav />
          {children}
        </ToolBarContext.Provider>
      </body>
    </html>
  );
}
