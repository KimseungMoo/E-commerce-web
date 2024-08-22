// __mocks__/next/image.js

import * as React from 'react';

// eslint-disable-next-line @next/next/no-img-element
const NextImage = ({ src, alt, width, height, ...props }) => (
  <img src={src} alt={alt} width={width} height={height} {...props} />
);

export default NextImage;
