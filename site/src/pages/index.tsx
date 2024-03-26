import React, { CSSProperties } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

const iconImageStyle: CSSProperties = {
  blockSize: '5rem',
  inlineSize: '100%',
  marginBlockEnd: '1rem',
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started/introduction">
            Get started
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/preview">
            Get a preview
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      description="Discord.css is a easy to handle stylesheet based on Discord's style. It's ideal for creating previews."
    >
      <HomepageHeader />
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col">
            <svg style={iconImageStyle} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className="bi bi-arrow-left-right" viewBox="0 0 16 16">
              <path fillRule="evenodd"
                    d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"/>
            </svg>
            <p className="text--center text--semibold">
              Thanks to logical properties the flow direction doesn't matter.
              Discord.css will keep the design clean.
            </p>
          </div>
          <div className="col">
            <svg style={iconImageStyle} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-code"
                 viewBox="0 0 16 16">
              <path
                d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8z"/>
            </svg>
            <p className="text--center text--semibold">
              Jump right into building - use the CDN, install it via package manager or download the source code.
            </p>
          </div>
          <div className="col">
            <svg style={iconImageStyle} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-copy"
                 viewBox="0 0 16 16">
              <path fillRule="evenodd"
                    d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
            </svg>
            <p className="text--center text--semibold">
              Create the most realistic previews with discord.css
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
