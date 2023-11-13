import * as React from 'react';
import { Alert, AlertActions, AlertMessage } from '@site/src/components/Alert';
import Button from '@site/src/components/Button';
import Row from '@site/src/components/Row';

export default function AlertExample() {
  const [show1, setShow1] = React.useState(false);
  const [show2, setShow2] = React.useState(false);

  function handleClick(firstAlert: boolean) {
    if(firstAlert) {
      setShow1(true);
      setShow2(false);
    }
    else {
      setShow1(false);
      setShow2(true);
    }
  }

  return(
    <div style={{ marginBlockEnd: '0.5rem'}}>
      <Row>
        <Button variant='blurple' onClick={() => handleClick(true)}>
          With ellipsis
        </Button>
        <Button variant='blurple' onClick={() => handleClick(false)}>
          Without ellipsis
        </Button>
      </Row>

      <Alert show={show1}>
        <AlertMessage>
          Look Wumpus! The text is wayyy to long to fit all the way in this alert! Maybe we should shorten the text?
        </AlertMessage>
        <AlertActions>
          <Button variant='cancel' onClick={() => setShow1(false)}>Cancel</Button>
          <Button variant='success' onClick={() => setShow1(false)}>Save changes</Button>
        </AlertActions>
      </Alert>

      <Alert show={show2}>
        <div>
          Look Wumpus! The text can now be as long as we want! Should we tell a story inside here or leave it to the professionals?
        </div>
        <AlertActions>
          <Button variant='cancel' onClick={() => setShow2(false)}>Cancel</Button>
          <Button variant='success' onClick={() => setShow2(false)}>Save changes</Button>
        </AlertActions>
      </Alert>
    </div>
  )
}
