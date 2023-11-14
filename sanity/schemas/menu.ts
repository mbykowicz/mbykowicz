import { type SchemaTypeDefinition } from 'sanity'

const menu: SchemaTypeDefinition = {
  name: 'menu',
  title: 'Menu',
  type: 'document',
  fields: [
    {
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    },
    {
      name: 'items',
      title: 'Menu items',
      type: 'array',
      of: [
        {
          name: 'item',
          title: 'Menu item',
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (rule) => rule.required(),
            },
            {
              name: 'path',
              title: 'Path',
              type: 'string',
              validation: (rule) => rule.required(),
            },
          ],
        },
      ],
    },
  ],
}

export default menu
