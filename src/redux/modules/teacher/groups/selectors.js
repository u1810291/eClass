/* eslint-disable no-return-assign */
/* eslint-disable camelcase */

export function dataSelector(lesson) {
  const { total_elements, content } = lesson;
  return { total: total_elements, data: content };
}
