import * as React from 'react';

export default function EmbedFooter({
  children,
}: {
  children?: React.ReactNode,
}): React.ReactElement {
  return(
    <div className="dc-embed-footer">
      {children}
    </div>
  )
}
