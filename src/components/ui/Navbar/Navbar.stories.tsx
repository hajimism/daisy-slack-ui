import { ComponentStory, ComponentMeta } from "@storybook/react"
import React from "react"

import { Navbar } from "./index"

export default {
  title: "UI/Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => (
  <Navbar {...args} />
)

export const Default = Template.bind({})
Default.args = {}