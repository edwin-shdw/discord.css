import React from 'react';

export default function Input({
  children,
  type = 'header',
  ...props
}: {
  children: React.ReactNode,
  type: 'header' | 'description',
}): React.ReactElement {
  const Tag = type === 'header' ? 'label' : 'p';
  return(
    <Tag className={`dc-label-${type}`} {...props}>
      {children}
    </Tag>
  )
}
