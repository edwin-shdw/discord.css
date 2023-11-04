import * as React from 'react';

export default function Row({
  children,
  gapWidth = '0.5rem',
}: {
  children: React.ReactNode,
  gapWidth?: number | string,
}): React.ReactElement {
  return(
    <div
      style={{
        display: 'flex',
        gap: gapWidth,
      }}>
      {children}
    </div>
  );
}
