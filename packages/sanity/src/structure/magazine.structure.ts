import type {DeskModule} from './types'

export const magazine: DeskModule = (S) => {
  const magazine = S.documentTypeListItem('article').title('Magazine').id('magazine')

  return [magazine, ['article']]
}
