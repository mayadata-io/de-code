export const imports = {
  'index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "index" */ 'index.mdx'),
  'pages/alerts.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "pages-alerts" */ 'pages/alerts.mdx'),
  'pages/avatars.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "pages-avatars" */ 'pages/avatars.mdx'),
  'pages/badge.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "pages-badge" */ 'pages/badge.mdx'),
  'pages/banners.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "pages-banners" */ 'pages/banners.mdx'),
  'pages/branding.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "pages-branding" */ 'pages/branding.mdx'),
  'pages/breadcrumb.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "pages-breadcrumb" */ 'pages/breadcrumb.mdx'),
  'pages/buttons.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "pages-buttons" */ 'pages/buttons.mdx'),
  'pages/cards.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "pages-cards" */ 'pages/cards.mdx'),
  'pages/colors.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "pages-colors" */ 'pages/colors.mdx'),
  'pages/dropdown.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "pages-dropdown" */ 'pages/dropdown.mdx'),
  'pages/input.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "pages-input" */ 'pages/input.mdx'),
  'pages/modal.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "pages-modal" */ 'pages/modal.mdx'),
  'pages/list.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "pages-list" */ 'pages/list.mdx'),
  'pages/navs.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "pages-navs" */ 'pages/navs.mdx'),
  'pages/pagination.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "pages-pagination" */ 'pages/pagination.mdx'),
  'pages/popover.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "pages-popover" */ 'pages/popover.mdx'),
  'pages/table.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "pages-table" */ 'pages/table.mdx'),
  'pages/tooltip.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "pages-tooltip" */ 'pages/tooltip.mdx'),
}
