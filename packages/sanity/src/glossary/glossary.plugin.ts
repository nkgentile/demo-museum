import {definePlugin} from 'sanity'

import {term} from './term.document'

export const glossary = definePlugin({
  name: '@moma/glossary',

  schema: {
    types: [term],
  },
})
