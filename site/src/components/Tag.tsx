import * as React from 'react';

export default function Tag({
  children,
  verified = false,
}: {
  children?: React.ReactNode,
  verified?: boolean,
}): React.ReactElement {
  return(
    <span className={`dc-tag${verified ? '-verified' : ''}`}>
      {children}
    </span>
  )
}
