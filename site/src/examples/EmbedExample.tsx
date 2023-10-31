import * as React from 'react';
import {
  Embed,
  EmbedDescription,
  EmbedFields,
  EmbedField,
  EmbedTitle,
  EmbedFieldName, EmbedFieldValue, EmbedImage, EmbedFooter, EmbedAuthor, EmbedThumbnail
} from '@site/src/components/Embed';

function getCurrentDateTime(): string {
  const now = new Date();
  return `${now.toLocaleDateString()} ${now.toLocaleTimeString().slice(0, -3)}`;
}

export default function EmbedExample(): React.ReactElement {
  return(
    <Embed color='#a00'>
      <EmbedAuthor>
        <img src="/img/dcs.webp" alt="Author image"/>
        <span>discord.css</span>
      </EmbedAuthor>
      <EmbedThumbnail>
        <img src="/img/dcs.webp" alt="Thumbnail"/>
      </EmbedThumbnail>
      <EmbedTitle>Embeds</EmbedTitle>
      <EmbedDescription>
        If you create a bot you will probably using embeds, so this class is ideal if you want to build previews for the
        dashboard of your bot!
      </EmbedDescription>
      <EmbedFields>
        <EmbedField inline={true}>
          <EmbedFieldName>Inline field name</EmbedFieldName>
          <EmbedFieldValue>Some field value</EmbedFieldValue>
        </EmbedField>
        <EmbedField inline={true}>
          <EmbedFieldName>Inline field name</EmbedFieldName>
          <EmbedFieldValue>Some other field value</EmbedFieldValue>
        </EmbedField>
        <EmbedField>
          <EmbedFieldName>Field name</EmbedFieldName>
          <EmbedFieldValue>No longer inline field</EmbedFieldValue>
        </EmbedField>
      </EmbedFields>
      <EmbedImage>
        <img src="/img/shadow-logo.png" alt="Shadow" />
      </EmbedImage>
      <EmbedFooter>
        <img src="/img/dcs.webp" alt="Author Profile Image" />
        <span>discord.css docs<span className="dc-embed-footer-seperator">•</span>30.10.2023 22:13</span>
      </EmbedFooter>
    </Embed>
  )
}
