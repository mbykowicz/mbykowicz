export type Menu = {
  language: string
  _id: string
  _updatedAt: string
  items: MenuItem[]
  _createdAt: string
  _rev: string
  _type: string
}

export type MenuItem = {
  path: string
  _type: string
  label: string
  _key: string
}
