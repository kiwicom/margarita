// @flow

export default async function fetchMock(
  url: string,
  method: string = 'GET',
  options?: Object = {},
): Promise<any> {
  try {
    const response = await fetch(url, {
      method: method,
      ...options,
    });
    return response.json();
  } catch (err) {
    throw err;
  }
}
