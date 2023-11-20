import React from 'react';
import Radio from '@site/src/components/Forms/Radio';

export default function RadioFirefoxExample() {
  const [activeRadio, setActiveRadio] = React.useState(3);

  return(
    <form>
      <Radio
        id="radioFF1"
        name="radioFFExample"
        checked={1 === activeRadio}
        onClick={() => setActiveRadio(1)}
      >Radio 1</Radio>
      <Radio
        id="radioFF2"
        name="radioFFExample"
        checked={2 === activeRadio}
        onClick={() => setActiveRadio(2)}
      >Radio 2</Radio>
      <Radio
        id="radioFF3"
        name="radioFFExample"
        checked={3 === activeRadio}
        defaultChecked
        onClick={() => setActiveRadio(3)}
      >Radio 3</Radio>
    </form>
  )
}