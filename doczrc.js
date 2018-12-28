// doczrc.js
import { css } from 'docz-plugin-css'

export default {
  title: 'De - code',
  description:'Style guide for MayaData products.',
  indexHtml:'docs/index.html',
  codeSandbox: false,
  hashRouter:true,
  port: '9999',
  src: 'docs',
  dest: 'dist/docs',

  plugins: [
    css({
      preprocessor: 'sass'
    })
  ]
}
