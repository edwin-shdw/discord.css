import React from 'react';

export function MsgAuthor({
  children,
  nameColor,
}: {
  children: React.ReactNode,
  nameColor?: string,
}): React.ReactElement {
  const style = {
    '--dc-author-color': nameColor,
  } as React.CSSProperties;
  return(
    <div className="dc-msg-author" style={style}>
      {children}
    </div>
  )
}

export function MsgAuthorName({
  children,
  roleColor,
}: {
  children: React.ReactNode,
  roleColor?: string;
}): React.ReactElement {
  const style = {
    '--dc-author-color': roleColor,
  } as React.CSSProperties;

  return(
    <span className="dc-msg-author-name" style={style}>
      {children}
    </span>
  )
}

export function MsgAuthorTimestamp(): React.ReactElement {
  const dateFormat: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }
  const now = new Date();
  const date = now.toLocaleDateString(undefined, dateFormat);
  const time = now.toLocaleTimeString().slice(0, -3);
  const dateTime = `${date} ${time}`;

  return(
    <span className="dc-msg-author-timestamp">
      {dateTime}
    </span>
  )
}

export default Object.assign(MsgAuthor, {
  Name: MsgAuthorName,
  Timestamp: MsgAuthorTimestamp,
});
