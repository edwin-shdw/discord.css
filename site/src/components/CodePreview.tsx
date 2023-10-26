import * as React from 'react';

export default function CodePreview({
  children,
}: {
  children: React.ReactElement
}): React.ReactElement {
  return(
    <div className="code-preview">
      <div className="code-preview-header">Result</div>
      <div className="code-preview-content">
        {children}
      </div>
    </div>
  )
}
