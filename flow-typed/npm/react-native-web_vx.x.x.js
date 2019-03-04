// @flow
// flow-typed signature: aa279642a4cb992a390fedc5acdc896d
// flow-typed version: react-native_v0.5.0/flow_v0.65.0

type RNW$Dimension = {|
  fontScale: number,
  height: number,
  scale: number,
  width: number
|};
type RNW$DimensionsObject = {| window: RNW$Dimension, screen: RNW$Dimension |};

type RNW$StyleObject = { [key: string]: * };
type RNW$Style = mixed;
type RNW$Styles = RNW$StyleObject | RNW$Style | Array<RNW$Styles>;

type RNW$MeasureLayoutCallback = (
  x: number,
  y: number,
  width: number,
  height: number,
  left: number,
  top: number
) => void;

type RNW$MeasureInWindowCallback = (
  left: number,
  top: number,
  width: number,
  height: number
) => void;

declare class RNW$NativeMethodsMixin {
  blur: () => void;
  focus: () => void;
  measure: (callback: RNW$MeasureLayoutCallback) => void;
  measureInWindow: (callback: RNW$MeasureInWindowCallback) => void;
  measureLayout: (
    relativeToNativeNode: {},
    onSuccess: RNW$MeasureLayoutCallback,
    onFail: () => void
  ) => void;
  setNativeProps: (nativeProps: {}) => void;
}

type RNW$ViewLayout = { x: number, y: number, width: number, height: number };

type RNW$Text$Props = {
  accessibilityComponentType?: string,
  accessibilityLabel?: string,
  accessibilityLiveRegion?: "assertive" | "none" | "polite",
  accessibilityRole?: string,
  accessibilityTraits?: Array<string> | string,
  accessible?: boolean,
  children?: React$Node,
  dir?: "ltr" | "rtl" | "auto",
  importantForAccessibility?: "auto" | "no" | "no-hide-descendents" | "yes",
  numberOfLines?: number,
  onBlur?: (event: SyntheticFocusEvent<*>) => void,
  onContextMenu?: (event: SyntheticMouseEvent<*>) => void,
  onFocus?: (event: SyntheticFocusEvent<*>) => void,
  onLayout?: (event: { nativeEvent: { layout: RNW$ViewLayout } }) => void,
  onPress?: (event: SyntheticTouchEvent<*>) => void,
  selectable?: boolean,
  style?: RNW$Styles,
  testID?: string
};
type RNW$View$Props = {
  accessibilityComponentType?: string,
  accessibilityLabel?: string,
  accessibilityLiveRegion?: "none" | "polite" | "assertive",
  accessibilityRole?: string,
  accessibilityTraits?: string | Array<string>,
  accessible?: boolean,
  children?: any,
  hitSlop?: $PropertyType<
    $Exports<"react-native-web/dist/exports/EdgeInsetsPropType/index">,
    "EdgeInsetsProp"
  >,
  importantForAccessibility?: "auto" | "yes" | "no" | "no-hide-descendants",
  onBlur?: (event: SyntheticFocusEvent<*>) => void,
  onClick?: (event: SyntheticMouseEvent<*>) => void,
  onClickCapture?: (event: SyntheticMouseEvent<*>) => void,
  onContextMenu?: (event: SyntheticMouseEvent<*>) => void,
  onFocus?: (event: SyntheticFocusEvent<*>) => void,
  onLayout?: (event: { nativeEvent: { layout: RNW$ViewLayout } }) => void,
  onResponderGrant?: () => void,
  onResponderMove?: () => void,
  onResponderReject?: () => void,
  onResponderRelease?: () => void,
  onResponderTerminate?: () => void,
  onResponderTerminationRequest?: () => void,
  onStartShouldSetResponder?: () => void,
  onStartShouldSetResponderCapture?: () => void,
  onMoveShouldSetResponder?: () => void,
  onMoveShouldSetResponderCapture?: () => void,
  onTouchCancel?: (event: SyntheticTouchEvent<*>) => void,
  onTouchCancelCapture?: (event: SyntheticTouchEvent<*>) => void,
  onTouchEnd?: (event: SyntheticTouchEvent<*>) => void,
  onTouchEndCapture?: (event: SyntheticTouchEvent<*>) => void,
  onTouchMove?: (event: SyntheticTouchEvent<*>) => void,
  onTouchMoveCapture?: (event: SyntheticTouchEvent<*>) => void,
  onTouchStart?: (event: SyntheticTouchEvent<*>) => void,
  onTouchStartCapture?: (event: SyntheticTouchEvent<*>) => void,
  pointerEvents?: "box-none" | "none" | "box-only" | "auto",
  style?: RNW$Styles,
  target?: "_blank" | "_parent" | "_self" | "_top",
  testID?: string
};

