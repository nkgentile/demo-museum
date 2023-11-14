import {UserIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

import {isName} from './name.object'

export const person = defineType({
  title: 'Person',

  name: 'person',
  type: 'document' as const,

  fields: [
    defineField({
      name: 'name',
      type: 'name',
    }),

    defineField({
      name: 'image',
      type: 'image',
      description: 'An image of the person.',
    }),

    defineField({
      title: 'URL',
      name: 'url',
      type: 'url',
      description: 'URL of the person. For example, their website or blog',
    }),
  ],

  icon: UserIcon,
  preview: {
    select: {
      media: 'image',
      name: 'name',
    },
    prepare(value) {
      const {media} = value
      const name = formatName(value?.name)

      return {
        media,
        title: name,
      }
    },
  },
})

export function formatName(name?: unknown) {
  if (!(name && isName(name))) {
    return 'Missing name'
  }

  const {prefix, givenName, surname, suffix} = name
  return `${[prefix, givenName, surname].filter((a) => a?.length).join(' ')}${
    suffix ? `, ${suffix}` : ''
  }`
}
