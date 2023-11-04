import React from 'react';

export default function MsgComponents({
  children
}: {
  children: React.ReactNode
}): React.ReactElement {
  return(
    <div className="dc-msg-components">
      {children}
    </div>
  )
}
