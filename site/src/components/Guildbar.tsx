import React from 'react';

export function Guildbar({
  children,
  ...props
}: React.ComponentPropsWithoutRef<'div'>): React.ReactElement {
  return(
    <div className="dc-guildbar dc-scrollbar-none" {...props}>
      {children}
    </div>
  )
}

export function GuildbarItem({
  active,
  variant,
  children,
  ...props
}: {
  active?: boolean,
  variant?: 'success',
  children?: React.ReactNode,
  props?: React.ComponentPropsWithoutRef<'div'>,
}) {
  return(
    <div
      className={`dc-guildbar-item ${active ? 'dc-active' : ''}${variant ? `dc-guildbar-item-${variant}` : ''}`}
      {...props}
    >
      {children}
    </div>
  )
}

interface GuildbarImgProps extends React.ComponentPropsWithoutRef<'div'> {
  src: string,
  alt?: string,
  active?: boolean,
}

export function GuildbarImg({
  src,
  alt = 'Server image',
  active,
  ...props
}: GuildbarImgProps): React.ReactElement {
  return (
    <GuildbarItem active={active} {...props}>
      <img className="dc-guildbar-item-img" src={src} alt={alt}/>
    </GuildbarItem>
  )
}

export function GuildbarSeparator(): React.ReactElement {
  return(
    <hr className="dc-guildbar-separator" />
  )
}

export default Object.assign(Guildbar, {
  Img: GuildbarImg,
  Item: GuildbarItem,
  Separator: GuildbarSeparator,
});