declare module "react-native-web" {
  declare module.exports: {
    ART: $Exports<"react-native-web/dist/exports/ART/index">,
    ActivityIndicator: $Exports<
      "react-native-web/dist/exports/ActivityIndicator/index"
    >,
    Animated: $Exports<"react-native-web/dist/exports/Animated/index">,
    AppRegistry: $Exports<"react-native-web/dist/exports/AppRegistry/index">,
    AppState: $Exports<"react-native-web/dist/exports/AppState/index">,
    AsyncStorage: $Exports<"react-native-web/dist/exports/AsyncStorage/index">,
    BackHandler: $Exports<"react-native-web/dist/exports/BackHandler/index">,
    Button: $Exports<"react-native-web/dist/exports/Button/index">,
    CheckBox: $Exports<"react-native-web/dist/exports/CheckBox/index">,
    Clipboard: $Exports<"react-native-web/dist/exports/Clipboard/index">,
    ColorPropType: $Exports<
      "react-native-web/dist/exports/ColorPropType/index"
    >,
    Dimensions: $Exports<"react-native-web/dist/exports/Dimensions/index">,
    Easing: $Exports<"react-native-web/dist/exports/Easing/index">,
    EdgeInsetsPropType: $Exports<
      "react-native-web/dist/exports/EdgeInsetsPropType/index"
    >,
    FlatList: $Exports<"react-native-web/dist/exports/FlatList/index">,
    I18nManager: $Exports<"react-native-web/dist/exports/I18nManager/index">,
    Image: $Exports<"react-native-web/dist/exports/Image/index">,
    ImageBackground: $Exports<
      "react-native-web/dist/exports/ImageBackground/index"
    >,
    InteractionManager: $Exports<
      "react-native-web/dist/exports/InteractionManager/index"
    >,
    Keyboard: $Exports<"react-native-web/dist/exports/Keyboard/index">,
    KeyboardAvoidingView: $Exports<
      "react-native-web/dist/exports/KeyboardAvoidingView/index"
    >,
    Linking: $Exports<"react-native-web/dist/exports/Linking/index">,
    ListView: $Exports<"react-native-web/dist/exports/ListView/index">,
    Modal: $Exports<"react-native-web/dist/exports/Modal/index">,
    NativeModules: $Exports<
      "react-native-web/dist/exports/NativeModules/index"
    >,
    NetInfo: $Exports<"react-native-web/dist/exports/NetInfo/index">,
    PanResponder: $Exports<"react-native-web/dist/exports/PanResponder/index">,
    Picker: $Exports<"react-native-web/dist/exports/Picker/index">,
    PixelRatio: $Exports<"react-native-web/dist/exports/PixelRatio/index">,
    Platform: $Exports<"react-native-web/dist/exports/Platform/index">,
    PointPropType: $Exports<
      "react-native-web/dist/exports/PointPropType/index"
    >,
    ProgressBar: $Exports<"react-native-web/dist/exports/ProgressBar/index">,
    RefreshControl: $Exports<
      "react-native-web/dist/exports/RefreshControl/index"
    >,
    SafeAreaView: $Exports<"react-native-web/dist/exports/SafeAreaView/index">,
    ScrollView: $Exports<"react-native-web/dist/exports/ScrollView/index">,
    SectionList: $Exports<"react-native-web/dist/exports/SectionList/index">,
    Slider: $Exports<"react-native-web/dist/exports/Slider/index">,
    StatusBar: $Exports<"react-native-web/dist/exports/StatusBar/index">,
    StyleSheet: $Exports<"react-native-web/dist/exports/StyleSheet/index">,
    Switch: $Exports<"react-native-web/dist/exports/Switch/index">,
    Text: $Exports<"react-native-web/dist/exports/Text/index">,
    TextInput: $Exports<"react-native-web/dist/exports/TextInput/index">,
    TextPropTypes: $Exports<
      "react-native-web/dist/exports/TextPropTypes/index"
    >,
    Touchable: $Exports<"react-native-web/dist/exports/Touchable/index">,
    TouchableHighlight: $Exports<
      "react-native-web/dist/exports/TouchableHighlight/index"
    >,
    TouchableNativeFeedback: $Exports<
      "react-native-web/dist/exports/TouchableNativeFeedback/index"
    >,
    TouchableOpacity: $Exports<
      "react-native-web/dist/exports/TouchableOpacity/index"
    >,
    TouchableWithoutFeedback: $Exports<
      "react-native-web/dist/exports/TouchableWithoutFeedback/index"
    >,
    UIManager: $Exports<"react-native-web/dist/exports/UIManager/index">,
    Vibration: $Exports<"react-native-web/dist/exports/Vibration/index">,
    View: $Exports<"react-native-web/dist/exports/View/index">,
    ViewPropTypes: $Exports<
      "react-native-web/dist/exports/ViewPropTypes/index"
    >,
    VirtualizedList: $Exports<
      "react-native-web/dist/exports/VirtualizedList/index"
    >,
    createElement: $Exports<
      "react-native-web/dist/exports/createElement/index"
    >,
    findNodeHandle: $Exports<
      "react-native-web/dist/exports/findNodeHandle/index"
    >,
    processColor: $Exports<"react-native-web/dist/exports/processColor/index">,
    render: $Exports<"react-native-web/dist/exports/render/index">,
    unmountComponentAtNode: $Exports<
      "react-native-web/dist/exports/unmountComponentAtNode/index"
    >
  };

