import Image from "next/image";

export default function History({ historyImages, theme }) {
  return (
    <div className={`flex h-16 items-center gap-2 overflow-x-auto border-b px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden transition-colors duration-300 ${theme === "dark"
      ? "border-stone-700 bg-[#29272B]"
      : "border-[#F1DED3] bg-[#F9D9CA]"
      }`}>
      <div className={`flex h-12 w-22 shrink-0 flex-col justify-center rounded-lg border px-3 transition-colors duration-300 ${theme === "dark"
        ? "border-stone-600 bg-[#1E1D22]"
        : "border-[#E8C6B8] bg-[#FDF4EF]"
        }`}>
        <span className={`text-sm font-bold ${theme === "dark" ? "text-white" : "text-stone-800"
          }`}>History</span>
        <span className={`text-xs ${theme === "dark" ? "text-stone-400" : "text-stone-500"
          }`}>View all →</span>
      </div>

      {historyImages.map((imageUrl, index) => (
        <button
          key={`${imageUrl}-${index}`}
          type="button"
          aria-label={`Select image ${index + 1}`}
          className={`relative h-12 w-[68px] shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D98B70] hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D98B70] focus-visible:ring-offset-1 active:scale-95 ${theme === "dark"
              ? "border-stone-600 bg-[#1E1D22]"
              : "border-stone-200 bg-stone-100"
            }`}
        >
          <Image
            src={imageUrl}
            alt={`History image ${index + 1}`}
            fill
            sizes="68px"
            className="object-cover"
          />
        </button>
      ))}
    </div>
  );
}