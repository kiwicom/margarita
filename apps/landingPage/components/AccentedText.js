// @flow

import styled from 'styled-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

export default styled.div`
  font-weight: 700;
  font-size: 19px;
  transition: all 1s ease;
  @media (min-width: ${defaultTokens.widthBreakpointDesktop}px) {
    font-size: 21px;
    ${({ isDisabled }) => (isDisabled ? 'color: #aaa' : null)};
  }
`;
