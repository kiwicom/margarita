// @flow

import * as React from 'react';
import * as Icons from '@kiwicom/orbit-components/lib/icons';

import type { Props } from './IconTypes';

export default function Icon({ name, color, size = 'medium' }: Props) {
  const capitalizedName = name[0].toUpperCase() + name.slice(1);
  const orbitName = capitalizedName.replace(/(-\w)/g, m => m[1].toUpperCase());
  if (orbitName in Icons) {
    return Icons[orbitName]({ customColor: color, size });
  }
  return <Icons.QuestionCircle customColor={color} size={size} />;
}
