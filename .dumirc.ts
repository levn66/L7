import { defineConfig } from 'dumi';
import { link } from 'fs';
import path from 'path';
export default defineConfig({
    outputPath: 'docs-dist',
    base: '/',
    favicons: ['https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png'],
    
    resolve: {
        docDirs: ['dev-demos'],
      },
      alias: {
        pkg: path.join(__dirname, 'packages/pkg/src'),
      },
    autoAlias: true,
    themeConfig: {
        name: 'L7 开发',
        
        logo: 'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',

        // nav: [
        //     {
        //       title: 'bugs',
        //       link: '/bugs',
        //     },
        //    {   
        //         title: '特性',
        //         link: '/features/point',
        //       },
        //     //   {
        //     //     title: '图库',
        //     //     link: '/gallery',
        //     //   },
        //     //   {
        //     //     title: '瓦片',
        //     //     link: '/tile',
        //     //   },
        //     //   {
        //     //     title: '栅格',
        //     //     link: '/raster',
        //     //   },
        //     //   {
        //     //     title: '组件',
        //     //     link: '/component',
        //     //   },
        //     //   {
        //     //     title: '绘制组件',
        //     //     link: '/draw',
        //     //   },
        //     //   {
        //     //     title: 'GitHub',
        //     //     link: 'https://github.com/antvis/L7',
        //     //   },
            
        // ],  
     
    },
    externals: {
        react: 'window.React',
        'react-dom': 'window.ReactDOM',
        antd: 'window.antd',
        lodash: '_',
        fetch: 'window.fetch',
      },
    links: [{ href: 'https://gw.alipayobjects.com/os/lib/antd/4.16.13/dist/antd.css', rel: 'preload' }],
    scripts: [
        'https://gw.alipayobjects.com/os/lib/whatwg-fetch/3.6.2/dist/fetch.umd.js',
        'https://gw.alipayobjects.com/os/lib/react/17.0.2/umd/react.profiling.min.js',
        'https://gw.alipayobjects.com/os/lib/react-dom/17.0.2/umd/react-dom.profiling.min.js',
        'https://gw.alipayobjects.com/os/lib/react/17.0.2/umd/react.production.min.js',
        'https://gw.alipayobjects.com/os/lib/react-dom/17.0.2/umd/react-dom.production.min.js',
        // 'https://gw.alipayobjects.com/os/lib/antd/4.16.13/dist/antd-with-locales.js',
        'https://gw.alipayobjects.com/os/lib/antd/4.19.4/dist/antd.js',
        /** lodash */
        'https://gw.alipayobjects.com/os/lib/lodash/4.17.20/lodash.min.js',
      ],
    
});