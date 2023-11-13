import * as React from 'react';
import EmbedAuthor from './Embed/EmbedAuthor';
import EmbedTitle from './Embed/EmbedTitle';
import EmbedThumbnail from './Embed/EmbedThumbnail';
import EmbedDescription from './Embed/EmbedDescription';
import EmbedField from './Embed/EmbedField';
import EmbedFields from './Embed/EmbedFields';
import EmbedFooter from './Embed/EmbedFooter';
import EmbedImage from './Embed/EmbedImage';

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

export default Object.assign(Embed, {
  Author: EmbedAuthor,
  Description: EmbedDescription,
  Field: EmbedField,
  Fields: EmbedFields,
  Footer: EmbedFooter,
  Image: EmbedImage,
  Thumbnail: EmbedThumbnail,
  Title: EmbedTitle,
});
