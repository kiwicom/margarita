// @flow

import styled from 'styled-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

export default styled.div`
  width: 80%;
  position: relative;
  @media (min-width: ${defaultTokens.widthBreakpointLargeMobile}) {
    width: 100%;
  }
`;
