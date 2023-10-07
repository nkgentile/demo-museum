import {definePlugin} from 'sanity'

import {term} from './term'
import {termInlineBlock} from './termBlock'

export const glossary = definePlugin({
  name: '@moma/glossary',

  schema: {
    types: [term, termInlineBlock],
  },
})
