import * as React from 'react';

interface CodePreviewProps extends React.ComponentPropsWithoutRef<'div'>{
  children?: React.ReactNode
}

export default function CodePreview({
  children,
  ...props
}: CodePreviewProps): React.ReactElement {
  return(
    <div className="code-preview" {...props}>
      <div className="code-preview-header">Result</div>
      <div className="code-preview-content">
        {children}
      </div>
    </div>
  )
}
