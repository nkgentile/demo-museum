import {definePlugin} from 'sanity'

import {classification} from './classification.document'
import {department} from './department.document'
import {work} from './work.document'

export const collection = definePlugin({
  name: '@moma/collection',

  schema: {
    types: [department, work, classification],
  },
})
