import * as React from 'react';
import { Alert, AlertActions, AlertMessage } from '@site/src/components/Alert';
import Button from '@site/src/components/Button';

export default function AlertExample() {
  const [show, setShow] = React.useState(false);
  const [warn, setWarn] = React.useState(false);

  function alertWarn() {
    setWarn(true);
    setTimeout(() => setWarn(false), 1250);
  }

  function handleClick() {
    if(!show) setShow(true);
    else alertWarn();
  }

  return(
    <div style={{ marginBlockEnd: '0.5rem'}}>
      <Button variant='blurple' onClick={handleClick}>
        Launch alert
      </Button>

      <Alert show={show} warn={warn}>
        <AlertMessage>
          Look Wumpus! It's an alert!
        </AlertMessage>
        <AlertActions>
          <Button variant='cancel' onClick={() => setShow(false)}>Cancel</Button>
          <Button variant='success' onClick={() => setShow(false)}>Save changes</Button>
        </AlertActions>
      </Alert>
    </div>
  )
}
