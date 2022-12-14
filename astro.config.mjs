import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
import preact from '@astrojs/preact';

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact(), compress(), compressor()]
});