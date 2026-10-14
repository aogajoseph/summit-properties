import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        questionsBeforeChoosingHome:
          'blog/questions-before-choosing-a-home/index.html',
        evaluatePropertyPotential:
          'blog/evaluate-property-potential/index.html',
      },
    },
  },
})
