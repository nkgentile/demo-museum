import {TagIcon} from '@sanity/icons'
import {defineField, definePlugin, defineType} from 'sanity'

import {term} from './term.document'

export const glossary = definePlugin({
  name: '@museum/glossary',

  schema: {
    types: [
      term,
      // defineType({
      //   title: 'Term',
      //   name: 'term.inlineBlock',
      //   type: 'object' as const,

      //   fields: [
      //     defineField({
      //       title: 'Text',

      //       name: 'text',
      //       type: 'string',

      //       validation: (rule) => rule.required(),
      //     }),

      //     defineField({
      //       title: 'Term',

      //       name: 'term',
      //       type: 'reference',
      //       to: [{type: 'term'}],
      //       weak: true,

      //       validation: (rule) => rule.required(),
      //     }),
      //   ],

      //   icon: TagIcon,
      //   preview: {
      //     select: {
      //       title: 'text',
      //     },
      //   },
      //   options: {
      //     modal: {
      //       // type: 'dialog',
      //     },
      //   },
      // }),
    ],
  },
})
