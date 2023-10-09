import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const classification = defineType({
  title: 'Classification',

  name: 'classification',
  type: 'document',

  fields: [
    defineField({
      title: 'Name',

      name: 'name',
      type: 'string',

      validation: (rule) => rule.required(),
    }),
  ],

  icon: TagIcon,
})
