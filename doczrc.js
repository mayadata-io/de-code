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
      white: '#FFFFFF',
      grayExtraLight: '#EEF1F5',
      grayLight: '#CED4DE',
      gray: '#7D899C',
      grayDark: '#383842',
      grayExtraDark: '#0F0F11',
      dark: '#23232A',
      blue: '#0063FF',

      /** properties bellow depends on mode select */
      primary: '#0063FF',
      text: '#383842',
      link: '#0063FF',
      sidebarBg: 'white',
      footerText: '#383842',
      sidebarText: '#23232A',
    },
    styles: {
      body: {
        fontFamily: '-apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif',
        fontSize: 14, //default
      },
      h1: {
        fontSize: '4em',
        fontWeight: 800,
      },
    },
  },
}
