import { defineConfig } from 'astro/config';
import NetlifyCMS from 'astro-netlify-cms';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      config:{
        path: './custom-config.cjs'
      }
    }),
    NetlifyCMS({
      config: {
        // Use Netlify’s “Git Gateway” authentication and target our default branch
        backend: {
          name: 'git-gateway',
          branch: 'latest',
        },
        // Configure where our media assets are stored & served from
        media_folder: 'public/assets/blog',
        public_folder: '/assets/blog',
        // Configure the content collections
        collections: [
          {
            name: 'posts',
            label: 'Blog Posts',
            label_singular: 'Blog Post',
            folder: 'src/pages/posts',
            create: true,
            delete: true,
            fields: [
              { name: 'title', widget: 'string', label: 'Post Title' },
              {
                name: 'publishDate',
                widget: 'datetime',
                format: 'DD MMM YYYY',
                date_format: 'DD MMM YYYY',
                time_format: false,
                label: 'Publish Date',
              },
              { name: 'author', widget: 'string', label: 'Author Name', required: false },
              { name: 'authorURL', widget: 'string', label: 'Author URL', required: false },
              { name: 'description', widget: 'string', label: 'Description', required: false },
              { name: 'body', widget: 'markdown', label: 'Post Body' },
              {
                name: 'layout',
                widget: 'select',
                default: '../../layouts/Post.astro',
                options: [
                  { label: 'Blog Post', value: '../../layouts/Post.astro' },
                ],
              },
            ],
          },
          {
            name: 'galleries',
            label: 'Gallery Posts',
            label_singular: 'Gallery Post',
            folder: 'src/pages/posts',
            create: true,
            delete: true,
            fields: [
              { name: 'title', widget: 'string', label: 'Post Title' },
              {
                name: 'publishDate',
                widget: 'datetime',
                format: 'DD MMM YYYY',
                date_format: 'DD MMM YYYY',
                time_format: false,
                label: 'Publish Date',
              },
              { name: 'author', widget: 'string', label: 'Author Name', required: false },
              { name: 'authorURL', widget: 'string', label: 'Author URL', required: false },
              { name: 'description', widget: 'string', label: 'Description', required: false },
              { name: 'body', widget: 'markdown', label: 'Post Body' },
              {
                name: 'layout',
                widget: 'select',
                default: '../../layouts/Post.astro',
                options: [
                  { label: 'Gallery Post', value: '../../layouts/Post.astro' },
                ],
              },
            ],
          },
        ],
      },
    }),
  ],
});