  declare export type RNW$Dimensions = RNW$DimensionsObject;
  declare export type RNW$LayoutEvent = RNW$LayoutEvent;
  declare export type RNW$NativeEvent<E> = { nativeEvent: E };
  declare export type RNW$Styles = RNW$Styles;
}

/**
 * We include stubs for each file inside this npm package in case you need to
 * require those files directly. Feel free to delete any files that aren't
 * needed.
 */
declare module "react-native-web/dist/exports/ActivityIndicator/index" {
  declare type RNW$ActivityIndicator$Props = RNW$View$Props & {
    animating?: boolean,
    color?: string,
    hidesWhenStopped?: boolean,
    size?: "small" | "large" | number
  };
  declare module.exports: React$ComponentType<RNW$ActivityIndicator$Props>;
}

declare module "react-native-web/dist/exports/Animated/index" {
  declare module.exports: any;
}

declare module "react-native-web/dist/exports/AppRegistry/index" {
  declare type RNW$AppRegistry$ComponentProvider = () => React$ComponentType<any>;
  declare type RNW$AppRegistry$AppConfig = {
    appKey: string,
    component?: RNW$AppRegistry$ComponentProvider,
    run?: () => void,
    section?: boolean
  };
  declare class RNW$AppRegistry {
    static getAppKeys(): Array<string>;
    static getApplication(appKey: string, appParameters?: {}): string;
    static registerComponent(
      appKey: string,
      getComponentFunc: RNW$AppRegistry$ComponentProvider
    ): string;
    static registerConfig(config: Array<RNW$AppRegistry$AppConfig>): void;
    static registerRunnable(appKey: string, run: () => void): string;
    static runApplication(appKey: string, appParameters?: {}): void;
    static unmountApplicationComponentAtRootTag(rootTag: {}): void;
  }
  declare module.exports: typeof RNW$AppRegistry;
}

