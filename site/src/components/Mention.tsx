import * as React from 'react';

function hexToRgb(hex: string): string {
  if(hex[0] === '#') hex = hex.slice(1);
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `${r} ${g} ${b}`;
}

export default function Mention({
  children,
  role,
  color,
}: {
  children: React.ReactElement,
  role?: boolean,
  color?: string,
}): React.ReactElement {
  const colorValue = (role && color) ? hexToRgb(color) : 'var(--dc-blurple-rgb)';
  const colorStyle = {'--dc-mention-color': colorValue} as React.CSSProperties;
  const mentionClass = role ? 'dc-mention dc-mention-role' : 'dc-mention';

  return (
    <span
      className={mentionClass}
      style={role ? colorStyle : null}
    >
      {children}
    </span>
  );
}
