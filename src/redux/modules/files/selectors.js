export function dataSelector(data) {
  // eslint-disable-next-line camelcase

  const formData = new FormData();
  formData.set('file', data.file[0], data.file[0].name);

  const filtered = ({
    desc: data.desc,
    till_date: data.till_date.toISOString(),
    from_date: data.from_date.toISOString(),
    file: formData
  });
  return { data: filtered };
}