declare module "react-native-web/dist/exports/AppState/index" {
  declare type RNW$AppState$State = "background" | "active";
  declare type RNW$AppState$Listener = (state: RNW$AppState$State) => any;
  declare class RNW$AppState {
    static isAvailable(): boolean;
    static get currentState(): RNW$AppState$State;
    static addEventListener(
      type: RNW$AppState$State,
      handler: RNW$AppState$Listener
    ): void;
    static removeEventListener(
      type: RNW$AppState$State,
      handler: RNW$AppState$Listener
    ): void;
  }
  declare module.exports: typeof RNW$AppState;
}

declare module "react-native-web/dist/exports/ART/index" {
  declare module.exports: any;
}

declare module "react-native-web/dist/exports/AsyncStorage/index" {
  declare module.exports: any;
}

declare module "react-native-web/dist/exports/BackHandler/index" {
  declare module.exports: any;
}

declare module "react-native-web/dist/exports/Button/index" {
  declare type RNW$Button$Props = {
    accessibilityLabel?: string,
    color?: string,
    disabled?: boolean,
    onPress?: (event: SyntheticTouchEvent<*>) => void,
    style?: RNW$Styles,
    testID?: string,
    textStyle?: RNW$Styles,
    title: string
  };
  declare module.exports: React$ComponentType<RNW$Button$Props>;
}

declare module "react-native-web/dist/exports/CheckBox/index" {
  declare type RNW$Checkbox$Props = RNW$View$Props & {
    color?: string,
    disabled?: boolean,
    onChange?: (event: SyntheticInputEvent<*>) => void,
    onValueChange?: (value: boolean) => void,
    value?: boolean
  };
  declare class RNW$Checkbox extends React$Component<RNW$Checkbox$Props> {
    blur: () => void;
    focus: () => void;
  }
  declare module.exports: typeof RNW$Checkbox;
}

declare module "react-native-web/dist/exports/Clipboard/index" {
  declare class RNW$Clipboard {
    static isAvailable(): boolean;
    static getString(): Promise<string>;
    static setString(text: string): boolean;
  }
  declare module.exports: typeof RNW$Clipboard;
}

declare module "react-native-web/dist/exports/ColorPropType/index" {
  declare module.exports: string;
}

declare module "react-native-web/dist/exports/createElement/index" {
  declare module.exports: (string | React$Element<*>, {}) => React$Node;
}

declare module "react-native-web/dist/exports/Dimensions/index" {
  declare class RNW$Dimensions {
    static get(
      dimension: "window" | "screen"
    ): {| width: number, height: number |};
    static set(initialDimensions: ?{ [key: string]: any }): void;

    static addEventListener(
      type: "change",
      callback: (dimensions: RNW$DimensionsObject) => void
    ): void;
    static removeEventListener(
      type: "change",
      callback: (dimensions: RNW$DimensionsObject) => void
    ): void;
  }

  declare module.exports: typeof RNW$Dimensions;
}

declare module "react-native-web/dist/exports/Easing/index" {
  declare module.exports: any;
}

declare module "react-native-web/dist/exports/EdgeInsetsPropType/index" {
  declare module.exports: {
    EdgeInsetsProp: { top: number, bottom: number, left: number, right: number }
  };
}

declare module "react-native-web/dist/exports/findNodeHandle/index" {
  declare module.exports: any;
}

declare module "react-native-web/dist/exports/FlatList/index" {
  declare module.exports: any;
}

