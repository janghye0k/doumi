const { capitalize } = require('doumi');
const fs = require('fs');
const path = require('path');

const doumiPath = path.resolve(__dirname, '../../doumi/src');
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

fs.readdirSync(doumiPath).forEach((dir, index) => {
  if (dir === 'index.ts') return;

  // Get all methods
  const utilFiles = fs.readdirSync(path.join(doumiPath, dir));
  const methods = [];
  utilFiles.forEach((utilFile) => {
    if (!utilFile.includes('.ts') || utilFile === 'index.ts') return;
    const utilText = fs
      .readFileSync(path.join(doumiPath, dir, utilFile))
      .toString();

    const methodName = utilFile.replace('.ts', '');
    const method = `### ${methodName}`;
    methods.push(method);
  });

  const title = capitalize(dir);
  const description = `${title} Methods`;
  const content = `---\ntitle: ${title}\ndescription: ${description}\n---\n\n# ${description}\n\n${methods.join('\n\n')}`;

  fs.writeFileSync(path.join(docsPath, `${dir}.mdx`), content);
});
