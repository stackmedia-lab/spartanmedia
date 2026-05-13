import { defineConfig } from 'sanity';
import { schemaTypes } from './sanity/schemas';

export default defineConfig({
  name: 'spartan-media',
  title: 'Spartan Media CMS',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  plugins: [],
  schema: { types: schemaTypes },
});
