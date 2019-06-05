// @flow

import styled from 'styled-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

export default styled.div`
  font-size: 53px;
  color: ${({ light }) =>
    light ? defaultTokens.paletteWhite : defaultTokens.paletteInkDark};
  padding: 60px 0 20px 0;
  font-weight: bold;
`;
