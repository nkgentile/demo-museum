import type {DeskModule} from './types'

export const exhibitions: DeskModule = (S) => {
  const id = 'exhibitions'
  const title = 'Exhibitions'

  const exhibitionsListItem = S.documentTypeListItem('exhibition').title(title).id(id)

  return [exhibitionsListItem, ['exhibition']]
}
