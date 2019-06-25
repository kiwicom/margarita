// @flow

/* Components */
export { Accordion } from './Accordion';
export { AdaptableBadge } from './AdaptableBadge';
export { Badge } from './Badge';
export { Button } from './Button';
export { Card } from './Card';
export { CarrierLogo } from './CarrierLogo';
export { Checkbox } from './Checkbox';
export { FilterButton } from './FilterButton';
export { FormLabel } from './FormLabel';
export { Icon } from './Icon';
export { Loader, PageLoader } from './Loader';
export { Notification } from './Notification';
export { LocalizedPrice } from './LocalizedPrice';
export { RadioButton } from './RadioButton';
export { Rating } from './Rating';
export { ServiceLogo } from './ServiceLogo';
export { Stepper } from './Stepper';
export { Text } from './Text';
export { TextInput } from './TextInput';
export { Tooltip, TooltipBubble } from './Tooltip';
export { DatePicker } from './DatePicker';
export { withHover } from './WithHover';
export { Slider } from './Slider';
export { Touchable } from './Touchable';
export { SegmentedButton } from './SegmentedButton';
export { Modal } from './Modal';
export { TagsInput } from './TagsInput';
export { OptionPicker } from './OptionPicker';
export {
  MenuGroup,
  MenuItem,
  MenuItemWrapper,
  MenuDescription,
} from './MenuGroup';
export { RangeDatePicker } from './RangeDatePicker';
export { Picker } from './Picker';
export { PickerButton } from './PickerButton';
export { TouchableWithoutFeedback } from './TouchableWithoutFeedback';
export { ExtendedTouchable } from './ExtendedTouchable';
export { ModalButtons } from './ModalButtons';

/* Utils */
export { StyleSheet } from './PlatformStyleSheet';
export { ThemeProvider, withTheme } from './ThemeProvider';
export { designTokens } from './DesignTokens';

/* Types */
export type { IconNameType } from './types/_generated-types';
export type { Theme } from './ThemeProvider';
export type { RangeDatePickerProps, WeekStartsType } from './RangeDatePicker';

export type {
  StylePropType,
  StyleObjectType,
  PlatformStyleObjectType,
} from './PlatformStyleSheet';

/* Fonts */

import Roboto from '../fonts/Roboto/Roboto-Regular.ttf';
import RobotoItalic from '../fonts/Roboto/Roboto-Italic.ttf';
import RobotoBold from '../fonts/Roboto/Roboto-Bold.ttf';
import RobotoBoldItalic from '../fonts/Roboto/Roboto-BoldItalic.ttf';
import OrbitIcons from '../fonts/orbit-icons.ttf';

const Fonts = {
  Roboto,
  RobotoItalic,
  RobotoBold,
  RobotoBoldItalic,
  OrbitIcons,
};

export { Fonts };
