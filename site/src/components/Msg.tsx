import React from 'react';
import MsgAuthor from './Msg/MsgAuthor';
import MsgAuthorImg from './Msg/MsgAuthorImg';
import MsgContent from './Msg/MsgContent';
import MsgComponents from './Msg/MsgComponents';
import MsgReply from './Msg/MsgReply';
import MsgButtonRow from './Msg/MsgButtonRow';
import { MsgEphemeral } from '@site/src/components/Msg/MsgEphemeral';

interface MsgProps extends React.ComponentPropsWithoutRef<'div'> {
  children?: React.ReactNode,
  mentioned?: boolean,
  ephemeral?: boolean,
}

function Msg({
  children,
  mentioned,
  ephemeral,
  ...props
}: MsgProps): React.ReactElement {
  let msgClass = `dc-msg${mentioned ? ' dc-msg-mentioned' : ''}`;
  msgClass += ephemeral ? ' dc-msg-ephemeral' : ''

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
  Ephemeral: MsgEphemeral,
  Reply: MsgReply,
});
