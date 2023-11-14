import {UsersIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const group = defineType({
  title: 'Group',
  name: 'group',
  type: 'document',

  fields: [
    defineField({
      name: 'image',
      type: 'image',

      description: 'An image of the collective.',

      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'name',
      type: 'string',

      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'members',
      type: 'array' as const,
      of: [defineArrayMember({type: 'artist'})],

      validation: (rule) => rule.unique(),
    }),

    defineField({
      title: 'Biography',
      name: 'biography',
      type: 'array' as const,
      of: [
        defineArrayMember({
          type: 'block' as const,
          marks: {annotations: [{type: 'annotation.reference'}]},
        }),
      ],
    }),
  ],

  icon: UsersIcon,
  preview: {
    select: {
      media: 'image',
      name: 'name',
    },

    prepare(value) {
      const {media, name} = value

      return {
        media,
        title: name,
      }
    },
  },
  orderings: [
    {
      title: 'Name (A - Z)',
      name: 'name.asc',
      by: [{field: 'name', direction: 'asc'}],
    },

    {
      title: 'Name (Z - A)',
      name: 'name.desc',
      by: [{field: 'name', direction: 'desc'}],
    },
  ],
})
