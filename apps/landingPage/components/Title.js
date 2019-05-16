// @flow

import styled from 'styled-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

export default styled.div`
  font-size: 50px;
  color: ${({ light }) =>
    light ? defaultTokens.paletteWhite : defaultTokens.paletteInkDark};
  display: inline-block;
  padding: 50px 0 30px 0;
  font-weight: bold;
`;
