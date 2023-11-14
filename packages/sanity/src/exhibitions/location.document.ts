import {defineField, defineType} from 'sanity'

export const location = defineType({
  title: 'Location',

  name: 'location',
  type: 'document',

  fields: [defineField({})],
})
