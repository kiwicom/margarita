// @flow

import styled from 'styled-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

export default styled.div`
  font-weight: 700;
  font-size: 19px;
  line-height: 30px;
  transition: all 1s ease;
  @media (min-width: ${defaultTokens.widthBreakpointDesktop}px) {
    font-size: ${({ big }) => (big ? '33px' : '21px')};
    line-height: ${({ big }) => (big ? '45px' : '35px')};
    ${({ isDisabled }) => (isDisabled ? 'color: #aaa' : null)};
  }
`;
