import type {Id} from 'sanity'
import type {Divider, ListItem, ListItemBuilder, StructureResolver} from 'sanity/desk'

import {collection} from './collection.structure'
import {exhibitions} from './exhibition.structure'
import {glossary} from './glossary.structure'
import {magazine} from './magazine.structure'
import {people} from './people.structure'
import type {DeskModule} from './types'

const STRUCTURE_HIDDEN_TYPES: string[] = ['media.tag']

export const structure: StructureResolver = (S, context) => {
  function buildModules(modules: (DeskModule | Divider)[] = []) {
    return modules.reduce<[(ListItem | ListItemBuilder | Divider)[], Id[]]>(
      ([items, schemaTypes], itemBuilder) => {
        if (typeof itemBuilder === 'object') {
          return [items.concat(itemBuilder), schemaTypes]
        }

        const item = itemBuilder(S, context)
        return [items.concat(item[0]), schemaTypes.concat(item[1])]
      },
      [[], []],
    )
  }

  const [items, schemaTypes] = buildModules([
    collection,
    exhibitions,
    magazine,
    S.divider(),
    people,
    glossary,
  ])

  const defaultItems = S.documentTypeListItems()
  const visibleDefaultItems = defaultItems.filter((item) => {
    const itemId = item.getId()

    return itemId && !(STRUCTURE_HIDDEN_TYPES.includes(itemId) || schemaTypes.includes(itemId))
  })

  return S.list()
    .id('root')
    .title('Content')
    .items([
      ...items,
      ...(visibleDefaultItems.length > 0 ? [S.divider()] : []),
      ...visibleDefaultItems,
    ])
}
