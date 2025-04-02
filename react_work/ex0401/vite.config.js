import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//eslint 문법검사
//prettierrc 소스정리
//vite 환경 설정


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //현재 port 5173으로 실행되는데 3000으로 포트 바꿈
  server : {
    port:3000,
  },
  //경로 참조할때 @ 사용하게 되면 src 밑에 있는 것 참조하는 설정
  resolve:{
    alias:{
      '@':'/src',

    }
  }
})
