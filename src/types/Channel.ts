import { Post } from "@/types/Post"

export type Channel = {
  name: string
  posts: Post[]
}

export interface ChannelProps {
  channel: Channel
}

export interface ChannelListProps {
  channels: Channel[]
}
