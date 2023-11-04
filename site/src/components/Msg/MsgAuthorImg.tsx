import React from 'react';

export default function MsgAuthorImg({
  src
}: {
  src: string,
}) {
  return(
    <img className="dc-msg-author-img" src={src} alt="Profile image" />
  )
}
