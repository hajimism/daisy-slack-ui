export type User = {
  id: number
  name: string
  description: string
  img: string
  link: string
}

export interface UserProps {
  user: User
}

export interface UserListProps {
  users: User[]
}
