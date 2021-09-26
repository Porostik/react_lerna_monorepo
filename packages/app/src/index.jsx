/* eslint-disable */
import React, { Suspense, useState } from 'react';
import { render } from 'react-dom';
import { Button } from '@test/shared/components';
import '@test/shared/styles/main.scss';

const DesktopApp = React.lazy(() =>
  import('./App').then((module) => ({ default: module.DesktopApp }))
);

const MobileApp = React.lazy(() =>
  import('@test/mobile_app').then((module) => ({ default: module.MobileApp }))
);

const Root = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="app">
      <Button onClick={() => setIsMobile((prev) => !prev)}>
        Change app mode
      </Button>
      <Suspense fallback={<h1>Loading</h1>}>
        {isMobile ? <MobileApp /> : <DesktopApp />}
      </Suspense>
    </div>
  );
};

render(<Root />, document.querySelector('#root'));
