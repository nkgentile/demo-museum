import {ComponentIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const department = defineType({
  title: 'Department',

  name: 'department',
  type: 'document',

  fields: [
    defineField({
      title: 'Name',

      name: 'name',
      type: 'string',

      validation: (rule) => rule.required(),
    }),
  ],

  icon: ComponentIcon,
})
