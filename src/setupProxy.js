const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8010',	// 서버 URL or localhost:설정한포트번호
      changeOrigin: true,
    })
  );

  // /favicon.ico와 /logo192.png 요청을 무시하여 프록시로 보내지 않음
  app.get('/favicon.ico', (req, res) => res.status(204));
  app.get('/logo192.png', (req, res) => res.status(204));
};