import {definePlugin} from 'sanity'

import {name} from './name.object'
import {person} from './person.document'

export const people = definePlugin({
  name: '@museum/people',

  schema: {
    types: [name, person],
  },
})
