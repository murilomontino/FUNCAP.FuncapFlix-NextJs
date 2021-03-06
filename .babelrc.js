// @generated: @expo/next-adapter@2.1.52
// Learn more: https://docs.expo.dev/guides/using-nextjs/

module.exports = (api) => {
  api.cache(true)
  return {
    presets: ['@expo/next-adapter/babel'],
    plugins: [
      "@babel/plugin-transform-modules-commonjs",
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-proposal-private-methods",
      "@babel/plugin-transform-flow-strip-types",
      ['@babel/plugin-proposal-decorators', {
        legacy: true
      }],
      'babel-plugin-parameter-decorator',
      [
        'module-resolver',
        {
          alias: {
            '@/database': './database.ts',
            '@/assets': './source/assets',
            '@/components': './source/components',
            '@/context': './source/context',
            '@/theme': './source/theme',
            '@/data': './source/data',
            '@/forms': './source/forms',
            '@/global': './source/global',
            '@/hooks': './source/hooks',
            '@/modules': './source/modules',
            '@/navigations': './source/navigations',
            '@/redux': './source/redux',
            '@/screens': './source/screens',
            '@/services': './source/services',
            '@/types': './source/types',
            '@/utils': './source/utils',
            '@/animations': './source/animations',
            '@/public': './public',
            '@/domain': './backend/core/domain',
            '@/helpers': './backend/core/helpers',
            '@/shared': './backend/core/shared',
          },
        },
      ],
    ],
  };
}