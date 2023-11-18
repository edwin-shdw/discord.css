import React from 'react';

interface RangeProps extends React.ComponentPropsWithoutRef<'input'> {
  rangeFill: boolean,
}

export default function Range({
  rangeFill = true,
  ...props
}: RangeProps): React.ReactElement {
  const [value, setValue] = React.useState(50);

  function handleInput(event: InputEvent) {
    const element = event.target as HTMLInputElement;
    setValue(parseInt(element.value));
  }

  const RangeStyle = rangeFill
    ? {
      '--dc-range-bg-fill': `${value}%`
    } as React.CSSProperties
    : null;

  return(
    <input
      className="dc-range"
      type="range"
      style={RangeStyle}
      onInput={handleInput.bind(this)}
      {...props} />
  )
}
