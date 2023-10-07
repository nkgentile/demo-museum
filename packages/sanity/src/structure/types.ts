import type {Id} from 'sanity'
import type {ListItemBuilder, StructureBuilder, StructureResolverContext} from 'sanity/desk'

export type DeskModule = (
  S: StructureBuilder,
  context: StructureResolverContext,
) => [ListItemBuilder, Id[]]
