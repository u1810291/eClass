export function dataSelector(data) {
  // eslint-disable-next-line camelcase
  const filtered = data;
  console.log(filtered);
  return { data: filtered };
}
