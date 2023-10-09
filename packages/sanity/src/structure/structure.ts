import type {Id} from 'sanity'
import type {ListItem, ListItemBuilder, StructureResolver} from 'sanity/desk'

import {collection} from './collection.structure'
import {glossary} from './glossary.structure'
import type {DeskModule} from './types'

const STRUCTURE_HIDDEN_TYPES: string[] = ['media.tag']

const STRUCTURE_MODULES = [collection, glossary]

export const structure: StructureResolver = (S, context) => {
  function buildModules(modules: DeskModule[] = []) {
    return modules.reduce<[(ListItem | ListItemBuilder)[], Id[]]>(
      ([items, schemaTypes], itemBuilder) => {
        const item = itemBuilder(S, context)
        return [items.concat(item[0]), schemaTypes.concat(item[1])]
      },
      [[], []],
    )
  }

  const [items, schemaTypes] = buildModules(STRUCTURE_MODULES)

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
