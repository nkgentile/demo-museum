// import type {ChildResolver, DocumentListBuilder} from 'sanity/desk'
import {UsersIcon} from '@sanity/icons'

import type {DeskModule} from './types'

export const artists: DeskModule = (S) => {
  const id = 'artists'
  const title = 'Artists'

  const people = new Proxy(
    S.documentTypeListItem('person').title('People').id('people').serialize(),
    {
      // get(target, prop, reciever) {
      //   if (prop === 'child') {
      //     const originalChild = target[prop] as ChildResolver
      //     return function child(...args: Parameters<ChildResolver>) {
      //       const child = originalChild.apply(null, args) as DocumentListBuilder
      //       return child.defaultOrdering([{field: 'term', direction: 'asc'}])
      //     }
      //   }
      //   return Reflect.get(target, prop, reciever)
      // },
    },
  )

  const groups = S.documentTypeListItem('group').title('Groups').id('group')

  const artists = S.listItem()
    .id(id)
    .title(title)
    .icon(UsersIcon)
    .child((id) => {
      return S.list().title(title).id(id).items([people, groups])
    })

  return [artists, ['person', 'group']]
}
