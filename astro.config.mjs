import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Site déployé via GitHub Pages avec custom domain epicentre-seminaires.fr.
// Le CNAME dans /public/ assure le bon domaine ; le site Astro est servi à la racine.
export default defineConfig({
  site: 'https://epicentre-seminaires.fr',
  integrations: [tailwind()],
  build: {
    format: 'directory',
  },
  trailingSlash: 'always',
});
