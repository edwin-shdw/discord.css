import React from 'react';
import Msg from '@site/src/components/Msg';
import Tag from '@site/src/components/Tag';
import Button from '@site/src/components/Button';
import Embed from '@site/src/components/Embed';

export default function MsgExample(): React.ReactElement {
  return(
    <Msg style={{ margin: 0 }}>
      <Msg.Reply>
        <Msg.Reply.Img src="https://avatars.githubusercontent.com/u/62764562?v=4" />
        <Msg.Reply.Name>
          EdwinShdw
        </Msg.Reply.Name>
        <span>used</span>
        <Msg.Reply.Cmd>
          discord-css
        </Msg.Reply.Cmd>
      </Msg.Reply>
      <Msg.AuthorImg
        src="/img/profile/shabotto.png"
      />
      <Msg.Author>
        <Msg.Author.Name>Shabotto</Msg.Author.Name>
        <Tag>Bot</Tag>
        <span className="dc-msg-author-timestamp">03.11.2023 01:02</span>
      </Msg.Author>
      <Msg.Content>Here you go!</Msg.Content>
      <Msg.Components>
        <Embed color='#a00'>
          <Embed.Title>Any form of embed</Embed.Title>
        </Embed>
        <Msg.ButtonRow>
          <Button variant="blurple">Primary</Button>
          <Button variant="success">Default</Button>
          <Button
            as='a'
            variant="link"
            href="https://github.com/edwin-shdw/discord.css"
            target="_blank"
          >
            GitHub Repo
          </Button>
        </Msg.ButtonRow>
      </Msg.Components>
    </Msg>
  )
}