declare module "react-native-web/dist/exports/I18nManager/index" {
  declare module.exports: {
    isRTL: boolean,
    allowRTL(allowRTL: boolean): void,
    forceRTL(forceRTL: boolean): void,
    setPreferredLanguageRTL(isRTL: boolean): void
  };
}

declare module "react-native-web/dist/exports/Image/index" {
  declare type RNW$Image$Props = RNW$View$Props & {
    defaultSource?: { +uri: string, +width: number, +height: number },
    draggable?: boolean,
    onError?: ({ nativeEvent: { error: string } }) => void,
    onLoad?: () => void,
    onLoadEnd?: () => void,
    onLoadStart?: () => void,
    resizeMode?: "center" | "contain" | "cover" | "none" | "repeat" | "stretch",
    source?: string | {| +uri: string, +width?: number, +height?: number |},
    style?: RNW$Styles
  };

  declare class RNW$Image extends React$Component<RNW$Image$Props> {
    getSize: (
      uri: string,
      success: (width: number, height: number) => {},
      failure: () => void
    ) => void;
    prefetch: (url: string) => Promise<void>;
  }
  declare module.exports: typeof RNW$Image;
}

declare module "react-native-web/dist/exports/ImageBackground/index" {
  declare type RNW$Image = $Exports<
    "react-native-web/dist/exports/Image/index"
  >;
  declare type RNW$Image$Props = React$ElementConfig<RNW$Image>;
  declare type RNW$ImageBackground$Props = RNW$Image$Props & {
    imageStyle?: $PropertyType<RNW$Image$Props, "style">
  };
  declare module.exports: React$ComponentType<RNW$ImageBackground$Props>;
}

declare module "react-native-web/dist/exports/InteractionManager/index" {
  declare module.exports: {
    Events: {
      interactionStart: "interactionStart",
      interactionComplete: "interactionComplete"
    },
    runAfterInteractions(callback: () => void): void,
    createInteractionHandle(): number,
    clearInteractionHandle(handle: number): void,
    addListener(): void
  };
}

declare module "react-native-web/dist/exports/Keyboard/index" {
  declare module.exports: any;
}

declare module "react-native-web/dist/exports/KeyboardAvoidingView/index" {
  declare type RNW$KeyboardAvoidingView$Props = RNW$View$Props & {
    behavior?: "height" | "padding" | "position",
    contentContainerStyle?: RNW$Styles,
    keyboardVerticalOffset?: number
  };
  declare module.exports: React$ComponentType<RNW$KeyboardAvoidingView$Props>;
}

declare module "react-native-web/dist/exports/Linking/index" {
  declare module.exports: {
    addEventListener(): void,
    removeEventListener(): void,
    canOpenURL(): Promise<boolean>,
    getInitialURL(): Promise<string>,
    openURL(url: string): Promise<{} | void>
  };
}

declare module "react-native-web/dist/exports/ListView/index" {
  declare module.exports: any;
}

declare module "react-native-web/dist/exports/Modal/index" {
  declare module.exports: any;
}

declare module "react-native-web/dist/exports/NativeModules/index" {
  declare module.exports: any;
}

declare module "react-native-web/dist/exports/NetInfo/index" {
  declare type RNW$NetInfo$EventType = "change";
  declare type RNW$NetInfo$ConnectionInfo = {
    effectiveType: string,
    type: string
  };
  declare type RNW$NetInfo$EventHandler = (
    info: RNW$NetInfo$ConnectionInfo
  ) => void;
  declare type RNW$NetInfo$ConnectedHandler = (isConnected: boolean) => void;
  declare module.exports: {
    addEventListener(
      type: RNW$NetInfo$EventType,
      handler: RNW$NetInfo$EventHandler
    ): { remove: () => void },
    removeEventListener(
      type: RNW$NetInfo$EventType,
      handler: RNW$NetInfo$EventHandler
    ): void,
    fetch(): Promise<any>,
    getConnectionInfo(): Promise<RNW$NetInfo$ConnectionInfo>,
    isConnected: {
      addEventListener(
        type: RNW$NetInfo$EventType,
        handler: RNW$NetInfo$ConnectedHandler
      ): { remove: () => void },
      removeEventListener(
        type: RNW$NetInfo$EventType,
        handler: RNW$NetInfo$ConnectedHandler
      ): void,
      fetch(): Promise<boolean>,
      getConnectionInfo(): Promise<boolean>
    }
  };
}

