import React from 'react';

export function Sidebar({
  children,
  ...props
}: React.ComponentPropsWithoutRef<'div'>): React.ReactElement {
  return(
    <div className="dc-sidebar dc-scrollbar-none" {...props}>
      {children}
    </div>
  )
}

export function SidebarItem({
  active,
  children,
  ...props
}: {
  active?: boolean,
  children?: React.ReactNode,
  props?: React.ComponentPropsWithoutRef<'div'>
}) {
  return(
    <div className={`dc-sidebar-item ${active ? 'dc-active' : ''}`} {...props} >
      {children}
    </div>
  )
}

interface SidebarImgProps extends React.ComponentPropsWithoutRef<'div'> {
  src: string,
  alt?: string,
  active?: boolean,
}

export function SidebarImg({
  src,
  alt = 'Server image',
  active,
  ...props
}: SidebarImgProps): React.ReactElement {
  return (
    <SidebarItem active={active} {...props}>
      <img className="dc-sidebar-item-img" src={src} alt={alt}/>
    </SidebarItem>
  )
}

export function SidebarSeparator(): React.ReactElement {
  return(
    <hr className="dc-sidebar-separator" />
  )
}

export default Object.assign(Sidebar, {
  Img: SidebarImg,
  Item: SidebarItem,
  Separator: SidebarSeparator,
});
