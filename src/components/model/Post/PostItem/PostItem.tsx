import Image from "next/image"
import { VFC } from "react"

import { PostProps } from "@/types/Post"

export const PostItem: VFC<PostProps> = ({ post }) => {
  const { user, postedAt, content } = post

  // 「時間：分」という表示に直す ex.19:05
  const hour = postedAt.getHours()
  const minute =
    postedAt.getMinutes() > 9
      ? postedAt.getMinutes()
      : "0" + postedAt.getMinutes()

  const time = `${hour}:${minute}`

  return (
    <div className="flex py-4 px-6 cursor-default hover:bg-base-200">
      <div className="avatar">
        <div className="w-16 rounded-lg">
          <figure className="p-0 m-0">
            <Image src={user.img} alt="H" width={80} height={80} />
          </figure>
        </div>
      </div>
      <div className="px-2 text-2xl">
        <div>
          <span className="font-bold">{user.name}</span>
          <span className="pl-2 text-lg text-gray-400">{time}</span>
        </div>
        <p>{content}</p>
      </div>
    </div>
  )
}
