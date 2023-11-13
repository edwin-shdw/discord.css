import * as React from 'react';

export default function EmbedFields({
  children,
}: {
  children?: React.ReactNode,
}): React.ReactElement {
  return(
    <div className="dc-embed-fields">
      {children}
    </div>
  )
}
