import * as React from 'react';

export default function EmbedDescription({
  children,
}: {
  children?: React.ReactNode,
}): React.ReactElement {
  return(
    <div className="dc-embed-description">
      {children}
    </div>
  )
}
