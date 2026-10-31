import Image from "next/image";

export default function History({ historyImages }) {
  return (
    <div className="flex h-16 items-center gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden border-b border-[#F1DED3] bg-[#F9D9CA] px-4">
      <div className="flex h-12 w-22 shrink-0 flex-col justify-center rounded-lg border border-[#E8C6B8] bg-[#FDF4EF] px-3">
        <span className="text-sm font-bold text-stone-800">History</span>
        <span className="text-xs text-stone-500">View all →</span>
      </div>

      {historyImages.map((imageUrl, index) => (
        <button
          key={`${imageUrl}-${index}`}
          type="button"
          aria-label={`Select image ${index + 1}`}
          className="relative h-12 w-[68px] shrink-0 overflow-hidden rounded-lg border-2 border-stone-200 bg-stone-100 transition-all duration-150 hover:-translate-y-0.5 hover:border-[#D98B70] hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D98B70] focus-visible:ring-offset-1 active:scale-95"
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