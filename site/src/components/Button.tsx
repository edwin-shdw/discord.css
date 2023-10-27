import * as React from 'react';

export default function Button({
  children,
  className,
  variant,
  disabled,
  as = 'button',
  ...props
}: {
  children: React.ReactElement,
  className: string,
  variant?: string,
  disabled?: boolean,
  as?: React.ElementType,
  href?: string,
  props: React.HTMLProps<any>
}): React.ReactElement {
  const Tag = as;
  const btnVariant = variant ? `dc-btn-${variant}` : null;
  let classString = btnVariant ? `dc-btn ${btnVariant}` : 'dc-btn';
  if(disabled && (as === 'a')) classString += ' dc-btn-disabled';
  if(className) classString += ` ${className}`;

  return(
    <Tag
      className={classString}
      disabled={disabled}
      {...props}
    >
      {children}
    </Tag>
  );
}
