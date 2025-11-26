import { defineConfig as defineViteConfig, mergeConfig } from 'vite';
import { defineConfig as defineVitestConfig } from 'vitest/config';
import react from '@vitejs/plugin-react'

const viteConfig = defineViteConfig({
  // for dev
  server: {
    port: 8080,
  },
  plugins: [react()],
});

const vitestConfig = defineVitestConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: "setup.ts"
}});

export default mergeConfig(viteConfig, vitestConfig);