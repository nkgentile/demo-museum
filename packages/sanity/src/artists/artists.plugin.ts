import {definePlugin} from 'sanity'

import {group} from './group.document'
import {name} from './name.object'
import {person} from './person.document'

export const artists = definePlugin({
  name: '@moma/artists',

  schema: {
    types: [name, person, group],
  },
})
