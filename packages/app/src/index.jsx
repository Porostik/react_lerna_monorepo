/* eslint-disable function-paren-newline */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
import { Button } from '@test/shared/components';
import React, { Suspense, useState } from 'react';
import { render } from 'react-dom';

const DesktopApp = React.lazy(() =>
  import('./App').then((module) => ({ default: module.DesktopApp }))
);

const MobileApp = React.lazy(() =>
  import('@test/mobile_app').then((module) => ({ default: module.MobileApp }))
);

const Root = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      <Button onClick={() => setIsMobile((prev) => !prev)}>
        Change app mode
      </Button>
      <Suspense fallback={<h1>Loading</h1>}>
        {isMobile ? <MobileApp /> : <DesktopApp />}
      </Suspense>
    </>
  );
};

render(<Root />, document.querySelector('#root'));
