const loader = require('@graphql-tools/webpack-loader');

module.exports = {
  process: function (src, _filename, _config, _options) {
    return loader.call({ cacheable() {} }, src);
  },
};
