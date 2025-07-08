"use client";

import { useState } from "react";

const quotes = [
  {
    id: 1,
    quote: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    id: 2,
    quote: "Don’t let yesterday take up too much of today.",
    author: "Will Rogers",
  },
  {
    id: 3,
    quote: "It’s not whether you get knocked down, it’s whether you get up.",
    author: "Vince Lombardi",
  },
];

export default function QuoteGenerator() {
  const [topic, setTopic] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setResult(`"${randomQuote.quote}" — ${randomQuote.author}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="w-full max-w-md space-y-6 border border-gray-700 p-8 rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-semibold tracking-tight text-center">
          Quote Generator
        </h1>
        <p className="text-sm text-center text-gray-400">
          Enter a topic to fetch a quote
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
        <input
            id="topic"
            type="text"
            autoComplete="off"
            placeholder="e.g. motivation"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full bg-transparent border border-gray-600 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-500"
        />

          <button
            type="submit"
            className="w-full bg-white text-black py-2 rounded-md hover:opacity-90 transition"
          >
            Get Quote
          </button>
        </form>
        {result && (
          <div className="text-center border-t border-gray-700 pt-4 text-lg text-gray-100">
            {result}
          </div>
        )}
      </div>
    </div>
  );
}
