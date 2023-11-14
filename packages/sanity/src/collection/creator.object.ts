import {defineType} from 'sanity'

export const creator = defineType({
  title: 'Creator',

  name: 'creator',
  type: 'reference',
  to: [{type: 'artist'}],

  options: {
    disableNew: true,
  },
})
