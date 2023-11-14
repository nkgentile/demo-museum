import {definePlugin} from 'sanity'

import {artist} from './artist.document'
import {group} from './group.document'

export const artists = definePlugin({
  name: '@museum/artists',

  schema: {
    types: [artist, group],
  },
})
