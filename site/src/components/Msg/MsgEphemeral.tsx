import React from 'react';

export function MsgEphemeral({
  children,
}: {
  children?: React.ReactNode,
}): React.ReactElement {
  return(
    <div className="dc-msg-ephemeral-msg">
      {children}
    </div>
  )
}
