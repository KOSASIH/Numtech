const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'https://tpqkje5s.api.sanity.io',
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
    secure: false,
  },
];

module.exports = PROXY_CONFIG;