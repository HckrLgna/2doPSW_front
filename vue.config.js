 
const path = require('path');
const webpack = require('webpack');

function resolveSrc(_path) {
  return path.join(__dirname, _path);
}

module.exports = {
  publicPath: "/2doPSW_front/",
  lintOnSave: false,
   
};
