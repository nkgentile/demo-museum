// import type {ChildResolver, DocumentListBuilder} from 'sanity/desk'
import {ImagesIcon, UsersIcon} from '@sanity/icons'

import type {DeskModule} from './types'

export const collection: DeskModule = (S) => {
  const classifications = S.documentTypeListItem('classification')
    .title('Classifications')
    .id('classifications')
  const departments = S.documentTypeListItem('department').title('Departments').id('departments')
  const works = S.documentTypeListItem('work').title('Works').id('works')

  const people = S.documentTypeListItem('artist').title('People').id('people').serialize()
  const groups = S.documentTypeListItem('group').title('Groups').id('group')

  {
    const id = 'artists'
    const title = 'Artists'

    var artists = S.listItem()
      .id(id)
      .title(title)
      .icon(UsersIcon)
      .child((id) => {
        return S.list().title(title).id(id).items([people, groups])
      })
  }

  {
    const id = 'collection'
    const title = 'Collection'

    var collection = S.listItem()
      .id(id)
      .title(title)
      .icon(ImagesIcon)
      .child((id) => {
        return S.list()
          .title(title)
          .id(id)
          .items([works, artists, S.divider(), departments, classifications])
      })
  }

  return [collection, ['work', 'department', 'artist', 'group', 'classification']]
}
