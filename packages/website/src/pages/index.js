import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import CodeBlock from '@theme/CodeBlock';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description={siteConfig.tagline}>
      <header className={styles.heroBanner}>
        <div className="container">
          <img className="doumi-logo" src="images/doumi_icons.png" alt="" />
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/getting-started"
            >
              Documentation
            </Link>
            <Link className="button button--secondary button--lg" to="/demo">
              Demo
            </Link>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <CodeBlock language="javascript" showLineNumbers>
          {`const obj = { x: 1, y: 10, z: 100 }\ndoumi.isObject(obj) // true\ndoumi.omit(obj, 'z') // { x: 1, y: 10 }\ndoumi.forEach(obj, (value, key) => {\n    console.log(value, key)\n    // 1 x\n    // 10 y\n    // 100 z\n})\n\nconst $div = doumi.create$('div', { className: 'node', innerHTML: 'welcome' })\n// <div class="node">welcome</div>`}
        </CodeBlock>
      </main>
    </Layout>
  );
}
