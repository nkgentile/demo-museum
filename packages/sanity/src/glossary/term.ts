import {defineField, defineType} from 'sanity'
import {TagIcon} from '@sanity/icons'

export const term = defineType({
  title: 'Term',
  name: 'term',
  type: 'document',

  fields: [
    defineField({
      title: 'Term',
      name: 'term',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],

  icon: TagIcon,
})
