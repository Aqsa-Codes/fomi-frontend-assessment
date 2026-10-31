export default function PromptPanel({
  theme,
  images,
  videos,
  generationMode,
}) {
  const currentItems = generationMode === "image" ? images : videos;
  const currentPrompt = currentItems[0]?.prompt;

  return (
    <div className="px-2 pt-2 pb-6">
      <div className={`rounded-xl border p-3 text-[11px] leading-[1.45] transition-colors duration-300 ${theme === "dark"
          ? "border-stone-700 bg-[#29272B] text-stone-200"
          : "border-[#F1DED3] bg-[#F9D9CA] text-stone-700"
        }`}>
        <p>
          {currentPrompt ||
            (generationMode === "image"
              ? "Your image prompt will appear here after generation."
              : "Your video prompt will appear here after generation.")}
        </p>

        <div className="mt-3 flex justify-end">
          <button
            type="button"
            className={`rounded-lg px-3 py-1.5 text-[10px] font-medium shadow-sm transition-all duration-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D98B70] focus-visible:ring-offset-1 active:scale-95 ${theme === "dark"
                ? "bg-[#1E1D22] text-white hover:bg-stone-700"
                : "bg-white text-black hover:bg-stone-50"
              }`}
          >
            Model
          </button>
        </div>
      </div>
    </div>
  );
}