declare module "react-native-web/dist/exports/PanResponder/index" {
  declare module.exports: any;
}

declare module "react-native-web/dist/exports/Picker/index" {
  declare type RNW$PickerItem$Props = {
    color?: string,
    label: string,
    testID?: string,
    value?: number | string
  };
  declare type RNW$PickerItem = React$ComponentType<RNW$PickerItem$Props>;
  declare type RNW$Picker$Children =
    | React$Element<RNW$PickerItem>
    | Iterable<RNW$Picker$Children>;
  declare type RNW$Picker$Props = {
    children?: RNW$Picker$Children,
    enabled?: boolean,
    onValueChange?: Function,
    selectedValue?: number | string,
    style?: RNW$Style,
    testID?: string,
    itemStyle?: RNW$Style,
    mode?: string,
    prompt?: string
  };
  declare class $RNW$Picker extends React$Component<RNW$Picker$Props> {
    static Item: RNW$PickerItem;
  }
  declare module.exports: typeof $RNW$Picker;
}

declare module "react-native-web/dist/exports/PixelRatio/index" {
  declare class RNW$PixelRatio {
    static get(): number;
    static getFontScale(): number;
    static getPixelSizeForLayoutSize(layoutSize: number): number;
    static roundToNearestPixel(layoutSize: number): number;
  }
  declare module.exports: typeof RNW$PixelRatio;
}

declare module "react-native-web/dist/exports/Platform/index" {
  declare module.exports: {
    OS: "web",
    select: (obj: {}) => any
  };
}

declare module "react-native-web/dist/exports/PointPropType/index" {
  declare module.exports: any;
}

declare module "react-native-web/dist/exports/processColor/index" {
  declare module.exports: (
    color: ?(string | number),
    opacity?: number
  ) => string;
}

declare module "react-native-web/dist/exports/ProgressBar/index" {
  declare type RNW$ProgressBar$Props = RNW$View$Props & {
    color?: string,
    indeterminate?: boolean,
    progress?: number,
    trackColor?: string
  };
  declare module.exports: React$ComponentType<RNW$ProgressBar$Props>;
}

declare module "react-native-web/dist/exports/RefreshControl/index" {
  declare module.exports: any;
}

declare module "react-native-web/dist/exports/render/index" {
  declare module.exports: any;
}

declare module "react-native-web/dist/exports/SafeAreaView/index" {
  declare module.exports: $Exports<"react-native-web/dist/exports/View/index">;
}

declare module "react-native-web/dist/exports/ScrollView/index" {
  declare type RNW$ScrollView$Props = RNW$View$Props & {
    contentContainerStyle?: RNW$Styles,
    horizontal?: boolean,
    keyboardDismissMode?: "none" | "interactive" | "on-drag",
    onContentSizeChange?: () => void,
    onScroll?: () => void,
    pagingEnabled?: boolean,
    refreshControl?: React$Node,
    scrollEnabled?: boolean,
    scrollEventThrottle?: number,
    style?: RNW$Styles
  };
  declare class RNW$ScrollView extends React$Component<RNW$ScrollView$Props> {
    getInitialState(): void;
    setNativeProps(props: {}): void;
    getScrollResponder(): any;
    getScrollableNode(): any;
    getInnerViewNode(): any;
    scrollTo(
      y?: number | { x?: number, y?: number, animated?: boolean },
      x?: number,
      animated?: boolean
    ): void;
    scrollToEnd(options?: { animated?: boolean }): void;
    scrollWithoutAnimationTo(y?: number, x?: number): void;
  }
  declare module.exports: typeof RNW$ScrollView;
}

