import {ImageIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const image = defineType({
  title: 'Image',

  name: 'block.image',
  type: 'object',

  fields: [
    defineField({
      name: 'image',
      type: 'image',

      options: {
        hotspot: true,
        metadata: ['exif', 'location', 'lqip', 'palette'],
      },
    }),

    defineField({
      name: 'alt',
      type: 'string',

      validation: (rule) =>
        rule.custom((value, context) => {
          const {parent} = context

          // Alt text only required if an image is set in the parent
          if (!parent?.image) {
            return true
          }

          return value ? true : 'Alternative text is helpful for accessibility and SEO'
        }),
      hidden: ({parent}) => !parent?.image,
    }),

    defineField({
      name: 'caption',
      type: 'string',
      hidden: ({parent}) => !parent?.image,
    }),
  ],

  icon: ImageIcon,
  preview: {
    select: {
      media: 'image',
      alt: 'alt',
      caption: 'caption',
    },
    prepare({media, alt, caption}) {
      return {
        title: alt || caption || 'No alt text or caption',
        media,
      }
    },
  },
})
