import {
  House,
  ImageSquare,
  VideoCamera,
  MagnifyingGlass,
  PencilSimple,
  Folder,
  Headset,
  Moon,
  Sun,
} from "@phosphor-icons/react";

export default function Header({ theme, toggleTheme }) {
  return (

    <header className={`relative flex h-12 items-center justify-between border-b px-4 transition-colors duration-300 ${theme === "dark"
        ? "border-stone-700 bg-[#1E1D22] text-white"
        : "border-stone-200 bg-white text-stone-800"
      }`}>
      <a href="#" className="text-xl font-black" aria-label="Fomi home">
        F
      </a>

      <div className="absolute left-1/2 top-1 -translate-x-1/2">
        <div className={`h-2 w-64 overflow-hidden rounded-full transition-colors duration-300 ${
  theme === "dark" ? "bg-stone-700" : "bg-stone-100"
}`}>
          <div className="h-full w-[15%] rounded-full bg-[#D98B70]" />
        </div>

        <nav
          aria-label="Main navigation"
          className={`mt-1 flex items-center justify-center gap-6 transition-colors duration-300 ${
  theme === "dark" ? "text-stone-300" : "text-stone-700"
}`}
        >
          <button type="button" aria-label="Home"
            className={`rounded-md p-1 transition-colors duration-150 ${
  theme === "dark"
    ? "hover:bg-stone-700 hover:text-white"
    : "hover:bg-stone-100 hover:text-stone-900"
}`}>
            <House size={17} weight="fill" />
          </button>
          <button type="button" aria-label="Image creation"
            className={`rounded-md p-1 transition-colors duration-150 ${
  theme === "dark"
    ? "hover:bg-stone-700 hover:text-white"
    : "hover:bg-stone-100 hover:text-stone-900"
}`}>
            <ImageSquare size={17} />
          </button>
          <button type="button" aria-label="Video creation"
            className={`rounded-md p-1 transition-colors duration-150 ${
  theme === "dark"
    ? "hover:bg-stone-700 hover:text-white"
    : "hover:bg-stone-100 hover:text-stone-900"
}`}>
            <VideoCamera size={17} />
          </button>
          <button type="button" aria-label="Explore"
            className={`rounded-md p-1 transition-colors duration-150 ${
  theme === "dark"
    ? "hover:bg-stone-700 hover:text-white"
    : "hover:bg-stone-100 hover:text-stone-900"
}`}>
            <MagnifyingGlass size={17} />
          </button>
          <button type="button" aria-label="Edit"
            className={`rounded-md p-1 transition-colors duration-150 ${
  theme === "dark"
    ? "hover:bg-stone-700 hover:text-white"
    : "hover:bg-stone-100 hover:text-stone-900"
}`}>
            <PencilSimple size={17} />
          </button>
        </nav>
      </div>

      <div className="flex items-center gap-3 text-xs text-stone-600">
        <button type="button"
          className={`rounded-md px-2 py-1 transition-colors duration-150 ${
  theme === "dark"
    ? "text-stone-300 hover:bg-stone-700 hover:text-white"
    : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
}`}>
          <Folder size={13} /> Gallery
        </button>
        <button type="button"
          className={`rounded-md px-2 py-1 transition-colors duration-150 ${
  theme === "dark"
    ? "text-stone-300 hover:bg-stone-700 hover:text-white"
    : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
}`}>
          <Headset size={13} /> Support
        </button>
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
          className={`rounded-md p-1 transition-colors duration-150 ${
  theme === "dark"
    ? "text-stone-300 hover:bg-stone-700 hover:text-white"
    : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
}`}
        >
          {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
        </button>
        <button
          type="button"
          aria-label="User profile"
          className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-100 font-semibold text-stone-800 transition-colors duration-150 hover:bg-orange-200"
        >
          A
        </button>
      </div>
    </header>
  )
}