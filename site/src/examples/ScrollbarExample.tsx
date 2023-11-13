import * as React from 'react';
import Scrollbar from '@site/src/components/Scrollbar';

const overflowStyles: React.CSSProperties = {
  background: 'linear-gradient(black, var(--dc-blurple))',
  height: '100vh',
  padding: '0.5rem',
}

export default function ScrollbarExample({
  children,
  variant,
}: {
  children?: React.ReactNode
  variant?: undefined | 'thin' | 'none',
}): React.ReactElement {
  return(
    <Scrollbar variant={variant} style={{ blockSize: '35vh' }}>
      <div style={overflowStyles}>
        {children}
      </div>
    </Scrollbar>
  )
}

