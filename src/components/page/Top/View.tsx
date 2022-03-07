import { VFC } from "react"

import { DropdownContent } from "@/components/ui/DropdownContent"

const PRIMARY_COLORS: { [key: string]: string }[] = [
  { light: "#570df8" },
  { dark: "#661AE6" },
  { cupcake: "#65c3c8" },
  { bumblebee: "#e0a82e" },
  { emerald: "#66cc8a" },
  { corporate: "#4b6bfb" },
  { synthwave: "#e779c1" },
  { retro: "#ef9995" },
  { cyberpunk: "#ff7598" },
  { valentine: "#e96d7b" },
  { halloween: "#f28c18" },
  { garden: "#5c7f67" },
  { forest: "#1eb854" },
  { aqua: "#09ecf3" },
  { lofi: "#0D0D0D" },
  { pastel: "#d1c1d7" },
  { fantasy: "#6e0b75" },
  { wireframe: "#b8b8b8" },
  { black: "#343232" },
  { luxury: "#ffffff" },
  { dracula: "#ff79c6" },
  { cmyk: "#45AEEE" },
  { autumn: "#8C0327" },
  { business: "#1C4E80" },
  { acid: "#FF00F4" },
  { lemonade: "#519903" },
  { night: "#38bdf8" },
  { coffee: "#DB924B" },
  { winter: "#047AFF" },
]

export const TopPageView: VFC = () => {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <div className="flex justify-center navbar bg-primary">
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex grow w-full">
        <div
          className="overflow-y-scroll w-1/12"
          style={{ height: "calc(100vh - 5rem)" }}
        >
          <div className="flex flex-col items-center w-full">
            {PRIMARY_COLORS.map((item) => {
              const key = Object.keys(item)[0]

              return (
                <div
                  key={key}
                  className="mt-2 w-20 h-20 mask mask-squircle"
                  style={{ backgroundColor: item[key] }}
                ></div>
              )
            })}
          </div>
        </div>
        <div className="w-3/12 border border-gray-200">
          <div className="w-full dropdown">
            <label tabIndex={0} className="prose">
              <h1 className="p-4 border-b border-gray-200 hover:bg-base-200 ">
                daisyUI
              </h1>
            </label>
            <DropdownContent />
          </div>
        </div>
        <div className="w-8/12">hoge</div>
      </div>
    </main>
  )
}
