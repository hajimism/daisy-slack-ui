import Image from "next/image"
import { VFC } from "react"

import { UserProps } from "@/types/User"

export const UserCard: VFC<UserProps> = ({ user }) => {
  const { name, img, description, link } = user

  return (
    <>
      <div className="w-96 shadow-xl card bg-base-100">
        <figure>
          <Image src={img} alt={name} width={400} height={400} />
        </figure>
        <div className="prose card-body">
          <div className="indicator">
            <span className="indicator-item badge badge-secondary"></span>
            <h1 className="pr-4 my-0">{name}</h1>
          </div>
          <p>{description}</p>
          <div className="justify-around card-actions">
            <a
              href="https://github.com/HajimexxxNakagawa/daisy-slack-ui"
              target="_blank"
              rel="noreferrer"
              className="grow link link-hover"
            >
              <button className="w-full btn btn-outline">Repository</button>
            </a>
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="grow link link-hover"
            >
              <button className="w-full btn btn-outline">Profile</button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
