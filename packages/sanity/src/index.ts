import {desk} from '@moma/desk'
import {assist} from '@sanity/assist'
import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {media, mediaAssetSource} from 'sanity-plugin-media'

import {artists} from './artists'
import {blocks} from './blocks'
import {glossary} from './glossary'
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

    plugins: [desk({structure}), media(), visionTool(), assist(), blocks(), glossary(), artists()],

    form: {
      image: {
        assetSources: (prev) => prev.filter((assetSource) => assetSource === mediaAssetSource),
      },
      file: {
        assetSources: (prev) => prev.filter((assetSource) => assetSource === mediaAssetSource),
      },
    },
  })
}