declare module "react-native-web/dist/exports/SectionList/index" {
  declare module.exports: any;
}

declare module "react-native-web/dist/exports/Slider/index" {
  declare module.exports: any;
}

declare module "react-native-web/dist/exports/StatusBar/index" {
  declare class RNW$StatusBar extends React$Component<*> {
    static setBackgroundColor(): void;
    static setBarStyle(): void;
    static setHidden(): void;
    static setNetworkActivityIndicatorVisible(): void;
    static setTranslucent(): void;
  }
  declare module.exports: typeof RNW$StatusBar;
}

declare module "react-native-web/dist/exports/StyleSheet/index" {
  declare interface RNW$StyleSheet {
    absoluteFill: RNW$Style;
    absoluteFillObject: RNW$StyleObject;
    create(styles: { [key: string]: RNW$StyleObject }): {
      [key: string]: RNW$Style
    };
    flatten(style: { [key: string]: RNW$Style }): ?{
      [key: string]: RNW$StyleObject
    };
    hairlineWidth: number;
  }
  declare module.exports: RNW$StyleSheet;
}

declare module "react-native-web/dist/exports/Switch/index" {
  declare type RNW$Switch$Props = RNW$View$Props & {
    activeThumbColor?: string,
    activeTrackOColor?: string,
    disabled?: boolean,
    onTintColor?: string,
    onValueChange?: (value: boolean) => void,
    thumbColor?: string,
    trackColor?: string,
    value?: boolean,
    tintColor?: string,
    thumbTintColor?: string
  };
  declare class RNW$Switch extends React$Component<RNW$Switch$Props> {
    static propTypes: {};
    static defaultProps: {
      activeThumbColor: "#009588",
      activeTrackColor: "#A3D3CF",
      disabled: false,
      thumbColor: "#FAFAFA",
      trackColor: "#939393",
      value: false
    };
  }
  declare module.exports: typeof RNW$Switch;
}

declare module "react-native-web/dist/exports/Text/index" {
  declare class RNW$Text extends React$Component<RNW$Text$Props> {
    setNativeProps: (nativeProps: {}) => void;
  }
  declare module.exports: typeof RNW$Text;
}

declare module "react-native-web/dist/exports/TextInput/index" {
  declare type RNW$TextInput$Props = RNW$View$Props & {
    autoCapitalize?: "characters" | "none" | "sentences" | "words",
    autoComplete?: "string",
    autoCorrect?: boolean,
    autoFocus?: boolean,
    blurOnSubmit?: boolean,
    clearTextOnFocus?: boolean,
    defaultValue?: string,
    editable?: boolean,
    keyboardType?:
      | "default"
      | "email-address"
      | "numeric"
      | "phone-pad"
      | "search"
      | "url"
      | "web-search",
    maxLength?: number,
    multiline?: boolean,
    numberOfLines?: number,
    onChange?: () => void,
    onChangeText?: (value: string) => void,
    onKeyPress?: () => void,
    onSelectionChange?: () => void,
    onSubmitEditing?: () => void,
    placeholder?: string,
    placeholderTextColor?: string,
    secureTextEntry?: boolean,
    selection?: {| start: number, end?: number |},
    selectTextOnFocus?: boolean,
    spellCheck?: boolean,
    style?: RNW$Styles,
    value?: string
  };

  declare class RNW$TextInput extends React$Component<RNW$TextInput$Props> {
    blur: () => void;
    clear: () => void;
    focus: () => void;
    isFocused: () => boolean;
  }
  declare module.exports: typeof RNW$TextInput;
}

