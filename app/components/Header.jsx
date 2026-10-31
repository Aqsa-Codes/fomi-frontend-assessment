import {
  House,
  ImageSquare,
  VideoCamera,
  MagnifyingGlass,
  PencilSimple,
  Folder,
  Headset,
  Moon,
} from "@phosphor-icons/react";

export default function Header(){
    return(

    <header className="relative flex h-12 items-center justify-between border-b border-stone-200 bg-white px-4 text-stone-800">
            <a href="#" className="text-xl font-black" aria-label="Fomi home">
              F
            </a>
    
            <div className="absolute left-1/2 top-1 -translate-x-1/2">
              <div className="h-2 w-64 overflow-hidden rounded-full bg-stone-100">
                <div className="h-full w-[15%] rounded-full bg-[#D98B70]" />
              </div>
    
              <nav
                aria-label="Main navigation"
                className="mt-1 flex items-center justify-center gap-6 text-stone-700"
              >
                <button type="button" aria-label="Home"
                className="rounded-md p-1 transition-colors duration-150 hover:bg-stone-100 hover:text-stone-900">
                  <House size={17} weight="fill" />
                </button>
                <button type="button" aria-label="Image creation"
                className="rounded-md p-1 transition-colors duration-150 hover:bg-stone-100 hover:text-stone-900">
                  <ImageSquare size={17} />
                </button>
                <button type="button" aria-label="Video creation"
                className="rounded-md p-1 transition-colors duration-150 hover:bg-stone-100 hover:text-stone-900">
                  <VideoCamera size={17} />
                </button>
                <button type="button" aria-label="Explore"
                className="rounded-md p-1 transition-colors duration-150 hover:bg-stone-100 hover:text-stone-900">
                  <MagnifyingGlass size={17} />
                </button>
                <button type="button" aria-label="Edit"
                className="rounded-md p-1 transition-colors duration-150 hover:bg-stone-100 hover:text-stone-900">
                  <PencilSimple size={17} />
                </button>
              </nav>
            </div>
    
            <div className="flex items-center gap-3 text-xs text-stone-600">
              <button type="button" 
              className="flex items-center gap-1 rounded-md px-2 py-1 transition-colors duration-150 hover:bg-stone-100 hover:text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D98B70] focus-visible:ring-offset-1">
                <Folder size={13} /> Gallery
              </button>
              <button type="button" 
              className="flex items-center gap-1 rounded-md px-2 py-1 transition-colors duration-150 hover:bg-stone-100 hover:text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D98B70] focus-visible:ring-offset-1">
                <Headset size={13} /> Support
              </button>
              <button type="button" aria-label="Theme"
              className="rounded-md p-1 transition-colors duration-150 hover:bg-stone-100 hover:text-stone-900">
                <Moon size={16} />
              </button>
              <button
                type="button"
                aria-label="User profile"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-100 font-semibold hover:bg-orange-200 transition-colors duration-150"
              >
                A
              </button>
            </div>
          </header>
    )
}