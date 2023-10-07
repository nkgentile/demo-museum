import type {Id} from 'sanity'
import type {ListItemBuilder, StructureResolver} from 'sanity/desk'

import type {DeskModule} from './types'

const STRUCTURE_HIDDEN_TYPES: string[] = ['media.tag']

export const structure: StructureResolver = (S, context) => {
  function buildModules(modules: DeskModule[] = []) {
    return modules.reduce<[ListItemBuilder[], Id[]]>(
      ([items, schemaTypes], itemBuilder) => {
        const item = itemBuilder(S, context)
        return [items.concat(item[0]), schemaTypes.concat(item[1])]
      },
      [[], []],
    )
  }

  const [items, schemaTypes] = buildModules([glossary])

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

const glossary: DeskModule = (S) => {
  const id = 'glossary'
  const title = 'Glossary'

  return [S.documentTypeListItem('term').title(title).id(id), ['term']]
}