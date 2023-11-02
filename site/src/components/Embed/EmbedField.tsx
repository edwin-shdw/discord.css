import * as React from 'react';

export function EmbedField({
  children,
  inline = false,
}: {
  children?: React.ReactNode,
  inline?: boolean,
}): React.ReactElement {
  return(
    <div className={`dc-embed-field${inline ? '-inline' : ''}`}>
      {children}
    </div>
  )
}

export function EmbedFieldName({
  children,
}: {
  children?: React.ReactNode,
}): React.ReactElement {
  return(
    <div className="dc-embed-field-name">
      {children}
    </div>
  )
}

export function EmbedFieldValue({
  children,
}: {
  children?: React.ReactNode,
}): React.ReactElement {
  return(
    <div className="dc-embed-field-value">
      {children}
    </div>
  )
}

export default Object.assign(EmbedField, {
  Name: EmbedFieldName,
  Value: EmbedFieldValue,
});
