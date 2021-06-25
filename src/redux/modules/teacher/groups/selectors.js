/* eslint-disable no-return-assign */
/* eslint-disable camelcase */

export function dataSelector(group) {
  const { total_elements, content } = group;
  return { total: total_elements, data: content };
}
