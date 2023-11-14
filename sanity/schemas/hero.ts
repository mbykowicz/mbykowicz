import { type SchemaTypeDefinition } from 'sanity'

const hero: SchemaTypeDefinition = {
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    {
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'ctaItems',
      title: 'CTA items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Text',
              type: 'string',
              validation: (rule) => rule.required(),
            },
            {
              name: 'button',
              title: 'Button',
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
    },
  ],
}

export default hero
