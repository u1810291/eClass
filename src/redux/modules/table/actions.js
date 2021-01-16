import types from '../../../constants/action-types';

export const set = (headers, type) => ({
  type: types[`TABLE_${type}_HEADER_SET`],
  headers
});
export const update = (headerId, type) => ({
  type: types[`TABLE_${type}_HEADER_UPDATE`],
  headerId
});
export const save = (type) => ({ type: types[`TABLE_${type}_HEADER_SAVE`] });
export const reset = (type) => ({ type: types[`TABLE_${type}_HEADER_RESET`] });
