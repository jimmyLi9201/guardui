export default {
  title: 'Guard UI',
  base: '/guardui/',
  themeConfig: {
    siteTitle: 'Guard UI',
    logo: '/authing-logo.svg',
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
    sidebar: {
      // This sidebar gets displayed when user is
      // under `guide` directory.
      '/guide/': [
        {
          text: 'Guide',
          link: '/guide/',
          items: [
            { text: 'Quick start', link: '/guide/quick-start' },
          ]
        }
      ],

      '/component/': [
        {
          text: '',
          link: '/component/',
          items: [
            {
              text: 'General', 
              items: [
                {
                  text: 'View', link: '/component/view'
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
              text: 'Common', 
              items: [
                {
                  text: 'AppLogo', link: '/component/app-logo'
                },
                {
                  text: 'AppName', link: '/component/app-name'
                },
                {
                  text: 'ErrorText', link: '/component/error-text'
                }
              ]
            },
            {
              text: 'Login', 
              items: [
                {
                  text: 'AccountInput', link: '/component/account-input'
                },
                {
                  text: 'PasswordInput', link: '/component/password-input'
                },
                {
                  text: 'LoginButton', link: '/component/login-button'
                }
              ]
            },
          ]
        }
      ]
    }
  },
  markdown: {
    lineNumbers: true
  }
}