import React from 'react';

export default function Textarea({
  ...props
}: React.ComponentPropsWithoutRef<'textarea'>): React.ReactElement {
  return(
    <textarea className="dc-textarea" {...props} />
  )
}
