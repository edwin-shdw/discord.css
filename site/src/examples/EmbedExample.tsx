import * as React from 'react';
import Embed from '@site/src/components/Embed';

export default function EmbedExample(): React.ReactElement {
  return (
    <Embed color='#a00'>
      <Embed.Author>
        <img src="/img/dcs.svg" alt="Author image" />
        <span>discord.css</span>
      </Embed.Author>
      <Embed.Thumbnail>
        <img src="/img/dcs.svg" alt="Thumbnail" />
      </Embed.Thumbnail>
      <Embed.Title>Embeds</Embed.Title>
      <Embed.Description>
        If you create a bot you will probably using embeds, so this class is ideal if you want to build previews for the
        dashboard of your bot!
      </Embed.Description>
      <Embed.Fields>
        <Embed.Field inline={true}>
          <Embed.Field.Name>Inline field name</Embed.Field.Name>
          <Embed.Field.Value>Some field value</Embed.Field.Value>
        </Embed.Field>
        <Embed.Field inline={true}>
          <Embed.Field.Name>Inline field name</Embed.Field.Name>
          <Embed.Field.Value>Some other field value</Embed.Field.Value>
        </Embed.Field>
        <Embed.Field>
          <Embed.Field.Name>Field name</Embed.Field.Name>
          <Embed.Field.Value>No longer inline field</Embed.Field.Value>
        </Embed.Field>
      </Embed.Fields>
      <Embed.Image>
        <img src="/img/shadow-logo.png" alt="Shadow" />
      </Embed.Image>
      <Embed.Footer>
        <img src="/img/dcs.svg" alt="Author Profile Image" />
        <span>discord.css docs<span className="dc-embed-footer-seperator">•</span>30.10.2023 22:13</span>
      </Embed.Footer>
    </Embed>
  )
}
