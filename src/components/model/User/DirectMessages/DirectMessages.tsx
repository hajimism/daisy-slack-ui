import Image from "next/image"
import { VFC } from "react"

import { UserListProps } from "@/types/User"

export const DirectMessages: VFC<UserListProps> = ({ users }) => {
  return (
    <>
      <h3 className="px-4 cursor-default tooltip" data-tip="Direct messages">
        Direct messages
      </h3>
      {users.map((user) => {
        return (
          <div
            key={user.id}
            className={`py-2 px-4 cursor-pointer hover:bg-base-300 flex items-center tooltip`}
            data-tip={user.name}
          >
            <div className="avatar online">
              <div className="w-8 rounded-lg">
                <figure className="p-0 m-0">
                  <Image src={user.img} alt="H" width={60} height={60} />
                </figure>
              </div>
            </div>
            <span className="pl-2">{user.name}</span>
          </div>
        )
      })}
    </>
  )
}
