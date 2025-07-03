'use client'

import Image from "next/image";
// import { useState, useEffect } from "react";

const browseArticles = [
  {
    id: 1,
    title: "Understanding React",
    description: "A deep dive into React's architecture and features.",
    imageUrl: "/pottery-4.png",
    width: 600,
  },
    {
    id: 2,
    title: "JavaScript ES2023 Features",
    description: "Exploring the latest features in JavaScript ES2023.",
    imageUrl: "/grandma-4.png",
    width: 450,
  },

    {
    id: 3,
    title: "JavaScript ES2023 Features",
    description: "Exploring the latest features in JavaScript ES2023.",
    imageUrl: "/ongi.png",
    width: 450,
  },
    {
    id: 4,
    title: "Next.js for Beginners",
    description: "Getting started with Next.js and its powerful features.",
    imageUrl: "/fruit-4.png",
    width: 600,
  },
]

export default function Home() {
  return (
    <div className="flex flex-col p-16 w-full justify-between">
      <div className="flex justify-between pl-20 font-bold mb-16">
        <h1 className="text-8xl">CULTURE</h1>
      </div>
      <div className="grid grid-cols-2 gap-x-6 gap-y-32">
        {
          browseArticles.map((article) => {
            return (
              <div className={`flex flex-col ${article.title.length % 2 !== 0 ? 'pt-4' : ''}`}  key={article.id}>
                <div className="w-full flex flex-col items-center">
                  <div>
                    <Image 
                      src={`${article.imageUrl}`}
                      width={article.width}
                      height={100}
                      alt="Article Image"
                      style={{ maxHeight: "400px" }}
                    />
                    <h3 className="mt-4 text-base font-normal">
                      {article.title}
                    </h3>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}
