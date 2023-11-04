import React from 'react';

export default function MsgContent({
  children
}: {
  children: React.ReactNode
}): React.ReactElement {
  return(
    <div className="dc-msg-content">
      {children}
    </div>
  )
}
