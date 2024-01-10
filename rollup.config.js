const path = require('path');
const babelPlugin = require('@rollup/plugin-babel');
const terser = require('@rollup/plugin-terser');
const { dts } = require('rollup-plugin-dts');
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
    comments: true,
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
    plugins: [getEsbuild('node12')],
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
    plugins: [babelPlugin(getBabelOptions({ ie: 11 }))],
  };
}

function createUMDConfig(input, output, env) {
  let name = pkg.name;
  const fileName = output.slice('dist/umd/'.length);
  const capitalize = (s) => s.slice(0, 1).toUpperCase() + s.slice(1);
  if (fileName !== 'index') {
    name += fileName.replace(/(\w+)\W*/g, (_, p) => capitalize(p));
  }
  return {
    input,
    output: {
      file: `${output}.${env}.js`,
      format: 'umd',
      name,
      banner,
    },
    plugins: [
      babelPlugin(getBabelOptions({ ie: 11 })),
      ...(env === 'production' ? [terser()] : []),
    ],
  };
}

module.exports = function (args) {
  let target = Object.keys(args).find((key) => key.startsWith('config-'));
  if (target) {
    target = target.slice('config-'.length).replace(/_/g, '/');
  } else {
    target = 'index';
  }
  return [
    createDeclarationConfig(`src/${target}.js`, 'dist'),
    createDeclarationConfig(`src/${target}.js`, 'dist/esm'),
    createCommonJSConfig(`src/${target}.js`, `dist/${target}`),
    createESMConfig(`src/${target}.js`, `dist/esm/${target}.js`),
    createUMDConfig(`src/${target}.js`, `dist/umd/${target}`, 'development'),
    createUMDConfig(`src/${target}.js`, `dist/umd/${target}`, 'production'),
  ];
};

module.exports.entries = [];
