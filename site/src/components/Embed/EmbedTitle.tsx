import * as React from 'react';

export default function EmbedTitle({
  children,
}: {
  children?: React.ReactNode,
}): React.ReactElement {
  return(
    <div className="dc-embed-title">
      {children}
    </div>
  )
}
