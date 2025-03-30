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

function getGuildbarFontSize(acronym: string) {
  const length = acronym.length;

  if (length <= 2) return null;
  else if (length <= 4) return 16;
  else if (length <= 7) return 16 - (length - 4) * 2;
  else return 10;
}

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
                style={{ fontSize: getGuildbarFontSize(text) }}
              >
                {text}
              </span>
            </div>
          </Guildbar.Item>
        </React.Fragment>
      ))}
      <Guildbar.Item>
        <div className="dc-guildbar-item-img">
          <svg className="dc-guildbar-item-letter" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="transparent" />
            <path fill="currentColor" fillRule="evenodd"
                  d="M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm0-17a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1Z"
                  clipRule="evenodd" />
          </svg>
        </div>
      </Guildbar.Item>
    </Guildbar>
  )
}
