import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { table } from '@sanity/table';
import { schemaTypes } from './src/sanity/schema';

export default defineConfig({
    name: 'default',
    title: 'Mitra Asia CCTV CMS',

    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

    basePath: '/admin',

    plugins: [structureTool(), visionTool(), table()],

    schema: {
        types: schemaTypes,
    },
});
