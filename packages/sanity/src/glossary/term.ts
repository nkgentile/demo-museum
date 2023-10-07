import {TagIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const term = defineType({
  title: 'Term',
  name: 'term',
  type: 'document',

  fields: [
    defineField({
      title: 'Term',
      name: 'term',
      type: 'string',

      validation: (rule) => rule.required(),
    }),

    defineField({
      title: 'Description',
      name: 'description',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          of: [
            defineArrayMember({
              type: 'term.inlineBlock',
            }),
          ],
        }),
      ],
    }),
  ],

  icon: TagIcon,
  preview: {
    select: {
      title: 'term',
    },
  },

  orderings: [
    {
      title: 'A - Z',
      name: 'term.asc',
      by: [{field: 'term', direction: 'asc'}],
    },

    {
      title: 'Z - A',
      name: 'term.desc',
      by: [{field: 'term', direction: 'desc'}],
    },
  ],
})
