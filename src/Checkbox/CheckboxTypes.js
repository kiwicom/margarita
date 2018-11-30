// @flow

import * as React from 'react';

export type CheckboxProps = {|
  +label?: React.Node,
  +value?: string, // this prop is currently used only on web
  +hasError?: boolean,
  +disabled?: boolean,
  +checked?: boolean,
  +name?: string, // this prop is currently used only on web
  +info?: React.Node,
  +onChange?: () => void,
|};

export type CheckboxSharedProps = {|
  +label?: React.Node,
  +hasError?: boolean,
  +disabled?: boolean,
  +checked?: boolean,
  +info?: React.Node,
  +onPress?: () => void,
|};

export type CheckboxSharedState = {|
  focusDisplayed: boolean,
  hovered: boolean,
  pressed: boolean,
|};

export type CheckboxIconProps = {|
  +checked?: boolean,
  +hasError?: boolean,
  +disabled?: boolean,
  +focused?: boolean,
  +hovered?: boolean,
  +pressed?: boolean,
|};

export type HoverableProps = {|
  +children: React.Element<any>,
  +onMouseEnter?: () => void,
  +onMouseLeave?: () => void,
|};
