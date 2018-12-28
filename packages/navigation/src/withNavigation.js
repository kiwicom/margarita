// @flow

import { Consumer } from './WebNavigationContext';
import withContext from '../utils/withContext';

const select = state => state;

export const withNavigation = withContext(select, Consumer);
