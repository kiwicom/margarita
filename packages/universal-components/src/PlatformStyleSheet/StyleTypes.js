// @flow

/* eslint-disable babel/camelcase */

/**
 * Styles are only reexported here to avoid importing internal RN libraries
 * everywhere (types are not exported directly).
 */

import {
  type ____DangerouslyImpreciseStyleProp_Internal,
  type ____DangerouslyImpreciseStyle_Internal,
} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

type ReducedDangerouslyImpreciseStyle = $Rest<
  ____DangerouslyImpreciseStyle_Internal,
  {|
    left: any, // use 'start' instead
    right: any, // use 'end' instead
    paddingLeft: any, // use 'paddingStart' instead
    paddingRight: any, // use 'paddingEnd' instead
    marginLeft: any, // use 'marginStart' instead
    marginRight: any, // use 'marginEnd' instead
    borderLeftWidth: any, // use 'borderStartWidth' instead
    borderRightWidth: any, // use 'borderEndWidth' instead
    borderLeftColor: any, // use 'borderStartColor' instead
    borderRightColor: any, // use 'borderEndColor' instead
    borderBottomLeftRadius: any, // use 'borderBottomStartRadius' instead
    borderBottomRightRadius: any, // use 'borderBottomEndRadius' instead
    borderTopLeftRadius: any, // use 'borderTopStartRadius' instead
    borderTopRightRadius: any, // use 'borderTopEndRadius' instead
  |},
>;

export type StyleObjectType = {
  +[key: string]: $Shape<ReducedDangerouslyImpreciseStyle>,
};

export type PlatformStyleObjectType = {
  +[key: string]: $Shape<
    $Rest<
      ReducedDangerouslyImpreciseStyle,
      {|
        elevation: any, // elevation should be only used under the Android key
      |},
    > & {
      android: ReducedDangerouslyImpreciseStyle,
      ios: ReducedDangerouslyImpreciseStyle,
      web: {
        ...ReducedDangerouslyImpreciseStyle,
        position?: 'absolute' | 'relative' | 'fixed',
        overflow?: 'visible' | 'hidden' | 'scroll' | 'auto',
      }, // might need to be expanded
    },
  >,
};

export type StylePropType = ____DangerouslyImpreciseStyleProp_Internal;
