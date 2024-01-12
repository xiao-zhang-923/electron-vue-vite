module.exports = {
  plugins: [
    require('autoprefixer'), // 自动添加浏览器前缀
    require('postcss-pxtorem')({
      rootValue: 19.2, // 设计图尺寸（单位为像素）/ 转换比例
      propList: ['*'], // 所有属性都会被转换
      unitPrecision: 5, //保留rem小数点多少位
      minPixelValue: 12, //px小于12的不会被转换
      replace: true, 
    }),
  ],
};
