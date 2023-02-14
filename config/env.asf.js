const path = require('path');

module.exports = {
    galleryViewPath: 'https://echarts.tencent.codeon.cn/examples/${lang}/view.html?c=',
    galleryEditorPath: 'https://echarts.tencent.codeon.cn/examples/${lang}/editor.html?c=',
    handbookPath: 'https://echarts.tencent.codeon.cn/handbook/${lang}/',
    websitePath: 'https://echarts.tencent.codeon.cn',

    imagePath: 'asset/img/',
    gl: {
        imagePath: 'asset/gl/img/',
    },

    releaseDestDir: path.resolve(__dirname, '../../echarts-website'),
    ecWWWGeneratedDir: path.resolve(__dirname, '../../echarts-www/_generated')
};
