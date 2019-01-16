// @flow

import * as React from 'react';
import { IllustrationWithInformation } from '@kiwicom/margarita-components';

export default function EmptyResults() {
  return (
    <IllustrationWithInformation
      illustrationName="NoResults"
      text="Sorry, we couldn't find that connection"
      description="Try changing up your search a bit. We'll try harder next time."
    />
  );
}
