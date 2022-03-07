import { Channel } from "@/types/Channel"

import { mockPostList } from "@/mocks/Post"

export const mockChannel: Channel = {
  name: "",
  posts: mockPostList,
}

export const mockChannelList = [mockChannel, mockChannel, mockChannel]
