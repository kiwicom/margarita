// @flow

import React from 'react';

const baseImagePath = './static/img/error-search-travel';

export default function ErrorSearchIllustration() {
  return (
    <img
      src={`${baseImagePath}.png`}
      srcSet={`${baseImagePath}.png 1x, ${baseImagePath}@2x.png 2x, ${baseImagePath}@3x.png 3x`}
      style={{ width: '80%', alignSelf: 'center', marginBottom: '20px' }}
    />
  );
}
