import {ImageIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType, type FieldGroupDefinition} from 'sanity'

// const groups: FieldGroupDefinition[] = [{}]

export const work = defineType({
  title: 'Work',

  name: 'work',
  type: 'document',

  fields: [
    defineField({
      title: 'Title',

      name: 'title',
      type: 'string',
    }),

    defineField({
      title: 'Media',

      name: 'media',
      type: 'array' as const,
      of: [defineArrayMember({type: 'image'})],
    }),

    defineField({
      name: 'creators',
      type: 'array',
      of: [defineArrayMember({type: 'creator'})],
    }),

    defineField({
      title: 'Department',
      name: 'department',
      type: 'reference',
      to: [{type: 'department'}],
      options: {
        disableNew: true,
      },
    }),

    defineField({
      title: 'Date',
      name: 'date',
      type: 'string',
    }),

    defineField({
      title: 'Medium',
      name: 'medium',
      type: 'string',
    }),

    defineField({
      title: 'Duration',
      name: 'duration',
      type: 'string',
    }),

    defineField({
      title: 'Fabricator',
      name: 'fabricator',
      type: 'string',
    }),

    defineField({
      title: 'Dimensions',
      name: 'dimensions',
      type: 'string',
    }),

    defineField({
      title: 'Credit',
      name: 'credit',
      type: 'string',
    }),

    defineField({
      title: 'Copyright',
      name: 'copyright',
      type: 'string',
    }),

    defineField({
      title: 'Accession Number',
      name: 'accessionNumber',
      type: 'string',
    }),

    defineField({
      title: 'Date Acquired',
      name: 'acquired',
      type: 'date',
    }),
  ],

  icon: ImageIcon,
})
