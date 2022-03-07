import { ComponentStory, ComponentMeta } from "@storybook/react"
import React from "react"

import { Sidebar } from "./index"

export default {
  title: "UI/Sidebar",
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args} />
)

export const Default = Template.bind({})
Default.args = {}