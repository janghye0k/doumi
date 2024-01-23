const path = require('path');
const babelPlugin = require('@rollup/plugin-babel');
const terser = require('@rollup/plugin-terser');
const { dts } = require('rollup-plugin-dts');
const resolve = require('@rollup/plugin-node-resolve');
const { default: esbuild } = require('rollup-plugin-esbuild');
const createBabelConfig = require('./babel.config.js');
const pkg = require('./package.json');

const extensions = ['.js', '.ts'];

const banner =
  `// ${pkg.name.toUpperCase()} v${pkg.version}\n` +
  `// ${pkg.repository.url}\n` +
  `// (c) 2024 - ${new Date().getFullYear()} ${pkg.author}\n` +
  '// Doumi may be freely distributed under the MIT license.\n';

function getBabelOptions(targets) {
  return {
    ...createBabelConfig({ env: (env) => env === 'build' }, targets),
    extensions,
    comments: false,
    babelHelpers: 'bundled',
  };
}

function getEsbuild(target, env = 'development') {
  return esbuild({
    minify: env === 'production',
    target,
    tsconfig: path.resolve('./tsconfig.json'),
  });
}

function createDeclarationConfig(input, output) {
  return {
    input,
    output: {
      dir: output,
    },
    plugins: [dts()],
  };
}

function createESMConfig(input, output) {
  return {
    input,
    output: { file: output, format: 'esm', banner },
    plugins: [resolve({ extensions }), getEsbuild('node12')],
  };
}

function createCommonJSConfig(input, output) {
  return {
    input,
    output: {
      file: `${output}.js`,
      format: 'cjs',
      esModule: false,
      banner,
    },
    plugins: [
      resolve({ extensions }),
      babelPlugin(getBabelOptions({ ie: 11 })),
    ],
  };
}

/**
 *
 * @param {string} input
 * @param {string} output
 * @param {'development' | 'production'} env
 */
function createUMDConfig(input, output, env) {
  const capitalize = (s) => s.slice(0, 1).toUpperCase() + s.slice(1);
  let name = pkg.name;
  const splited = output.slice('dist/'.length).split('/');
  for (let i = splited.length - 1; i >= 0; i -= 1) {
    if (!['index', pkg.name].includes(splited[i])) {
      name += capitalize(splited[i]);
      break;
    }
  }
  return {
    input,
    output: {
      file: `${output}${env === 'production' ? '.min' : ''}.js`,
      format: 'umd',
      name,
      banner,
    },
    plugins: [
      resolve({ extensions }),
      babelPlugin({ ...getBabelOptions({ ie: 11 }), comments: true }),
      ...(env === 'production' ? [terser()] : []),
    ],
  };
}

const entry = 'src/index.ts';

module.exports = [
  createDeclarationConfig(entry, 'dist/'),
  createCommonJSConfig(entry, 'dist/index'),
  createESMConfig(entry, 'dist/index.esm.js'),
  createUMDConfig(entry, `dist/${pkg.name}`, 'development'),
  createUMDConfig(entry, `dist/${pkg.name}`, 'production'),
];
