import { type SchemaTypeDefinition } from 'sanity'
import hero from './hero'
import menu from './menu'

export const schemaTypes: { types: SchemaTypeDefinition[] } = {
  types: [menu, hero],
}
