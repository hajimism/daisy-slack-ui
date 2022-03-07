import { ComponentStory, ComponentMeta } from "@storybook/react"

import { UserCard } from "@/components/model/User/UserCard"

import { mockUser0 } from "@/mocks/User"

export default {
  title: "Model/User/UserCard",
  component: UserCard,
} as ComponentMeta<typeof UserCard>

const Template: ComponentStory<typeof UserCard> = (args) => (
  <UserCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
  user: mockUser0,
}
