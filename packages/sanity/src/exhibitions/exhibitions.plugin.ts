import {definePlugin} from 'sanity'

import {exhibition} from './exhibition.document'

export const exhibitions = definePlugin({
  name: '@museum/exhibitions',

  schema: {
    types: [exhibition],
  },
})
