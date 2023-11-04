import * as React from 'react';

export function Alert({
  children,
  show,
  warn,
}: {
  children: React.ReactNode,
  show?: boolean,
  warn?: boolean,
}): React.ReactElement {
  return(
    <div className={`dc-alert ${show ? 'dc-show' : ''} ${warn ? 'dc-alert-warn' : ''}`}>
      <div className="dc-alert-content">
        {children}
      </div>
    </div>
  );
}

export function AlertMessage({
  children,
}: {
  children: React.ReactNode,
}) {
  return(
    <div className="dc-alert-msg">
      {children}
    </div>
  )
}

export function AlertActions({
  children,
}: {
  children: React.ReactNode,
}) {
  return(
    <div className="dc-alert-actions">
      {children}
    </div>
  )
}

export default Object.assign(Alert, {
  Message: AlertMessage,
  Actions: AlertActions,
});
