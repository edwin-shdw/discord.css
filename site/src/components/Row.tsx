import * as React from 'react';

export default function Row({
  children,
}: {
  children: React.ReactNode,
}): React.ReactElement {
  return(
    <div
      style={{
        display: 'flex',
        gap: '0.5rem',
      }}>
      {children}
    </div>
  );
}
