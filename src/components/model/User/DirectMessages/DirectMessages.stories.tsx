import { ComponentStory, ComponentMeta } from "@storybook/react"
import React from "react"

import { DirectMessages } from "@/components/model/User/DirectMessages"

import { mockUserList } from "@/mocks/User"

export default {
  title: "Model/User/DirectMessages",
  component: DirectMessages,
} as ComponentMeta<typeof DirectMessages>

const Template: ComponentStory<typeof DirectMessages> = (args) => (
  <DirectMessages {...args} />
)

export const Default = Template.bind({})
Default.args = {
  users: mockUserList,
}