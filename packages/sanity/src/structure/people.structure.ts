import type {DeskModule} from './types'

export const people: DeskModule = (S) => {
  const people = S.documentTypeListItem('person').title('People').id('people')

  return [people, ['person']]
}
