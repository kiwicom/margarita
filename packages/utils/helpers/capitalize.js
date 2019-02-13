// @flow

export const capitalize = (text: ?string) => {
  if (text == null) {
    return null;
  }
  if (text.length > 0) {
    return text[0].toUpperCase() + text.slice(1);
  }
  return text;
};
