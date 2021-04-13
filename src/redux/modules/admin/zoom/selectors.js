/* eslint-disable camelcase */

export function dataSelector(lesson) {
  const { total_elements, content } = lesson;
  const filtered = content;
  return { total: total_elements, data: filtered };
}
