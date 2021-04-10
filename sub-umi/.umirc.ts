import { defineConfig } from 'umi'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  title: 'sub-umi',
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/a', component: '@/pages/A' },
    { path: '/b', component: '@/pages/B' },
  ],
  devServer: {
    port: 1510,
  },
  proxy: {
    '/api': {
      target: 'http://localhost:2000',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/',
      },
    },
  },
  fastRefresh: {},
})
