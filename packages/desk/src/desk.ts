import {definePlugin, type DocumentOptions, type DocumentPluginOptions} from 'sanity'
import type {DefaultDocumentNodeResolver} from 'sanity/desk'
import {deskTool, type DeskToolOptions} from 'sanity/desk'

/**
 * A modified version of Sanity’s desk tool.
 *
 * - Adds a default document node resolver that uses the `views` option on schema types.
 * - Adds a default production URL resolver that uses the `url` option on schema types.
 */
export const desk = definePlugin<Omit<DeskToolOptions, 'defaultDocumentNode'> | void>((options) => {
  const base = deskTool({
    ...options,
    defaultDocumentNode,
  })

  return {
    ...base,
    document: {
      ...base.document,
      productionUrl,
    },
    name: '@moma/desk',
  }
})

const defaultDocumentNode: DefaultDocumentNodeResolver = (S, context) => {
  try {
    const schemaType = context.schema.get(context.schemaType)
    const schemaOptions: DocumentOptions | undefined = schemaType?.options
    const viewsResolver = schemaOptions?.views

    if (viewsResolver) {
      return S.document().views(viewsResolver(S, context))
    }
  } catch (e) {
    console.error(e)
  }

  return S.document()
}

const productionUrl: DocumentPluginOptions['productionUrl'] = async (prev, context) => {
  try {
    const schemaType = context.schema.get(context.document._type)
    const schemaOptions: DocumentOptions | undefined = schemaType?.options
    const urlResolver = schemaOptions?.url

    if (urlResolver) {
      return (await urlResolver(context)) ?? prev
    }
  } catch (e) {
    console.error(e)
  }

  return prev
}
