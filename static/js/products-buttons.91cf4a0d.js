(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./docs/products/buttons.mdx":function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return d});var o=n("./node_modules/react/index.js"),a=n.n(o),r=n("./node_modules/@mdx-js/tag/dist/index.js"),s=n("./node_modules/docz/dist/index.m.js");function c(t){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function p(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function u(t,e){return!e||"object"!==c(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var d=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=u(this,b(e).call(this,t))).layout=null,n}var n,o,c;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(e,a.a.Component),n=e,(o=[{key:"render",value:function(){var t=this.props,e=t.components,n=i(t,["components"]);return a.a.createElement(r.MDXTag,{name:"wrapper",components:e},a.a.createElement(r.MDXTag,{name:"h1",components:e,props:{id:"buttons"}},"Buttons"),a.a.createElement(r.MDXTag,{name:"h2",components:e,props:{id:"button-variations"}},"Button variations"),a.a.createElement(r.MDXTag,{name:"h3",components:e,props:{id:"primary"}},"Primary"),a.a.createElement(s.e,{__position:0,__code:'<button class="btn btn-primary">Primary</button>',__scope:{props:this?this.props:n}},a.a.createElement("button",{class:"btn btn-primary"},"Primary")),a.a.createElement(r.MDXTag,{name:"h3",components:e,props:{id:"secondary"}},"Secondary"),a.a.createElement(s.e,{__position:1,__code:'<button class="btn btn-secondary">Secondary</button>',__scope:{props:this?this.props:n}},a.a.createElement("button",{class:"btn btn-secondary"},"Secondary")),a.a.createElement(r.MDXTag,{name:"h3",components:e,props:{id:"warning"}},"Warning"),a.a.createElement(s.e,{__position:2,__code:'<button class="btn btn-warning">Warning</button>',__scope:{props:this?this.props:n}},a.a.createElement("button",{class:"btn btn-warning"},"Warning")),a.a.createElement(r.MDXTag,{name:"h3",components:e,props:{id:"danger"}},"Danger"),a.a.createElement(s.e,{__position:3,__code:'<button class="btn btn-danger">Danger</button>',__scope:{props:this?this.props:n}},a.a.createElement("button",{class:"btn btn-danger"},"Danger")),a.a.createElement(r.MDXTag,{name:"h3",components:e,props:{id:"dark"}},"Dark"),a.a.createElement(s.e,{__position:4,__code:'<button class="btn btn-dark">Dark</button>',__scope:{props:this?this.props:n}},a.a.createElement("button",{class:"btn btn-dark"},"Dark")),a.a.createElement(r.MDXTag,{name:"h2",components:e,props:{id:"button-group"}},"Button group"),a.a.createElement(r.MDXTag,{name:"h3",components:e,props:{id:"button-group-with-icons"}},"Button group with icons"),a.a.createElement(s.e,{__position:5,__code:'<div class="btn-group" role="group" aria-label="Basic example">\n  <button type="button" class="btn btn-secondary">\n    <i class="fa fa-area-chart" aria-hidden="true" />\n  </button>\n  <button type="button" class="btn btn-secondary">\n    <i class="fa fa-pencil-square-o" aria-hidden="true" />\n  </button>\n  <button type="button" class="btn btn-secondary">\n    <i class="fa fa-trash-o" aria-hidden="true" />\n  </button>\n</div>',__scope:{props:this?this.props:n}},a.a.createElement("div",{class:"btn-group",role:"group","aria-label":"Basic example"},a.a.createElement("button",{type:"button",class:"btn btn-secondary"},a.a.createElement("i",{class:"fa fa-area-chart","aria-hidden":"true"})),a.a.createElement("button",{type:"button",class:"btn btn-secondary"},a.a.createElement("i",{class:"fa fa-pencil-square-o","aria-hidden":"true"})),a.a.createElement("button",{type:"button",class:"btn btn-secondary"},a.a.createElement("i",{class:"fa fa-trash-o","aria-hidden":"true"})))),a.a.createElement(r.MDXTag,{name:"h3",components:e,props:{id:"button-group-with-text"}},"Button group with text"),a.a.createElement(s.e,{__position:6,__code:'<div class="btn-group" role="group" aria-label="Basic example">\n  <button type="button" class="btn btn-secondary">\n    Left\n  </button>\n  <button type="button" class="btn btn-secondary">\n    Middle\n  </button>\n  <button type="button" class="btn btn-secondary">\n    Right\n  </button>\n</div>',__scope:{props:this?this.props:n}},a.a.createElement("div",{class:"btn-group",role:"group","aria-label":"Basic example"},a.a.createElement("button",{type:"button",class:"btn btn-secondary"},"Left"),a.a.createElement("button",{type:"button",class:"btn btn-secondary"},"Middle"),a.a.createElement("button",{type:"button",class:"btn btn-secondary"},"Right"))))}}])&&p(n.prototype,o),c&&p(n,c),e}();d.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=products-buttons.ab6f9c47d7f9534a308f.js.map