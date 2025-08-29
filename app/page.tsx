'use client'

import Image from "next/image";
import { useContext, useState } from "react";
import { ToolBarContext } from "./context/ToolBarContext";
import { ToolBarWrap, ToolBarItems, ToolBarContent, ToolBarCategories } from "./ui/toolbar";

const browseArticles = [
  {
    id: 1,
    title: "Timeless Lines: The Enduring Influence of Mid-Century Modern Design",
    description: "A deep dive into React's architecture and features.",
    category: "Interior Design",
    imageUrl: "/pottery-4.png",
    width: 600,
  },
    {
    id: 2,
    title: "The Story on the Street",
    description: "Exploring the latest features in JavaScript ES2023.",
    category: "Photography",
    imageUrl: "/grandma-4.png",
    width: 450,
  },

    {
    id: 3,
    title: "Savoring the Seasons: A Culinary Journey Through Seasonal Ingredients",
    description: "Exploring the latest features in JavaScript ES2023.",
    category: "Gastronomy",
    imageUrl: "/ongi.png",
    width: 450,
  },
    {
    id: 4,
    title: "AI Predictions",
    description: "Getting started with Next.js and its powerful features.",
    category: "Technology",
    imageUrl: "/fruit-4.png",
    width: 600,
  },
]

export default function Browse() {
  const { expanded, setExpanded } = useContext(ToolBarContext);
  const [header, setHeader] = useState('');
  const [categories, setCategories] = useState([]);


  return (
    <>
      <div className="flex flex-col p-16 w-full justify-between" onClick={() => setExpanded(false)}>
        <div className="flex justify-between pl-20 font-bold mb-16">
          <h1 className="text-7xl">BROWSE</h1>
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
      <ToolBarWrap
        expanded={expanded}
      >
        {
          expanded ? (
            <ToolBarContent header={header}>
              <ToolBarCategories setCategories={setCategories} />
            </ToolBarContent>
          ) : (
            <ToolBarItems
              items={[
                { name: "Categories", icon: "" },
                { name: "Chat", icon: "/convo.png" },
                { name: "Shelf", icon: "/shelf.png" },
              ]}
              setHeader={setHeader}
            />
          )
        }
      </ToolBarWrap>
    </>
  );
}
