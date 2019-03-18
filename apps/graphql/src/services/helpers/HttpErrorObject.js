// @flow strict

export function HttpErrorObject(code: number, message: string) {
  this.code = code;
  this.message = message;
}
