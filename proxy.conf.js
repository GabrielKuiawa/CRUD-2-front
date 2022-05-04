
const proxy = [
  {
    context: '/',
    target: 'http://localhost:3003',
    pathRewrite: {'^/api' : ''}
  }
];
module.exports = proxy;