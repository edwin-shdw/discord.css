import React from 'react';
import Guildbar from '@site/src/components/Guildbar';

const images = [
  '/img/profile/shabotto.png',
  'https://avatars.githubusercontent.com/u/62764562?v=4',
  'https://avatars.githubusercontent.com/u/150550776?v=4',
  'https://avatars.githubusercontent.com/u/63116530?v=4',
  'https://avatars.githubusercontent.com/u/132844639?v=4',
  '/img/redforest.jpg',
];

const guildLetters = [
  'MS',
  'MSI',
  'MSIT',
  'MSITL',
];

export function GuildbarExample(): React.ReactElement {
  const [activeItem, setActiveItem] = React.useState(0);

  return(
    <Guildbar style={{ maxBlockSize: '16rem' }}>
      {images.map((image, index) => (
        <React.Fragment key={index}>
          <Guildbar.Img src={image} active={index === activeItem} onClick={() => setActiveItem(index)} />
          {index === 0 && <Guildbar.Separator />}
        </React.Fragment>
      ))}
    </Guildbar>
  )
}

export function GuildbarLetterExample(): React.ReactElement {
  const [activeItem, setActiveItem] = React.useState(0);

  return(
    <Guildbar style={{ maxBlockSize: '16rem' }}>
      {guildLetters.map((text, index) => (
        <React.Fragment key={index}>
          <Guildbar.Item active={index === activeItem}>
            <div className="dc-guildbar-item-img" onClick={() => setActiveItem(index)}>
              <span
                className="dc-guildbar-item-letter"
                style={{ fontSize: (text.length >= 4 ? (16 - text.length % 2 * 2) : null) }}
              >
                {text}
              </span>
            </div>
          </Guildbar.Item>
        </React.Fragment>
      ))}
      <Guildbar.Item variant="success">
        <div className="dc-guildbar-item-img">
          <svg className="dc-guildbar-item-letter" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
               viewBox="0 0 24 24">
            <path fill="currentColor"
                  d="M13 5a1 1 0 1 0-2 0v6H5a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V5Z"/>
          </svg>
        </div>
      </Guildbar.Item>
    </Guildbar>
  )
}

