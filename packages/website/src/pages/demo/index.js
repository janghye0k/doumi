import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import { Resizable } from 're-resizable';
import clsx from 'clsx';
import Editor, { useMonaco } from '@monaco-editor/react';
import files from './files';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { useColorMode } from '@docusaurus/theme-common';
import { debounce } from 'doumi';
import Console from '@site/src/components/Console';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function DemoPage({ libSource }) {
  const monaco = useMonaco();
  const { colorMode } = useColorMode();
  const codeTheme = useMemo(
    () => (colorMode === 'dark' ? 'vs-dark' : 'light'),
    [colorMode]
  );

  const consoleRef = useRef(null);
  const $iframe = useRef(null);
  const $editors = useRef({
    html: null,
    style: null,
    script: null,
  });

  const [srcDoc, setSrcDoc] = useState('');

  const save = useCallback(
    debounce(() => {
      const datas = Object.values($editors.current).map((item) =>
        item.getValue()
      );
      if (datas.every((item) => !item.trim().length)) {
        setSrcDoc('');
        return;
      }

      const [html, style, script] = datas;
      const doc = `
        <!doctype html>
        <html lang="en">
          <head>
            <link href="https://cdn.jsdelivr.net/npm/reset-css@5.0.2/reset.min.css" rel="stylesheet">
            <style>${style}</style>
            <script defer src="/lib/html-console-output.js"></script>
            <script defer src="https://cdn.jsdelivr.net/npm/doumi/dist/doumi.js"></script>
            <script defer type="text/javascript">${script}</script>
          </head>
          <body>
            ${html}
          </body>
        </html>
      `;
      setSrcDoc((cur) => (cur === doc ? doc + '  ' : doc));
      consoleRef.current?.clearLogs();
    }, 1000),
    []
  );

  const handleSave = useCallback(
    (event) => {
      if (!(event.ctrlKey && event.key === 's')) return;
      event.preventDefault();
      monaco.editor
        .getEditors()
        .forEach((editor) =>
          editor.getAction('editor.action.formatDocument').run()
        );
      save();
    },
    [save, monaco]
  );

  useEffect(() => {
    save();
  }, [save]);

  useEffect(() => {
    window.addEventListener('keydown', handleSave);
    return () => window.removeEventListener('keydown', handleSave);
  }, [handleSave]);

  useEffect(() => {
    if (!monaco?.languages) return;
    // validation settings
    monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: true,
      noSyntaxValidation: false,
    });

    // compiler options
    monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
      target: monaco.languages.typescript.ScriptTarget.ES2015,
      allowNonTsExtensions: true,
    });

    // extra libraries
    monaco.languages.typescript.javascriptDefaults.addExtraLib(libSource);
  }, [monaco]);

  return (
    <>
      <Resizable
        className={styles.bordered}
        style={{ borderRightWidth: '1px' }}
        defaultSize={{ width: '50%' }}
        enable={{
          top: false,
          right: true,
          bottom: false,
          left: false,
          topRight: false,
          bottomRight: false,
          bottomLeft: false,
          topLeft: false,
        }}
      >
        <div
          className={clsx(styles.codeContainer, styles.editorContainer)}
          style={{ height: '100%', display: 'flex' }}
        >
          <Tabs>
            {Object.entries(files).map(([key, data]) => (
              <TabItem key={key} value={key} label={data.label}>
                <Editor
                  theme={codeTheme}
                  path={data.name}
                  defaultLanguage={data.language}
                  defaultValue={data.value}
                  onMount={(editor) => ($editors.current[key] = editor)}
                  onChange={save}
                />
              </TabItem>
            ))}
          </Tabs>
        </div>
      </Resizable>
      <div className={styles.verticalResize} style={{ width: '100%' }}>
        <Resizable
          style={{ display: 'flex' }}
          defaultSize={{ height: '70%' }}
          enable={{
            top: false,
            right: false,
            bottom: true,
            left: false,
            topRight: false,
            bottomRight: false,
            bottomLeft: false,
            topLeft: false,
          }}
        >
          <div className={styles.codeContainer} style={{ flexGrow: 1 }}>
            <div style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem' }}>
              Preview
            </div>
            <iframe
              ref={$iframe}
              style={{
                backgroundColor: srcDoc.length ? 'white' : undefined,
                flexGrow: 1,
                overflow: 'auto',
              }}
              srcDoc={srcDoc}
              title="output"
              sandbox="allow-scripts"
              width="100%"
              height="100%"
            />
          </div>
        </Resizable>
        <Console ref={consoleRef} style={{ height: '100%' }} />
      </div>
    </>
  );
}

export default function Demo() {
  const { siteConfig } = useDocusaurusContext();

  const [libSource, setLibSource] = useState('');

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/doumi/dist/index.d.ts`.replace('//', '/')
    )
      .then((res) => res.text())
      .then((text) => {
        const declaration = `declare namespace doumi {\n${text
          .substring(0, text.lastIndexOf('export {'))
          .replace(/declare const/gi, 'const')
          .replace(/declare function/gi, 'function')}\n}`;
        setLibSource(declaration);
      });
  }, []);

  return (
    <Layout title="Demo" description="Utility library for Javascript">
      <main className={styles.horizontalResize}>
        {libSource.length ? <DemoPage libSource={libSource} /> : null}
      </main>
    </Layout>
  );
}
