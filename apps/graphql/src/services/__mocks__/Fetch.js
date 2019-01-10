// @flow

export default async function fetchMock(
  url: string,
  method: string = 'GET',
  options?: Object = {},
): Promise<any> {
  const response = await fetch(url, {
    method: method,
    ...options,
  });
  return response.json();
}
