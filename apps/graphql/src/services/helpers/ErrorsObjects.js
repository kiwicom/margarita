// @flow strict

export function TimeoutErrorObject(code: number, message: string) {
  this.code = code;
  this.message = message;
}

export function ResponseErrorObject(code: number, message: string) {
  this.code = code;
  this.message = message;
}
