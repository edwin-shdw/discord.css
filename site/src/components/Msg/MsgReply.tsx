import React from 'react';

export function MsgReply({
  children,
}: {
  children?: React.ReactNode,
}): React.ReactElement {
  return(
    <div className="dc-msg-reply">
      {children}
    </div>
  )
}

export function MsgReplyImg({
  src,
}: {
  src: string,
}): React.ReactElement {
  return(
    <img className="dc-msg-reply-img" src={src} alt="Profile image of replied user" />
  )
}

export function MsgReplyName({
  children,
  ...props
}: {
  children?: React.ReactNode,
}): React.ReactElement {
  return(
    <span className="dc-msg-reply-name" {...props}>{children}</span>
  )
}

export function MsgReplyCmd({
  children,
}: {
  children?: React.ReactNode,
}): React.ReactElement {
  return(
    <span className="dc-msg-reply-cmd">
      {children}
    </span>
  )
}

export default Object.assign(MsgReply, {
  Img: MsgReplyImg,
  Name: MsgReplyName,
  Cmd: MsgReplyCmd,
});
