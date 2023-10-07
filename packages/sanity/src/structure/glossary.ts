import type {ChildResolver, DocumentListBuilder} from 'sanity/desk'

import type {DeskModule} from './types'

export const glossary: DeskModule = (S) => {
  const id = 'glossary'
  const title = 'Glossary'

  const glossaryListItem = new Proxy(
    S.documentTypeListItem('term').title(title).id(id).serialize(),
    {
      get(target, prop, reciever) {
        if (prop === 'child') {
          const originalChild = target[prop] as ChildResolver

          return function child(...args: Parameters<ChildResolver>) {
            const child = originalChild.apply(null, args) as DocumentListBuilder

            return child.defaultOrdering([{field: 'term', direction: 'asc'}])
          }
        }
        return Reflect.get(target, prop, reciever)
      },
    },
  )

  return [glossaryListItem, ['term']]
}
