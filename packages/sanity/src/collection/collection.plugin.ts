import {definePlugin} from 'sanity'

import {classification} from './classification.document'
import {creator} from './creator.object'
import {department} from './department.document'
import {work} from './work.document'

export const collection = definePlugin({
  name: '@museum/collection',

  schema: {
    types: [department, work, classification, creator],
  },
})
