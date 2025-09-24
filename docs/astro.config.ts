import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightThemeRapide from 'starlight-theme-rapide'

export default defineConfig({
  integrations: [
    starlight({
      // The head section for Netlify Identity has been removed.
      credits: true,
      editLink: {
        baseUrl: 'https://github.com/HiDeoo/starlight-theme-rapide/edit/main/docs/',
      },
      plugins: [starlightThemeRapide()],
      sidebar: [
        {
          label: 'Start Here',
          items: ['getting-started', 'customization'],
        },
        {
          label: 'Resources',
          items: [{ label: 'Plugins and Tools', link: '/resources/starlight/' }],
        },
        {
          label: 'Examples',
          autogenerate: { directory: 'examples' },
        },
      ],
      social: [
        { href: 'https://bsky.app/profile/hideoo.dev', icon: 'blueSky', label: 'Bluesky' },
        { href: 'https://github.com/HiDeoo/starlight-theme-rapide', icon: 'github', label: 'GitHub' },
      ],
      title: 'Starlight Rapide',
    }),
  ],
  // This site URL is now correct for your domain.
  site: 'https://codes.peditx.ir',
})
