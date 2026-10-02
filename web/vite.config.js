import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "127.0.0.1", // слушать IPv4-адрес, чтобы браузер и туннель точно нас нашли
    // домены туннелей: без этого Vite отклонит запрос с чужого адреса
    allowedHosts: [".lhr.life", ".trycloudflare.com"],
  },
})
