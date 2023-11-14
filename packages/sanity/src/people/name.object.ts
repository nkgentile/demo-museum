import {defineField, defineType, type ObjectDefinition} from 'sanity'

export const name = defineType({
  title: 'Name',
  name: 'name',
  type: 'object',

  fields: [
    defineField({
      title: 'Honorific Prefix',
      name: 'prefix',
      type: 'string',
      description: `An honorific prefix preceding a artist's name such as Dr/Mrs/Mr.`,
    }),

    defineField({
      title: 'Given Name',
      name: 'givenName',
      type: 'string',
      description: 'In the U.S., the first name of a artist.',
    }),

    defineField({
      title: 'Surname',
      name: 'surname',
      type: 'string',
      description: 'In the U.S., the last name of a artist.',
    }),

    defineField({
      title: 'Honorific Suffix',
      name: 'suffix',
      type: 'string',
      description: `An honorific suffix following a person's name such as M.D./PhD/MSCSW.`,
    }),
  ],
})

declare module 'sanity' {
  type NameDefinition = Omit<ObjectDefinition, 'type' | 'fields'> & {
    type: 'name'
  }

  export interface IntrinsicDefinitions {
    name: NameDefinition
  }
}

type NameObject = {
  _type: 'name'
  givenName?: string
  surname?: string
  prefix?: string
  suffix?: string
}

export function isName(value: unknown): value is NameObject {
  return (
    Boolean(value) &&
    // @ts-expect-error
    value._type == 'name'
  )
}
