import * as React from 'react';

export default function EmbedAuthor({
  children,
}: {
  children: React.ReactNode,
}): React.ReactElement {
  return(
    <div className="dc-embed-author">
      {children}
    </div>
  )
}
