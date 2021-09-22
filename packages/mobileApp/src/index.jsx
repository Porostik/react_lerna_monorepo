import React from 'react';
import { Button } from '@test/shared/components';

import image from './assets/image.png';

export const MobileApp = () => (
  <>
    <img src={image} alt="" style={{ width: 40, height: 40 }} />
    <Button>Shared button</Button>
    <h1>Mobile</h1>
  </>
);
