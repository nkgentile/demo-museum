import {PresentationIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const exhibition = defineType({
  title: 'Exhibition',

  name: 'exhibition',
  type: 'document',

  fields: [
    defineField({
      title: 'Title',

      name: 'title',
      type: 'string',

      validation: (rule) => rule.required(),
    }),

    defineField({
      title: 'Dates',

      name: 'dates',
      type: 'object' as const,

      fields: [
        defineField({
          title: 'Start',
          name: 'start',
          type: 'date',

          options: {
            dateFormat: 'MMMM Do YYYY',
          },
        }),

        defineField({
          title: 'End',
          name: 'end',
          type: 'date',

          options: {
            dateFormat: 'MMMM Do YYYY',
          },
        }),
      ],
    }),
  ],

  icon: PresentationIcon,
})
