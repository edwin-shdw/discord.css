import React from 'react';
import Layout from '@theme/Layout';

export default function Preview() {
  return (
    <Layout
      title="Preview"
      description="Get a preview of some components and it's possible use cases."
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexGrow: 1,
          height: '100%',
          fontSize: '1.5rem',
        }}>
        <p>
          Edit <code>pages/helloReact.js</code> and save to reload.
        </p>
      </div>
    </Layout>
  );
}
