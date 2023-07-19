import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "The Tech Odyssey of Shaun Li",
  description: "Shaun Li's Learning Journal: A journey of continuous learning, insights, and personal growth. Explore valuable notes and discoveries as we embark on an enlightening adventure through the realms of knowledge together. Be inspired and enrich your mind in the company of Shaun Li's Learning Journal.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
