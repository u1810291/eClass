export function dataSelector(data) {
  // eslint-disable-next-line camelcase
  const { total_elements, content } = data;

  return { total: total_elements, data: content };
}
