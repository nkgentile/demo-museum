import {TagIcon} from '@sanity/icons'
import {Text} from '@sanity/ui'
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
      type: 'array' as const,
      of: [
        defineArrayMember({
          type: 'block',
          marks: {
            annotations: [{type: 'annotation.reference'}],
          },
        }),
      ],
    }),
  ],

  icon: TagIcon,
  preview: {
    select: {
      title: 'term',
    },

    prepare(value) {
      const title = value.title || 'Missing term'
      const firstLetter = value.title?.at(0)?.toUpperCase()

      return {
        media: (
          <Text weight="bold" muted>
            {firstLetter}
          </Text>
        ),
        title,
      }
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
