import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightThemeRapide from 'starlight-theme-rapide'

export default defineConfig({
  integrations: [
    starlight({
      credits: true,
      editLink: {
        // <-- اصلاح شد: به ریپازیتوری شما اشاره می‌کند
        baseUrl: 'https://github.com/peditx/starlight-theme-rapide/edit/main/src/content/docs/',
      },
      plugins: [starlightThemeRapide()],
      sidebar: [
        // این بخش مربوط به سلیقه شماست و صحیح است
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
        // <-- اصلاح شد: به ریپازیتوری شما اشاره می‌کند
        { href: 'https://github.com/peditx/starlight-theme-rapide', icon: 'github', label: 'GitHub' },
      ],
      // <-- اصلاح شد: عنوان سایت شما
      title: 'Codes PeDitX', // یا هر نام دیگری که برای پروژه‌ات می‌پسندی
    }),
  ],
  site: 'https://codes.peditx.ir',
})
