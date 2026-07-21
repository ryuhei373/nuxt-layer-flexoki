export default defineAppConfig({
  ui: {
    // Nuxt UI 公式のカラー解決チェーンに乗せる。
    // flexoki-base は palette.css の @theme で定義されるカスタムスケール
    colors: {
      primary: 'orange',
      secondary: 'orange',
      neutral: 'flexoki-base',
    },
  },
});
