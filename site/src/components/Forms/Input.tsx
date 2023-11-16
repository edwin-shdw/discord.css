import React from 'react';

export default function Input({
  ...props
}: React.ComponentPropsWithoutRef<'input'>): React.ReactElement {
  return(
    <input className="dc-input" {...props} />
  )
}
