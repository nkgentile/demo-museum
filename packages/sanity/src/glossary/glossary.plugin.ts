import {definePlugin} from 'sanity'

import {term} from './term.document'

export const glossary = definePlugin({
  name: '@museum/glossary',

  schema: {
    types: [term],
  },
})
