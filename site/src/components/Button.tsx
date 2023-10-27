import * as React from 'react';

export default function Button({
  children,
  className,
  variant,
  disabled,
  as = 'button',
  onClick,
  ...props
}: {
  children: React.ReactNode,
  className?: string,
  variant?: string,
  disabled?: boolean,
  as?: React.ElementType,
  onClick?: Function,
  props?: React.HTMLProps<any>,
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
      onClick={onClick}
      {...props}
    >
      {children}
    </Tag>
  );
}