declare module "react-native-web/dist/exports/TextPropTypes/index" {
  declare module.exports: RNW$Text$Props;
}

declare module "react-native-web/dist/exports/Touchable/index" {
  declare module.exports: any;
}

declare module "react-native-web/dist/exports/TouchableHighlight/index" {
  declare type $TouchableWithoutFeedback = $Exports<
    "react-native-web/dist/exports/TouchableWithoutFeedback/index"
  >;
  declare type RNW$TouchableHighlight$Props = React$ElementConfig<$TouchableWithoutFeedback> & {
    activeOpacity?: number,
    onHideUnderlay?: () => void,
    onShowUnderlay?: () => void,
    underlayColor?: string
  };
  declare class RNW$TouchableHighlight extends React$Component<RNW$TouchableHighlight$Props> {
    setOpacityTo(value: number, duration: number): void;
  }
  declare module.exports: typeof RNW$TouchableHighlight;
}

declare module "react-native-web/dist/exports/TouchableNativeFeedback/index" {
  declare module.exports: any;
}

declare module "react-native-web/dist/exports/TouchableOpacity/index" {
  declare type $TouchableWithoutFeedback = $Exports<
    "react-native-web/dist/exports/TouchableWithoutFeedback/index"
  >;
  declare type RNW$ToucableOpacity$Props = React$ElementConfig<$TouchableWithoutFeedback> & {
    activeOpacity?: number,
    focusedOpacity?: number
  };
  declare class RNW$TouchableOpacity extends React$Component<RNW$ToucableOpacity$Props> {
    setOpacityTo(value: number, duration: number): void;
  }
  declare module.exports: typeof RNW$TouchableOpacity;
}

declare module "react-native-web/dist/exports/TouchableWithoutFeedback/index" {
  declare type RNW$TouchableWithoutFeedback$Props = RNW$View$Props & {
    delayLongPress?: number,
    delayPressIn?: number,
    delayPressOut?: number,
    disabled?: boolean,
    onLongPress?: () => void,
    onPress?: () => void,
    onPressIn?: () => void,
    onPressOut?: () => void,
    pressRetentionOffset?: {
      top: number,
      left: number,
      bottom: number,
      right: number
    }
  };
  declare module.exports: React$ComponentType<RNW$TouchableWithoutFeedback$Props>;
}

declare module "react-native-web/dist/exports/UIManager/index" {
  declare interface RNW$UIManager {
    blur(node: HTMLElement): void;
    focus(node: HTMLElement): void;
    measure(node: mixed, callback: RNW$MeasureLayoutCallback): void;
    measureInWindow(node: mixed, callback: RNW$MeasureInWindowCallback): void;
    measureLayout(
      node: mixed,
      relativeToNativeNode: mixed,
      onFail: any,
      onSuccess: RNW$MeasureLayoutCallback
    ): void;
    updateView(node: mixed, props: {}, component: any): void;
  }
  declare module.exports: RNW$UIManager;
}

declare module "react-native-web/dist/exports/unmountComponentAtNode/index" {
  declare module.exports: any;
}

declare module "react-native-web/dist/exports/Vibration/index" {
  declare type RNW$Vibration$Pattern = number | Array<number>;
  declare module.exports: {
    cancel(): void,
    vibrate(pattern: RNW$Vibration$Pattern): void
  };
}

declare module "react-native-web/dist/exports/View/index" {
  declare class RNW$View extends React$Component<RNW$View$Props>
    mixins RNW$NativeMethodsMixin {}
  declare module.exports: typeof RNW$View;
}

declare module "react-native-web/dist/exports/ViewPropTypes/index" {
  declare module.exports: RNW$View$Props;
}

declare module "react-native-web/dist/exports/VirtualizedList/index" {
  declare module.exports: any;
}

declare module "react-native-web/dist/index" {
  declare module.exports: $Exports<"react-native-web">;
}
