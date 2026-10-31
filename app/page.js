"use client";
import { useState, useEffect } from "react";
import History from "./components/History";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import PromptPanel from "./components/PromptPanel";
import Gallery from "./components/Gallery";

const historyImages = [
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=200",
  "https://images.unsplash.com/photo-1511497584788-876760111969?w=200",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=200",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=200",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200",
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=200",
  "https://images.unsplash.com/photo-1624026739539-66b84efc5e64?w=200",
  "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=200&h=800&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=200",
  "https://images.unsplash.com/photo-1511497584788-876760111969?w=200",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=200",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=200",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200",
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=200",
];

export default function Home() {
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [imageCount, setImageCount] = useState("8");
  const [prompt, setPrompt] = useState("");
  const [generationMode, setGenerationMode] = useState("image");
  const [aspectRatio, setAspectRatio] = useState("1:1");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationError, setGenerationError] = useState("");

  const [theme, setTheme] = useState("light");
  const [themeReady, setThemeReady] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("fomi-theme") || "light";

    setTheme(savedTheme);
    document.documentElement.dataset.theme = savedTheme;
    setThemeReady(true);
  }, []);

  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
    localStorage.setItem("fomi-theme", newTheme);
    document.documentElement.dataset.theme = newTheme;
  }

  async function handleGenerate() {
    const cleanPrompt = prompt.trim();
    setGenerationError("");

    if (!cleanPrompt) return;

    setIsGenerating(true);

    try {
      const response = await fetch(
        generationMode === "image" ? "/api/generate" : "/api/generate-video",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: cleanPrompt,
            aspectRatio,
            imageCount,
            videoCount: Math.min(Number(imageCount), 4),
          }),
        });

      if (!response.ok) {
        throw new Error(
          generationMode === "image"
            ? "Failed to generate images"
            : "Failed to generate video"
        );
      }

      const data = await response.json();

      if (
        !data.success ||
        (generationMode === "image" && !Array.isArray(data.images)) ||
        (generationMode === "video" && !Array.isArray(data.videos))
      ) {
        throw new Error("Invalid response from server");
      }

      if (generationMode === "image") {
        setImages(data.images);
      } else {
        setVideos(data.videos);
      }

    } catch (error) {
      console.error("Generation failed:", error);
      setGenerationError(error.message);
    } finally {
      setIsGenerating(false);
    }
  }

  return (
    <div
      className={`min-h-screen p-0 transition-colors duration-300 ${theme === "dark"
          ? "bg-[#101014] text-white"
          : "bg-[#FAF7F4] text-stone-900"
        }`}
    >

      <Header theme={theme} toggleTheme={toggleTheme} />


      <History historyImages={historyImages} theme={theme} />


      <div className={`grid min-h-[calc(100vh-116px)] grid-cols-1 transition-colors duration-300 md:grid-cols-[240px_220px_minmax(0,1fr)] ${theme === "dark" ? "bg-[#18181D]" : "bg-[#FAF7F4]"
        }`}>

        <Sidebar
          theme={theme}
          prompt={prompt}
          setPrompt={setPrompt}
          generationError={generationError}
          handleGenerate={handleGenerate}
          isGenerating={isGenerating}
          imageCount={imageCount}
          setImageCount={setImageCount}
          aspectRatio={aspectRatio}
          setAspectRatio={setAspectRatio}
          generationMode={generationMode}
          setGenerationMode={setGenerationMode}
        />

        <PromptPanel
          theme={theme}
          images={images}
          videos={videos}
          generationMode={generationMode}
        />

        <Gallery
          theme={theme}
          images={images}
          videos={videos}
          aspectRatio={aspectRatio}
          generationMode={generationMode}
        />
      </div>

    </div>
  );
}
