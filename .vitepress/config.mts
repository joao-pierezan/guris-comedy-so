import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Guris' Comedy Club",
  description: "Documento de visão do Guris' Comedy Club",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: [
      {
        text: 'Links Úteis',
        items: [
          { text: '', link: '/markdown-examples' },
          { text: 'Diagrama de Classes', link: 'https://app.diagrams.net/#G1CgMqT4UGFpvdx0XUvF17QpHUdkYI0UkT#%7B%22pageId%22%3A%22OWyEm38nAWpxvRS8QmXi%22%7D' },
          { text: 'Diagrama de Caso de Uso', link: 'https://app.diagrams.net/#G1ozGlITNWDb8Tm11aC3IAst74ndpEKll1#%7B%22pageId%22%3A%22B2ubYMIL8hGskjKbpCVO%22%7D' },
          { text: 'Figma do Comedy Club', link: 'https://www.figma.com/design/vQwvF9M91bJy4x4s4AAY7G/COMEDY-CLUB?node-id=0-1&p=f' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
