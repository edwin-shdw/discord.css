import React from 'react';
import MsgAuthor from './Msg/MsgAuthor';
import MsgAuthorImg from './Msg/MsgAuthorImg';
import MsgContent from './Msg/MsgContent';
import MsgComponents from './Msg/MsgComponents';
import MsgReply from './Msg/MsgReply';
import MsgButtonRow from './Msg/MsgButtonRow';

interface MsgProps extends React.ComponentPropsWithoutRef<'div'> {
  children?: React.ReactNode,
  mentioned?: boolean,
}

function Msg({
  children,
  mentioned,
  ...props
}: MsgProps): React.ReactElement {
  const msgClass = `dc-msg${mentioned ? ' dc-msg-mentioned' : ''}`;
  return(
    <div className={msgClass} {...props}>
      {children}
    </div>
  )
}

export default Object.assign(Msg, {
  Author: MsgAuthor,
  AuthorImg: MsgAuthorImg,
  ButtonRow: MsgButtonRow,
  Components: MsgComponents,
  Content: MsgContent,
  Reply: MsgReply,
});
