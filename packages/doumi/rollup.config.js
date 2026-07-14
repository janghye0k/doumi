import { createRequire } from 'node:module';
import resolve from '@rollup/plugin-node-resolve';
import oxc from 'unplugin-oxc/rollup';
import terser from '@rollup/plugin-terser';
import { dts } from 'rollup-plugin-dts';

const require = createRequire(import.meta.url);
const pkg = require('./package.json');

const extensions = ['.js', '.ts'];

const banner =
  `// ${pkg.name.toUpperCase()} v${pkg.version}\n` +
  `// ${pkg.repository.url}\n` +
  `// (c) 2024 - ${new Date().getFullYear()} ${pkg.author}\n` +
  '// Doumi may be freely distributed under the MIT license.\n';

function getOxcPlugin() {
  return oxc({
    transform: {
      target: 'es2015',
    },
  });
}

function createDeclarationConfig(input, output) {
  return {
    input,
    output: { dir: output },
    plugins: [dts()],
  };
}

function createESMConfig(input, output) {
  return {
    input,
    output: { file: output, format: 'esm', banner },
    plugins: [resolve({ extensions }), getOxcPlugin()],
  };
}

function createCJSConfig(input, output) {
  return {
    input,
    output: { file: output, format: 'cjs', esModule: false, banner },
    plugins: [resolve({ extensions }), getOxcPlugin()],
  };
}

function createUMDConfig(input, output, env) {
  return {
    input,
    output: {
      file: `${output}${env === 'production' ? '.min' : ''}.js`,
      format: 'umd',
      name: pkg.name,
      banner,
    },
    plugins: [
      resolve({ extensions }),
      getOxcPlugin(),
      ...(env === 'production' ? [terser()] : []),
    ],
  };
}

const entry = 'src/index.ts';

export default [
  createDeclarationConfig(entry, 'dist/'),
  createCJSConfig(entry, 'dist/index.cjs'),
  createESMConfig(entry, 'dist/index.js'),
  createUMDConfig(entry, 'dist/doumi', 'development'),
  createUMDConfig(entry, 'dist/doumi', 'production'),
];
