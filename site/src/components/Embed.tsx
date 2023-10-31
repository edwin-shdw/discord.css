import * as React from 'react';

interface EmbedProps extends React.ComponentPropsWithoutRef<'div'> {
  children?: React.ReactNode,
  color?: string,
}

export function Embed({
  children,
  color,
  style,
  ...props
}: EmbedProps): React.ReactElement {
  const embedStyles = {
    "--dc-embed-color": color,
    ...style,
} as React.CSSProperties;

  return(
    <div className="dc-embed" style={embedStyles} {...props}>
      {children}
    </div>
  )
}

export function EmbedAuthor({
  children,
}: {
  children: React.ReactNode,
}): React.ReactElement {
  return(
    <div className="dc-embed-author">
      {children}
    </div>
  )
}

export function EmbedThumbnail({
  children,
}: {
  children?: React.ReactNode
}): React.ReactElement {
  return(
    <div className="dc-embed-thumbnail">
      {children}
    </div>
  )
}

export function EmbedTitle({
  children,
}: {
  children?: React.ReactNode,
}): React.ReactElement {
  return(
    <div className="dc-embed-title">
      {children}
    </div>
  )
}

export function EmbedDescription({
  children,
}: {
  children?: React.ReactNode,
}): React.ReactElement {
  return(
    <div className="dc-embed-description">
      {children}
    </div>
  )
}

export function EmbedFields({
  children,
}: {
  children?: React.ReactNode,
}): React.ReactElement {
  return(
    <div className="dc-embed-fields">
      {children}
    </div>
  )
}

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

export function EmbedImage({
  children,
}: {
  children?: React.ReactNode,
}): React.ReactElement {
  return(
    <div className="dc-embed-image">
      {children}
    </div>
  )
}

export function EmbedFooter({
  children,
}: {
  children?: React.ReactNode,
}): React.ReactElement {
  return(
    <div className="dc-embed-footer">
      {children}
    </div>
  )
}
