import * as React from 'react';

interface ButtonProps extends React.ComponentPropsWithoutRef<any> {
  as?: React.ElementType,
  variant?: 'blurple'
    | 'danger'
    | 'success'
    | 'outline'
    | 'outline-blurple'
    | 'outline-danger'
    | 'outline-success'
    | 'link'
    | 'cancel',
  disabled?: boolean,
}

export default function Button({
  children,
  className,
  variant,
  disabled,
  as = 'button',
  onClick,
  ...props
}: ButtonProps): React.ReactElement {
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
