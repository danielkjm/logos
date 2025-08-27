'use client';
import { motion } from "motion/react";
import { useContext } from "react";
import { helveticaNeue, ebGaramond } from "../fonts/fonts";
import { ToolBarContext } from "../../context/ToolBarContext";
import { desc } from "motion/react-client";

const categories = [
  {
    id: 1,
    title: "Interior Design",
    description: "Latest trends and insights in technology.",
    articles: [
      {
        id: 1.1,
        title: "Timeless Lines: The Enduring Influence of Mid-Century Modern Design",
        description: "A deep dive into React's architecture and features.",
        imageUrl: "/pottery-4.png",
        width: 600,
      },
      {
        id: 1.2,
        title: "Reducing Clutter: Embracing Minimalism in Interior Spaces",
        description: "Exploring the latest features in JavaScript ES2023.",
        imageUrl: "/grandma-4.png",
        width: 450,
      },
    ]
  },
  {
    id: 2,
    title: "Photography",
    description: "Tips and advice for a healthy lifestyle.",
    articles: [
      {
        id: 2.1,
        title: "Earth's Portraits: Capturing the Beauty of Landscapes",
        description: "Exploring the latest features in JavaScript ES2023.",
        imageUrl: "/ongi.png",
        width: 450,
      },
      {
        id: 2.2,
        title: "The Story on the Street",
        description: "Getting started with Next.js and its powerful features.",
        imageUrl: "/fruit-4.png",
        width: 600,
      },
    ]
  },
  {
    id: 3,
    title: "Gastronomy",
    description: "Explore the world with our travel guides.",
    articles: [
      {
        id: 3.1,
        title: "Savoring the Seasons: A Culinary Journey Through Seasonal Ingredients",
        description: "A deep dive into React's architecture and features.",
        imageUrl: "/pottery-4.png",
        width: 600,
      },
      {
        id: 3.2,
        title: "The Art of Plating: Elevating Culinary Presentation to a Visual Feast",
        description: "Exploring the latest features in JavaScript ES2023.",
        imageUrl: "/grandma-4.png",
        width: 450,
      },
    ]
  },
  {
    id: 4,
    title: "Finance",
    description: "Manage your money and investments wisely.",
    articles: [
      {
        id: 4.1,
        title: "Blockchain Beyond Bitcoin: Exploring the Diverse Applications of Distributed Ledger Technology",
        description: "Exploring the latest features in JavaScript ES2023.",
        imageUrl: "/ongi.png",
        width: 450,
      },
      {
        id: 4.2,
        title: "How banks are adapting to the digital age",
        description: "Getting started with Next.js and its powerful features.",
        imageUrl: "/fruit-4.png",
        width: 600,
      },
    ]
  },
  {
    id: 5,
    title: "Technology",
    description: "Latest trends and insights in technology.",
    articles: [
      {
        id: 5.1,
        title: "AI Predictions",
        description: "A deep dive into React's architecture and features.",
        imageUrl: "/pottery-4.png",
        width: 600,
      },
      {
        id: 5.2,
        title: "The Rise of Quantum Computing: Revolutionizing Technology as We Know It",
        description: "Exploring the latest features in JavaScript ES2023.",
        imageUrl: "/grandma-4.png",
        width: 450,
      },
    ]
  },
  {
    id: 6,
    title: "Travel",
    description: "Explore the world with our travel guides.",
    articles: [
      {
        id: 6.1,
        title: "Wanderlust Chronicles: Unveiling Hidden Gems Around the Globe",
        description: "A deep dive into React's architecture and features.",
        imageUrl: "/ongi.png",
        width: 450,
      },
      {
        id: 6.2,
        title: "Sustainable Travel: Exploring the World Responsibly",
        description: "Exploring the latest features in JavaScript ES2023.",
        imageUrl: "/fruit-4.png",
        width: 600,
      },
    ]
  },
  {
    id: 7,
    title: "Mythology",
    description: "Exploring myths and legends from around the world.",
    articles: [
      {
        id: 7.1,
        title: "Gods and Mortals: Unraveling the Tales of Ancient Mythology",
        description: "Exploring the latest features in JavaScript ES2023.",
        imageUrl: "/ongi.png",
        width: 450,
      },
      {
        id: 7.2,
        title: "Mythological Creatures: Legends of Beasts and Beings from Folklore",
        description: "Getting started with Next.js and its powerful features.",
        imageUrl: "/fruit-4.png",
        width: 600,
      },
    ]
  },
  {
    id: 8,
    title: "Lifestyle",
    description: "Tips and advice for a healthy lifestyle.",
    articles: [
      {
        id: 8.1,
        title: "The Art of Hygge: Embracing Coziness in Everyday Life",
        description: "Exploring the latest features in JavaScript ES2023.",
        imageUrl: "/ongi.png",
        width: 450,
      },
      {
        id: 8.2,
        title: "Minimalist Living: Simplifying Your Life for Greater Happiness",
        description: "Getting started with Next.js and its powerful features.",
        imageUrl: "/fruit-4.png",
        width: 600,
      },
    ]
  },
  {
    id: 9,
    title: "Education",
    description: "Resources and tips for effective learning.",
    articles: [
      {
        id: 9.1,
        title: "The Future of Learning: Embracing Technology in Education",
        description: "Exploring the latest features in JavaScript ES2023.",
        imageUrl: "/ongi.png",
        width: 450,
      },
      {
        id: 9.2,
        title: "Lifelong Learning: Cultivating a Growth Mindset for Personal and Professional Development",
        description: "Getting started with Next.js and its powerful features.",
        imageUrl: "/fruit-4.png",
        width: 600,
      },
    ]
  },
  {
    id: 10,
    title: "Entertainment",
    description: "Latest news and reviews in the entertainment world.",
    articles: [
      {
        id: 10.1,
        title: "The Evolution of Streaming: How Digital Platforms are Changing Entertainment Consumption",
        description: "Exploring the latest features in JavaScript ES2023.",
        imageUrl: "/ongi.png",
        width: 450,
      },
      {
        id: 10.2,
        title: "Behind the Scenes: The Art and Craft of Filmmaking",
        description: "Getting started with Next.js and its powerful features.",
        imageUrl: "/fruit-4.png",
        width: 600,
      },
    ]
  },
  {
    id: 11,
    title: "Sports",
    description: "Updates and analysis on various sports.",
    articles: [
      {
        id: 11.1,
        title: "The Rise of Esports: Exploring the Competitive World of Gaming",
        description: "Exploring the latest features in JavaScript ES2023.",
        imageUrl: "/ongi.png",
        width: 450,
      },
      {
        id: 11.2,
        title: "Sports Analytics: How Data is Transforming Athletic Performance and Strategy",
        description: "Getting started with Next.js and its powerful features.",
        imageUrl: "/fruit-4.png",
        width: 600,
      },
    ]
  },
  {
    id: 12,
    title: "Fashion",
    description: "Trends and tips in the fashion industry.",
    articles: [
      {
        id: 12.1,
        title: "Sustainable Fashion: Embracing Eco-Friendly Trends for a Greener Wardrobe",
        description: "Exploring the latest features in JavaScript ES2023.",
        imageUrl: "/ongi.png",
        width: 450,
      },
      {
        id: 12.2,
        title: "The Evolution of Street Style: From Subculture to High Fashion",
        description: "Getting started with Next.js and its powerful features.",
        imageUrl: "/fruit-4.png",
        width: 600,
      },
    ]
  },
  {
    id: 13,
    title: "Science",
    description: "Discoveries and insights in the world of science.",
    articles: [
      {
        id: 13.1,
        title: "Exploring the Cosmos: The Latest Discoveries in Astronomy and Space Exploration",
        description: "Exploring the latest features in JavaScript ES2023.",
        imageUrl: "/ongi.png",
        width: 450,
      },
      {
        id: 13.2,
        title: "The Human Microbiome: Unraveling the Complex World of Microorganisms Within Us",
        description: "Getting started with Next.js and its powerful features.",
        imageUrl: "/fruit-4.png",
        width: 600,
      },
    ]
  },
  {
    id: 14,
    title: "Automotive",
    description: "News and reviews on cars and the automotive industry.",
    articles: [
      {
        id: 14.1,
        title: "The Future of Electric Vehicles: Innovations and Challenges in the Automotive Industry",
        description: "Exploring the latest features in JavaScript ES2023.",
        imageUrl: "/ongi.png",
        width: 450,
      },
      {
        id: 14.2,
        title: "Autonomous Driving: The Road to Self-Driving Cars and Their Impact on Society",
        description: "Getting started with Next.js and its powerful features.",
        imageUrl: "/fruit-4.png",
        width: 600,
      },
    ]
  },
  {
    id: 16,
    title: "History",
    description: "Exploring significant events and figures from the past.",
    articles: [
      {
        id: 16.1,
        title: "Ancient Civilizations: Unveiling the Mysteries of the Past",
        description: "Exploring the latest features in JavaScript ES2023.",
        imageUrl: "/ongi.png",
        width: 450,
      },
      {
        id: 16.2,
        title: "The Renaissance Era: A Cultural Rebirth That Shaped the Modern World",
        description: "Getting started with Next.js and its powerful features.",
        imageUrl: "/fruit-4.png",
        width: 600,
      },
    ]
  },
  {
    id: 17,
    title: "Art & Culture",
    description: "Insights and trends in the art world.",
    articles: [
      {
        id: 17.1,
        title: "The Evolution of Street Art: From Vandalism to Gallery Walls",
        description: "Exploring the latest features in JavaScript ES2023.",
        imageUrl: "/ongi.png",
        width: 450,
      },
      {
        id: 17.2,
        title: "Cultural Festivals Around the World: Celebrating Diversity and Tradition",
        description: "Getting started with Next.js and its powerful features.",
        imageUrl: "/fruit-4.png",
        width: 600,
      },
    ]
  }
];

export default function ToolBarCategories({ setCategories } : { setCategories: (categories: any) => void }) {
  const { expanded, setExpanded } = useContext(ToolBarContext);

  return (
    <div className="flex-col justify-between h-full w-full mt-12">
      <div className={`${helveticaNeue.className} grid grid-cols-8 gap-8 content-center mb-8 font-bold text-sm `}>
        {
          categories.map((category) => (
            <div
              className="cursor-pointer"
              key={category.id}
              onClick={() => setCategories(category.articles)}
            >
              {category.title}
            </div>
          ))
        }
      </div>
    </div>
  )
}
