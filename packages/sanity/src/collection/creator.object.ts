import {defineType} from 'sanity'

export const creator = defineType({
  title: 'Creator',

  name: 'creator',
  type: 'reference',
  to: [{type: 'person'}],
  
  options: {
    disableNew: true
  }
})
