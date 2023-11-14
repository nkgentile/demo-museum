import {UserIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

import {isName} from '../people'

export const artist = defineType({
  title: 'Artist',
  name: 'artist',
  type: 'document',

  fields: [
    defineField({
      title: 'Portrait',
      description: 'An image of the artist.',

      name: 'portrait',
      type: 'image',

      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'name',
      type: 'name',

      options: {
        collapsible: true,
      },
    }),

    defineField({
      title: 'Alternate Name',
      description: 'An alternate name for the artist, e.g. an alias',

      name: 'alternateName',
      type: 'string',
    }),

    defineField({
      title: 'Biography',

      name: 'biography',
      type: 'array' as const,
      of: [
        defineArrayMember({
          type: 'block' as const,
          marks: {
            annotations: [{type: 'annotation.reference'}],
          },
        }),

        defineArrayMember({type: 'block.quote'}),
      ],
    }),

    defineField({
      title: 'Nationality',
      name: 'nationality',
      type: 'string',
    }),

    defineField({
      title: 'Birth Year',
      name: 'birthYear',
      type: 'string',
    }),

    defineField({
      title: 'Birth Country',
      name: 'birthCountry',
      type: 'string',
    }),

    defineField({
      title: 'Death Year',
      name: 'deathYear',
      type: 'string',
    }),

    defineField({
      title: 'Death Country',
      name: 'deathCountry',
      type: 'string',
    }),
  ],

  icon: UserIcon,
  preview: {
    select: {
      media: 'image',
      name: 'name',
      alternateName: 'alternateName',
    },

    prepare(value) {
      const {media, alternateName} = value
      const name = formatName(value?.name)

      return {
        media,
        title: alternateName?.length
          ? name?.length
            ? `${name} (${alternateName})`
            : alternateName
          : name,
      }
    },
  },
  orderings: [
    {
      title: 'Last Name (A - Z)',
      name: 'lastName.asc',
      by: [{field: 'name.surname', direction: 'asc'}],
    },

    {
      title: 'Last Name (Z - A)',
      name: 'lastName.desc',
      by: [{field: 'name.surname', direction: 'desc'}],
    },

    {
      title: 'First Name (A - Z)',
      name: 'firstName.asc',
      by: [{field: 'name.givenName', direction: 'asc'}],
    },

    {
      title: 'First Name (Z - A)',
      name: 'firstName.desc',
      by: [{field: 'name.givenName', direction: 'desc'}],
    },
  ],
})

export function formatName(name?: unknown) {
  if (!(name && isName(name))) {
    return null
  }

  const {prefix, givenName, surname, suffix} = name
  return `${[prefix, givenName, surname].filter((a) => a?.length).join(' ')}${
    suffix ? `, ${suffix}` : ''
  }`
}
