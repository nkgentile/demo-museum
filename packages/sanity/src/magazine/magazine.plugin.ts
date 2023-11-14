import {definePlugin} from 'sanity'

import {article} from './article.document'

export const magazine = definePlugin({
  name: '@museum/magazine',

  schema: {
    types: [article],
  },
})
