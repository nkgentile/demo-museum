import {desk} from '@moma/desk'
import {assist} from '@sanity/assist'
import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'

import {glossary} from './glossary'
import {types} from './schema'
import {structure} from './structure'

/**
 * Configuration options that will be passed in
 * from the environment or application
 */
type SanityConfig = {
  projectId: string
  dataset: string
  title?: string
}

/**
 * Wrap whatever Sanity Studio configuration your project requires.
 *
 * In this example, it's a single workspace but adjust as necessary.
 */
export function defineSanityConfig(config: SanityConfig) {
  const {projectId, dataset, title = 'MOMA'} = config

  return defineConfig({
    title,

    projectId,
    dataset,

    plugins: [desk({structure}), visionTool(), assist(), glossary()],

    schema: {
      types,
    },
  })
}
