// @flow

import styled from 'styled-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

export default styled.div`
  background-color: ${({ disabled }) =>
    disabled ? `#9D9D9D` : defaultTokens.paletteProductLight};
  color: ${defaultTokens.paletteProductNormal};
  display: inline-block;
  padding: 3px 7px;
`;
