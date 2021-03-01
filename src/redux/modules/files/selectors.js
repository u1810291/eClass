export function dataSelector(data) {
  // eslint-disable-next-line camelcase

  const formData = new FormData();
  formData.append('file', data.file[0], data.file[0].name);
  formData.append('desc', data.desc);
  formData.append('till_date', data.till_date.toISOString());
  formData.append('from_date', data.from_date.toISOString());
  formData.append('type', data.type);
  console.log(Object.fromEntries(formData));
  return formData;
}
