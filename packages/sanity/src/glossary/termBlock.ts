import {defineType, defineField} from 'sanity'
import {TagIcon} from '@sanity/icons'

export const termInlineBlock = defineType({
  title: 'Term',
  name: 'term.inlineBlock',
  type: 'object',

  fields: [
    defineField({
      title: 'Text',
      name: 'text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      title: 'Term',
      name: 'term',
      type: 'reference',
      to: [{type: 'term'}],
      weak: true,
      validation: (rule) => rule.required(),
    }),
  ],

  icon: TagIcon,
  preview: {
    select: {
      title: 'text',
    },
  },
  options: {
    modal: {
      type: 'dialog',
    },
  },
})
