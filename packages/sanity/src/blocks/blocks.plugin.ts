import {definePlugin} from 'sanity'

import {image} from './image.block'
import {quote} from './quote.block'
import {reference} from './reference.annotation'

export const blocks = definePlugin({
  name: '@museum/blocks',

  schema: {
    types: [quote, reference, image],
  },
})
