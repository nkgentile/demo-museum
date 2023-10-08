import {definePlugin} from 'sanity'

import {quoteBlock} from './quote.block'
import {referenceAnnotation} from './reference.annotation'

export const blocks = definePlugin({
  name: '@moma/blocks',

  schema: {
    types: [quoteBlock, referenceAnnotation],
  },
})
