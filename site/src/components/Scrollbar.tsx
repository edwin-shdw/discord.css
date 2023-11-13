import * as React from 'react';
import { HTMLProps } from 'react';

type Variants = null | 'thin' | 'none';

interface ScrollbarProps extends React.ComponentPropsWithoutRef<'div'> {
  children?: React.ReactNode,
  variant?: Variants,
}

export default function Scrollbar({
  children,
  variant,
  ...props
}: ScrollbarProps): React.ReactElement {
  const variantClass = variant ? `-${variant}` : '';

  return(
    <div className={`dc-scrollbar${variantClass}`} {...props}>
      {children}
    </div>
  )
}
