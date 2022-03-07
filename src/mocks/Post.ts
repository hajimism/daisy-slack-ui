import { Post } from "@/types/Post"

import { mockUser0 } from "@/mocks/User"

export const mockPost: Post = {
  user: mockUser0,
  postedAt: new Date(),
  content: "This page is made of daisyUI!",
}

export const mockPostList = [mockPost, mockPost, mockPost]
