import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightThemeRapide from 'starlight-theme-rapide'

export default defineConfig({
  integrations: [
    starlight({
      // ######### START: این قسمت اضافه شده است #########
      head: [
        {
          tag: 'script',
          // Adds the Netlify Identity widget to all pages
          attrs: {
            src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
            defer: true,
          },
        },
      ],
      // ######### END: این قسمت اضافه شده است #########
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
  // نکته مهم: بهتر است این آدرس را به آدرس سایت خودتان تغییر دهید
  site: 'https://codes.peditx.ir',
})

