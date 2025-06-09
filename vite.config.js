import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '',           // GitHub Pagesでルート公開したいなら空文字
  plugins: [react()],
  build: {
    outDir: 'docs'    // ビルド結果を docs フォルダに
  }
})