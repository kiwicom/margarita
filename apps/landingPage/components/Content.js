// @flow

import styled from 'styled-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

export default styled.div`
  max-width: 80vw;
  position: relative;
  @media (min-width: ${defaultTokens.widthBreakpointLargeMobile}) {
    width: 100%;
  }
`;
