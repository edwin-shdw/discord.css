import React from 'react';

export default function Switch({
  ...props
}: React.ComponentPropsWithoutRef<'input'>): React.ReactElement {
  return(
    <div className="dc-switch">
      <input type="checkbox" {...props} />
      <span className="dc-switch-slider" />
    </div>
  )
}
