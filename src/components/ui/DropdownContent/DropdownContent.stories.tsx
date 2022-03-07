import { ComponentStory, ComponentMeta } from "@storybook/react"
import React from "react"

import { DropdownContent } from "./index"

export default {
  title: "UI/DropdownContent",
  component: DropdownContent,
} as ComponentMeta<typeof DropdownContent>;

const Template: ComponentStory<typeof DropdownContent> = (args) => (
  <DropdownContent {...args} />
)

export const Default = Template.bind({})
Default.args = {}