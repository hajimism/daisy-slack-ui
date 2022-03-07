import { User } from "@/types/User"

export type Post = {
  user: User
  postedAt: Date
  content: string
}

export interface PostProps {
  post: Post
}

export interface PostListProps {
  posts: Post[]
}
