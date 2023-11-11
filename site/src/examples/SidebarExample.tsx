import React from 'react';
import Sidebar from '@site/src/components/Sidebar';

const images = [
  '/img/profile/shabotto.png',
  'https://avatars.githubusercontent.com/u/62764562?v=4',
  'https://avatars.githubusercontent.com/u/150550776?v=4',
  'https://avatars.githubusercontent.com/u/63116530?v=4',
  'https://avatars.githubusercontent.com/u/132844639?v=4',
  '/img/redforest.jpg',
];

export default function SidebarExample(): React.ReactElement {
  const [activeItem, setActiveItem] = React.useState(0);

  return(
    <Sidebar style={{ maxBlockSize: '16rem' }}>
      {images.map((image, index) => (
        <React.Fragment key={index}>
          <Sidebar.Item src={image} active={index === activeItem} onClick={() => setActiveItem(index)} />
          {index === 0 && <Sidebar.Separator />}
        </React.Fragment>
      ))}
    </Sidebar>
  )
}
