import Image from "next/image";

export default function Gallery({
  theme,
  images,
  videos,
  aspectRatio,
  generationMode }) {
  return (
    <main className={`min-w-0 p-4 transition-colors duration-300 md:p-6 xl:p-8 ${theme === "dark" ? "bg-[#18181D]" : "bg-[#f8f5f0]"
      }`}>

      <div className="flex items-center justify-between">
        <div>
          <h2 className={`text-lg font-semibold transition-colors duration-300 ${theme === "dark" ? "text-white" : "text-stone-900"
            }`}>
            Your creations
          </h2>
          <p className={`mt-1 text-xs transition-colors duration-300 ${theme === "dark" ? "text-stone-400" : "text-stone-500"
            }`}>
            Your AI-generated visuals
          </p>
        </div>
        <span className={`rounded-full border px-3 py-1 text-xs transition-colors duration-300 ${theme === "dark"
            ? "border-stone-700 bg-[#29272B] text-stone-300"
            : "border-stone-200 bg-white text-stone-600"
          }`}>
          {generationMode === "image"
            ? `${images.length} ${images.length === 1 ? "image" : "images"}`
            : `${videos.length} ${videos.length === 1 ? "video" : "videos"}`}
        </span>
      </div>


      <div className="mt-4 grid grid-cols-2 gap-2 lg:grid-cols-4 xl:mx-auto xl:max-w-[1200px]">
        {(generationMode === "image" ? images : videos).map((item, index) => (
          <article key={`${item.id}-${index}`} className={`group overflow-hidden rounded-lg border shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md active:scale-[0.98] ${theme === "dark"
              ? "border-stone-700 bg-[#29272B]"
              : "border-stone-200 bg-white"
            }`}>
            <div
              style={{ aspectRatio: aspectRatio.replace(":", " / ") }}

              className="relative overflow-hidden bg-stone-100"
            >
              {generationMode === "image" ? (
                <Image
                  src={item.imageUrl}
                  alt={item.prompt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              ) : (
                <video
                  src={item.videoUrl}
                  aria-label={`Generated video: ${item.prompt}`}
                  controls
                  preload="none"
                  playsInline
                  className="h-full w-full object-cover"
                />
              )}
            </div>

          </article>
        ))
        }
        {(generationMode === "image" ? images : videos).length === 0 && (
          <div className={`col-span-full flex min-h-64 flex-col items-center justify-center rounded-xl border border-dashed p-8 text-center transition-colors duration-300 ${theme === "dark"
              ? "border-stone-600 bg-[#29272B]"
              : "border-stone-300 bg-white/60"
            }`}>
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-xl">
              ✦
            </div>

            <h3 className={`text-sm font-semibold transition-colors duration-300 ${theme === "dark" ? "text-white" : "text-stone-800"
              }`}>
              Your creative space awaits
            </h3>

            <p className={`mt-2 max-w-xs text-sm transition-colors duration-300 ${theme === "dark" ? "text-stone-400" : "text-stone-500"
              }`}>
              Write a prompt and click Generate to see your creations here.
            </p>
          </div>
        )}
      </div>


    </main>
  );
}