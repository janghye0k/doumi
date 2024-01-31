const { capitalize } = require('doumi');
const fs = require('fs');
const path = require('path');

const doumiPath = path.resolve(__dirname, '../../doumi');
const docsPath = path.resolve(__dirname, '..', 'temp/methos');

// Create temp docs folder
fs.mkdirSync(docsPath, { recursive: true });

// Create category json
fs.writeFileSync(
  path.join(docsPath, '_category_.json'),
  JSON.stringify({
    label: `Methods`,
    position: 2,
    link: {
      type: 'generated-index',
    },
  })
);

const dts = fs
  .readFileSync(path.join(doumiPath, 'dist', 'index.d.ts'))
  .toString();

const makeRegExp = (functionName) =>
  new RegExp(
    `declare (const|function|async function) ${functionName}(\\:| |\\(|\\<)`,
    'gi'
  );
const makeEndRegExp = (functionName) =>
  new RegExp(
    `(declare (const|function|async function) ${functionName})(\\:| |\\(|\\<)(.|\\n)+?(\n\\/\\*\\*|type)`,
    'gi'
  );

fs.readdirSync(path.join(doumiPath, 'src')).forEach((dir, index) => {
  if (dir === 'index.ts') return;
  // Get all methods
  const utilFiles = fs.readdirSync(path.join(doumiPath, 'src', dir));
  const methods = [];
  utilFiles.forEach((utilFile) => {
    if (!utilFile.includes('.ts') || utilFile === 'index.ts') return;
    const methodName = utilFile.replace('.ts', '');

    // Extract function declaration
    const methodNameSpecials = Array.from(
      methodName.matchAll(/[^a-z|A-Z|0-9]/gi, '')
    );
    const fnName = methodNameSpecials.length
      ? methodNameSpecials.reduce((acc, item) => {
          const char = item.at(0);
          return acc.split(char).join(`\\${char}`);
        }, methodName)
      : methodName;

    const regExp = makeRegExp(fnName);
    const endRegExp = makeEndRegExp(fnName);
    const startIdx = dts.slice(0, regExp.exec(dts).index).lastIndexOf('/**');
    const endResults = endRegExp.exec(dts);
    const endIdx = endResults?.[0].length + endResults.index - 4;

    const functionText = dts.slice(startIdx, endIdx).trim();
    const jsdocs = functionText
      .slice(
        functionText.indexOf('/**') + '/**'.length,
        functionText.lastIndexOf('*/')
      )
      .replace(/ \*/gi, '');
    const declaration = functionText
      .slice(functionText.lastIndexOf('*/') + 2)
      .trim();

    // Extract items from jsdocs
    const items = jsdocs
      .split('@')
      .map((item, index) => (!index ? '' : '@') + item.trim());

    const params = [];
    const expampleItem = items.at(-1).includes('@example')
      ? items.pop().replace('@example', '').trim()
      : null;
    let since = '';
    const returns = [];
    let description = '';

    items.forEach((item) => {
      if (!item.startsWith('@')) return (description = item);
      if (item.includes('@since'))
        return (since = item.replace('@since', '').trim());
      if (item.includes('@returns')) {
        const target = item.replace('@returns', '').trim();
        const idx = target.lastIndexOf('}');
        const type =
          idx !== -1 ? target.slice(target.indexOf('{') + 1, idx) : '*';
        return returns.push({
          type,
          description: target.slice(idx + 1).trim(),
        });
      }
      if (item.includes('@param')) {
        const target = item.replace('@param', '').trim();
        const idx = target.lastIndexOf('}');
        const type =
          idx !== -1 ? target.slice(target.indexOf('{') + 1, idx) : '*';
        const data = target.slice(idx + 1).trim();
        return params.push({
          param: data.slice(0, data.indexOf(' ')),
          type: type === '*' ? 'any' : type,
          description: data.slice(data.indexOf(' ') + 1),
        });
      }
    });

    // Make content
    const datas = [`## ${methodName}`];
    if (description) datas.push(`> ${description}`);
    if (since) datas.push(`**Since**: *${since}*`);
    datas.push(`**Arguments**`);
    datas.push(`<DocsTable datas={${JSON.stringify(params)}} />`);
    datas.push(`**Returns**`);
    datas.push(`<DocsTable datas={${JSON.stringify(returns)}} />`);
    datas.push(`**Declaration**`);
    datas.push('```ts\n' + declaration + '\n```');
    if (expampleItem) {
      datas.push(`**Examples**`);
      datas.push('```js\n' + expampleItem + '\n```');
    }

    methods.push(datas.join('\n\n'));
  });

  const title = capitalize(dir);
  const description = `${title} Methods`;
  const content = `---\ntitle: ${title}\ndescription: ${description}\n---\n\nimport DocsTable from '@site/src/components/DocsTable';\n\n# ${description}\n\n${methods.join('\n\n<br/>\n\n')}`;

  fs.writeFileSync(path.join(docsPath, `${dir}.mdx`), content);
});
