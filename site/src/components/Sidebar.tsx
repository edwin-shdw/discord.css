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

interface SidebarItemProps extends React.ComponentPropsWithoutRef<'div'> {
  src: string,
  alt?: string,
  active?: boolean,
}

export function SidebarItem({
  src,
  alt = 'Server image',
  active,
  ...props
}: SidebarItemProps): React.ReactElement {
  return(
    <div className={`dc-sidebar-item ${active ? 'dc-active' : ''}`} {...props} >
      <img className="dc-sidebar-item-img" src={src} alt={alt} />
    </div>
  )
}

export function SidebarSeparator(): React.ReactElement {
  return(
    <hr className="dc-sidebar-separator" />
  )
}

export default Object.assign(Sidebar, {
  Item: SidebarItem,
  Separator: SidebarSeparator,
});
