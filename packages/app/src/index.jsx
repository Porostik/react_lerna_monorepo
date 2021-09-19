import { MobileApp } from '@test/mobile_app';
import { Button } from '@test/shared/components';
import React, { useState } from 'react';
import { render } from 'react-dom';

import { DesktopApp } from './App';

const Root = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      <Button onClick={() => setIsMobile((prev) => !prev)}>
        Change app mode
      </Button>
      {isMobile ? <MobileApp /> : <DesktopApp />}
    </>
  );
};

render(<Root />, document.querySelector('#root'));
