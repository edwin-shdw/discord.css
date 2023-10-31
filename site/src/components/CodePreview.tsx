import * as React from 'react';

interface CodePreviewProps extends React.ComponentPropsWithoutRef<'div'>{
  children?: React.ReactNode,
  bordered?: boolean,
}

export default function CodePreview({
  children,
  bordered = false,
  ...props
}: CodePreviewProps): React.ReactElement {
  return(
    <div className="code-preview" {...props}>
      <div className="code-preview-header">Result</div>
      <div className={`code-preview-content${bordered ? '--bordered' : ''}`}>
        {children}
      </div>
    </div>
  )
}
