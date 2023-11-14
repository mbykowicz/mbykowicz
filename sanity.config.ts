/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { documentInternationalization } from '@sanity/document-internationalization'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './sanity/env'
import { schemaTypes } from './sanity/schemas'

const singletonActions = new Set(['publish', 'discardChanges', 'restore'])
const singletonTypes = new Set(['menu', 'hero'])

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema: schemaTypes,
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Menu')
              .id('menu')
              .child(S.document().schemaType('menu').documentId('menu')),
            S.listItem()
              .title('Hero')
              .id('hero')
              .child(S.document().schemaType('hero').documentId('hero')),

            // Regular document types here
            // S.documentTypeListItem('project').title('Project'),
          ]),
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    documentInternationalization({
      // Required configuration
      supportedLanguages: [
        { id: 'pl', title: 'Polish' },
        { id: 'en', title: 'English' },
      ],
      schemaTypes: ['menu', 'hero'],
    }),
  ],
})
