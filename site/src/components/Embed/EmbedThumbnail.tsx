import * as React from 'react';

export default function EmbedThumbnail({
  children,
}: {
  children?: React.ReactNode
}): React.ReactElement {
  return(
    <div className="dc-embed-thumbnail">
      {children}
    </div>
  )
}
