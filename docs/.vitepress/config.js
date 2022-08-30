export default {
  title: 'Guard UI',
  base: '/guardui/',
  themeConfig: {
    siteTitle: 'Guard UI',
    // logo: '/authing-logo.svg',

    algolia: {
      appId: 'XO4ITI7GEQ',
      apiKey: '7175502f11c76d375047ebea8b71e9ac',
      indexName: 'guardui'
    },

    nav: [
      { text: 'Guide', link: '/guide/'},
      { text: 'Component', link: '/component/' },
      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' }
      //   ]
      // },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lancemao/guardui' }
    ],

    sidebar: {
      // This sidebar gets displayed when user is
      // under `guide` directory.
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Playground', link: '/guide/playground' },
          ]
        },
        {
          text: 'Customization',
          items: [
            { text: 'Background Image', link: '/guide/background-image' },
            { text: 'Accent Color', link: '/guide/accent-color' },
          ]
        },
        {
          text: 'More Pages',
          items: [
            { text: 'Register', link: '/guide/register' },
            { text: 'Change Password', link: '/guide/change-password' },
          ]
        }
      ],

      '/component/': [
        {
          text: 'General',
          collapsible: true,
          items: [
            {
              text: 'Element', link: '/component/element'
            },
            {
              text: 'Text', link: '/component/text'
            },
            {
              text: 'Button', link: '/component/button'
            },
            {
              text: 'Input', link: '/component/input'
            },
            {
              text: 'Image', link: '/component/image'
            }
          ]
        },
        {
          text: 'Authentication',
          collapsible: true,
          items: [
            {
              text: 'Guard', link: '/component/guard'
            },
            {
              text: 'GuardContainer', link: '/component/guard-container'
            },
            {
              text: 'AppLogo', link: '/component/app-logo'
            },
            {
              text: 'AppName', link: '/component/app-name'
            },
            {
              text: 'AccountInput', link: '/component/account-input'
            },
            {
              text: 'PasswordInput', link: '/component/password-input'
            },
            {
              text: 'LoginButton', link: '/component/login-button'
            },
            {
              text: 'ErrorText', link: '/component/error-text'
            }
          ]
        }
      ]
    }
  }
}