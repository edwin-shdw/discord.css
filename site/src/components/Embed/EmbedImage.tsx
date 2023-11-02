import * as React from 'react';

export default function EmbedImage({
  children,
}: {
  children?: React.ReactNode,
}): React.ReactElement {
  return(
    <div className="dc-embed-image">
      {children}
    </div>
  )
}
