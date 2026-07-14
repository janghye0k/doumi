import { defineConfig } from 'vitest/config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    coverage: {
      provider: 'v8',
      include: ['src/**/*.ts'],
    },
    alias: {
      array: path.resolve(root, 'src/array'),
      collection: path.resolve(root, 'src/collection'),
      dom: path.resolve(root, 'src/dom'),
      function: path.resolve(root, 'src/function'),
      lang: path.resolve(root, 'src/lang'),
      math: path.resolve(root, 'src/math'),
      object: path.resolve(root, 'src/object'),
      string: path.resolve(root, 'src/string'),
    },
  },
});
