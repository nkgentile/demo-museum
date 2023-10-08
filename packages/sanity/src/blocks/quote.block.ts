import {BlockquoteIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const quoteBlock = defineType({
  title: 'Quote',
  name: 'block.quote',
  type: 'object',

  fields: [
    defineField({
      name: 'text',
      type: 'text',
      title: 'Text',
    }),

    defineField({
      name: 'attribution',
      type: 'string',
      title: 'Attribution',
    }),

    defineField({
      name: 'citation',
      type: 'url',
      title: 'Citation',
      description: 'Source on the web',
    }),
  ],

  icon: BlockquoteIcon,
})
