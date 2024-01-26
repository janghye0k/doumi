const files = {
  script: {
    label: 'Script',
    name: 'script.js',
    language: 'javascript',
    value: `const $btn = doumi.create$('button', { className: 'welcomeBtn', innerHTML: 'welcome' })\ndoumi.on($btn, 'click', (event) => console.log('welcome'))\ndocument.body.appendChild($btn)\n\nconsole.log('isNumber', doumi.isNumber(1), doumi.isNumber('1'))\n\nconst data = { a: '0' }\ndoumi.set(data, 'b.[1]', 'set data')\nconsole.log(data)\n`,
  },
  style: {
    label: 'Style',
    name: 'style.css',
    language: 'css',
    value: `body {\n\tpadding: 1rem;\n}\n\n.head {\n\tfont-size: 1.25rem;\n\tmargin-bottom: 1rem;\n}\n`,
  },
  html: {
    label: 'HTML',
    name: 'index.html',
    language: 'html',
    value: `<div class="head">Doumi demo</div>\n`,
  },
};

export default files;
