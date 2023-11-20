import React from 'react';

interface RadioProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
  children?: React.ReactNode,
  checked?: boolean,
  id?: string,
  disabled?: boolean
};

export default function Radio({
  children,
  checked,
  disabled,
  id,
  ...props
}: RadioProps): React.ReactElement {
  const className = `dc-radio${disabled ? ' dc-radio-disabled' : ''}${checked ? ' dc-radio-checked' : ''}`;

  return(
    <label className={className} htmlFor={id}>
      <input type="radio" id={id} disabled={disabled} {...props} />
      <span>{children}</span>
    </label>
  )
}
