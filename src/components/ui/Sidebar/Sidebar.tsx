import { useTheme } from "next-themes"
import { VFC } from "react"

import { PRIMARY_COLORS } from "@/mocks/data"

export const Sidebar: VFC = () => {
  const { setTheme } = useTheme()

  return (
    <div
      className="overflow-y-scroll w-1/12"
      style={{ height: "calc(100vh - 5rem)" }}
    >
      <div className="flex flex-col items-center w-full">
        {PRIMARY_COLORS.map((item) => {
          const key = Object.keys(item)[0]
          const changeTheme = () => setTheme(key)
          return (
            <div
              key={key}
              className="flex justify-center items-center mt-2 w-20 h-20 mask mask-squircle"
              style={{ backgroundColor: item[key] }}
              onClick={changeTheme}
            >
              <span className="px-1 text-xs text-black bg-white rounded-lg">
                {key}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
