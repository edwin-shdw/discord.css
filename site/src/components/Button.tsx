import * as React from 'react';

export default function Button({
  children,
  variant,
  disabled,
  as = 'button',
  href,
}: {
  children: React.ReactElement,
  variant?: string,
  disabled?: boolean,
  as?: React.ElementType,
  href?: string,
}): React.ReactElement {
  const Tag = as;
  const btnVariant = variant ? `dc-btn-${variant}` : null;
  let classString = btnVariant ? `dc-btn ${btnVariant}` : 'dc-btn';
  classString += (disabled && as === 'a') ? ' dc-btn-disabled' : '';

  return(
    <Tag className={classString} disabled={disabled} href={href}>
      {children}
    </Tag>
  );
}
