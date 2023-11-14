import {defineType} from 'sanity'

export const reference = defineType({
  title: 'Reference',

  name: 'annotation.reference',
  type: 'reference',
  to: [{type: 'term'}, {type: 'artist'}, {type: 'group'}, {type: 'work'}],
  weak: true,

  options: {
    disableNew: true,
  },
})
