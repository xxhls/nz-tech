import * as path from 'node:path';
import { pluginNodePolyfill } from '@rsbuild/plugin-node-polyfill';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  base: '/nz-tech/',
  root: path.join(__dirname),
  title: 'My Site',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/web-infra-dev/rspress',
      },
    ],
  },
  builderPlugins: [pluginNodePolyfill()],
});
