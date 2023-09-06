const version = require('./package.json').version;
export default {
  // more father 4 config: https://github.com/umijs/father-next/blob/master/docs/config.md
  esm: {
    output:'es'
  },
  cjs: {
    output:'lib'
  },
  umd: {
    entry: 'src/index', // 默认构建入口文件
    output:'dist',
    name:'L7',
    externals:{
      'mapbox-gl': 'mapboxgl',
    },
    chainWebpack: (memo, { env, webpack, createCSSRule }) => {
      // 设置 alias
    },
  },
  autoprefixer: {
    browsers: ['IE 11', 'last 2 versions'],
  },
  define:{
    'process.env.VERSION': JSON.stringify(version),
  },
  extraBabelPresets: [
    '@babel/preset-typescript'
  ],
  extraBabelPlugins: [
    // 开发模式下以原始文本引入，便于调试
    [
      // import glsl as raw text
      'babel-plugin-inline-import',
      {
        extensions: [
          '.glsl'
        ]
      }
    ],
    [
      'transform-import-css-l7'
    ],
  ],
};
