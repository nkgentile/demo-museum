import {defineType} from 'sanity'

export const referenceAnnotation = defineType({
  title: 'Reference',

  name: 'annotation.reference',
  type: 'reference',
  to: [{type: 'term'}, {type: 'person'}, {type: 'group'}],
  weak: true,
})
