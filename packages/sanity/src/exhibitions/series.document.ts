import {SchemaIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const series = defineType({
  title: 'Series',

  name: 'series',
  type: 'document',

  fields: [
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string',
    }),
  ],

  icon: SchemaIcon,
})
