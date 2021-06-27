export function dataSelector(data) {
  // eslint-disable-next-line camelcase
  const { content, total_elements } = data;
  return { data: content, total: total_elements };
}
