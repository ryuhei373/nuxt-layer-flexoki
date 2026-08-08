import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

// Layer の nuxt.config 内の相対パスは利用側プロジェクト基準で解決されるため、
// 自ディレクトリ基準の完全パスに解決してから渡す
const currentDir = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  $meta: {
    name: 'flexoki',
  },
  css: [
    // palette.css（@theme）はここに置いても Tailwind パイプラインを通らないため、
    // 利用側のルート CSS で @import してもらう。プレーン CSS のみ登録する
    join(currentDir, './app/assets/css/nuxt-ui.css'),
  ],
});
