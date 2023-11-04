import React from 'react';

export default function MsgButtonRow({
  children
}: {
  children: React.ReactNode
}): React.ReactElement {
  return(
    <div className="dc-msg-components-btn-row">
      {children}
    </div>
  )
}
