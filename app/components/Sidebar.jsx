export default function Sidebar({
  theme,
  prompt,
  setPrompt,
  generationError,
  handleGenerate,
  isGenerating,
  imageCount,
  setImageCount,
  aspectRatio,
  setAspectRatio,
  generationMode,
  setGenerationMode,
}) {
  return (
    <aside className={`mx-3 mt-2 min-h-[500px] self-start rounded-xl border px-3 py-4 transition-colors duration-300 ${theme === "dark"
      ? "border-stone-700 bg-[#29272B]"
      : "border-[#F1DED3] bg-[#F9D9CA]"
      }`}>
      <div className={`mb-4 flex rounded-full p-1 transition-colors duration-300 ${theme === "dark" ? "bg-[#1E1D22]" : "bg-white"
        }`}>
        <button
          type="button"
          aria-pressed={generationMode === "image"}
          onClick={() => setGenerationMode("image")}
          className={`flex-1 rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-200 ease-in-out hover:bg-[#F9D9CA] hover:text-stone-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D98B70] ${generationMode === "image"
            ? "bg-[#F9D9CA] text-stone-700"
            : "text-stone-500"
            }`}
        >
          Image
        </button>

        <button
          type="button"
          aria-pressed={generationMode === "video"}
          onClick={() => {
            setGenerationMode("video");
          }}
          className={`flex-1 rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-200 ease-in-out hover:bg-[#F9D9CA] hover:text-stone-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D98B70] ${generationMode === "video"
            ? "bg-[#F9D9CA] text-stone-700"
            : "text-stone-500"
            }`}
        >
          Video
        </button>
      </div>

      <div className="relative">

        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          id="image-prompt"
          placeholder="Describe what you want to create..."
          aria-label="Describe your creation"
          className={`min-h-36 w-full resize-none rounded-2xl border p-3 pb-14 text-xs outline-none transition-colors duration-300 ${theme === "dark"
            ? "border-stone-600 bg-[#1E1D22] text-white placeholder:text-stone-500 focus:border-[#D98B70]"
            : "border-stone-400 bg-white text-stone-800 placeholder:text-stone-400 focus:border-orange-300"
            }`}
        />

        {generationError && (
          <p className="mt-2 text-sm text-red-600" role="alert">
            {generationError}
          </p>
        )}

        <button
          type="button"
          onClick={handleGenerate}
          disabled={!prompt.trim() || isGenerating}
          className="absolute bottom-3 right-3 rounded-full bg-[#E8A58A] px-4 py-2 text-xs font-semibold text-white transition-all duration-150 hover:bg-[#D99579] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D98B70] focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 active:scale-95"
          aria-busy={isGenerating}
        >
          {isGenerating ? "Generating..." : "✦ Generate"}
        </button>
      </div>

      <div className="mt-3 flex w-full min-w-0 items-center gap-2">
        <select
          className={`w-[100px] shrink-0 flex-[1.2] min-w-0 rounded-lg border px-2 py-1.5 text-xs transition-colors duration-300 ${theme === "dark"
            ? "border-stone-600 bg-[#1E1D22] text-white"
            : "border-stone-200 bg-white text-stone-700"
            } hover:border-[#D98B70] focus:border-[#D98B70] focus:outline-none focus:ring-2 focus:ring-[#D98B70]/30`}
          aria-label="Number of images or videos to generate"
          value={imageCount}
          onChange={(e) => setImageCount(e.target.value)}
        >
          <option value="1">
            {generationMode === "image" ? "#Images: 1" : "#Videos: 1"}
          </option>
          <option value="2">#Images: 2</option>
          <option value="3">#Images: 3</option>
          <option value="4">#Images: 4</option>
          <option value="5">#Images: 5</option>
          <option value="6">#Images: 6</option>
          <option value="7">#Images: 7</option>
          <option value="8">#Images: 8</option>
        </select>

        <select
          value={aspectRatio}
          onChange={(e) => setAspectRatio(e.target.value)}
          className={`w-[64px] shrink-0 flex-[0.7] min-w-0 rounded-lg border px-2 py-1.5 text-xs transition-colors duration-300 ${theme === "dark"
            ? "border-stone-600 bg-[#1E1D22] text-white"
            : "border-stone-200 bg-white text-stone-700"
            } hover:border-[#D98B70] focus:border-[#D98B70] focus:outline-none focus:ring-2 focus:ring-[#D98B70]/30`}
          aria-label="Select aspect ratio"
        >
          <option value="1:1">1:1</option>
          <option value="4:5">4:5</option>
          <option value="16:9">16:9</option>
          <option value="9:16">9:16</option>
        </select>

        <select
          defaultValue="Name"
          className={`min-w-0 flex-[1.6] rounded-lg border px-2 py-1.5 text-xs transition-colors duration-300 ${theme === "dark"
            ? "border-stone-600 bg-[#1E1D22] text-white"
            : "border-stone-200 bg-white text-stone-700"
            } hover:border-[#D98B70] focus:border-[#D98B70] focus:outline-none focus:ring-2 focus:ring-[#D98B70]/30`}
          aria-label="Select generation model"
        >
          <option value="Name">Model: Name</option>
          <option value="Model 2">Model: Model 2</option>
          <option value="Model 3">Model: Model 3</option>
        </select>
      </div>

      <select
        defaultValue="Advance"
        className={`mt-5 w-full appearance-none rounded-2xl border px-3 py-2 text-xs transition-colors duration-300 ${theme === "dark"
            ? "border-stone-600 bg-[#1E1D22] text-white"
            : "border-stone-200 bg-white text-stone-700"
          } hover:border-[#D98B70] focus:border-[#D98B70] focus:outline-none focus:ring-2 focus:ring-[#D98B70]/30`}
        aria-label="Advanced generation settings"
      >
        <option value="Advance">Advance</option>

      </select>


      <select
        defaultValue="Style"
        className={`mt-4 w-full rounded-2xl border px-3 py-2 text-xs transition-colors duration-300 ${theme === "dark"
            ? "border-stone-600 bg-[#1E1D22] text-white"
            : "border-stone-200 bg-white text-stone-700"
          } hover:border-[#D98B70] focus:border-[#D98B70] focus:outline-none focus:ring-2 focus:ring-[#D98B70]/30`}
        aria-label="Select generation style"
      >
        <option value="Style">Style</option>
      </select>


    </aside>
  );
}