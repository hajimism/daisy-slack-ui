import { ComponentStory, ComponentMeta } from "@storybook/react"
import React from "react"

import { PostItem } from "@/components/model/Post/PostItem"

import { mockPost } from "@/mocks/Post"

export default {
  title: "Model/Post/PostItem",
  component: PostItem,
} as ComponentMeta<typeof PostItem>

const Template: ComponentStory<typeof PostItem> = (args) => (
  <PostItem {...args} />
)

export const Default = Template.bind({})
Default.args = {
  post: mockPost,
}