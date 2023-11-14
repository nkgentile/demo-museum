import {BookIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const article = defineType({
  title: 'Article',

  name: 'article',
  type: 'document',

  fields: [
    defineField({
      title: 'Title',

      name: 'title',
      type: 'string',

      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'contributors',
      type: 'array' as const,
      description: 'List of people involved with the production of the article',
      of: [defineArrayMember({type: 'person'})],
    }),

    defineField({
      title: 'Body',

      name: 'body',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          marks: {annotations: [defineArrayMember({type: 'annotation.reference'})]},
        }),
        defineArrayMember({type: 'block.image'}),
      ],
    }),
  ],

  icon: BookIcon,
})
