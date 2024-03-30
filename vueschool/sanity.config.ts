import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'VueSchool',

  dataset: process.env.SANITY_DATASET_NAME || '',
  projectId: process.env.SANITY_PROJECT_ID || '' ,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
