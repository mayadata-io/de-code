// doczrc.js
import { css } from 'docz-plugin-css'

export default {
  title: ' 🎄  De - code',
  description: 'Style guide for MayaData products.',
  indexHtml: 'docs/index.html',
  codeSandbox: false,
  hashRouter: true,
  port: '9999',
  src: 'docs',
  dest: 'dist',
  base: '/de-code/', //gh-page

  plugins: [
    css({
      preprocessor: 'sass'
    })
  ],
  themeConfig: {
    mode: 'light',
    colors: {
      sidebarBg: 'white',
    },
    styles: {
      body: {
        fontFamily:
          '-apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif',
      },
      h1: {
        fontSize: '4em',
        fontWeight: 800,
      },
    },
  },
}
