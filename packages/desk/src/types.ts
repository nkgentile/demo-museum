import type {ResolveProductionUrlContext} from 'sanity'
import type {DefaultDocumentNodeContext, StructureBuilder, View, ViewBuilder} from 'sanity/desk'

export type StructureViewsResolver = (
  S: StructureBuilder,
  context: DefaultDocumentNodeContext,
) => Array<View | ViewBuilder>

export type DocumentURLResolver = (
  context: ResolveProductionUrlContext,
) => Promise<string | null | undefined>

declare module 'sanity' {
  export interface DocumentOptions {
    views?: StructureViewsResolver
    url?: DocumentURLResolver
  }
}
