import type {Id} from 'sanity'
import type {
  ListItem,
  ListItemBuilder,
  StructureBuilder,
  StructureResolverContext,
} from 'sanity/desk'

export type DeskModule = (
  S: StructureBuilder,
  context: StructureResolverContext,
) => [ListItem | ListItemBuilder, Id[]]
