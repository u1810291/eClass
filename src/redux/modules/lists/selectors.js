export function dataSelector(data) {
  const { content } = data;
  const filtered = content.map((el) => ({
    id: el.id,
    value: el.name
  }));
  return { data: filtered };
}

export function reasonSelector(data) {
  const { content } = data;
  const filtered = content.map((el) => ({
    description: el.description,
    id: el.id,
    value: el.name,
    names: el.names.map((item) => ({
      description: item.description,
      id: item.id,
      name: item.name
    }))
  }));
  return { data: filtered };
}

export function userSelector(users) {
  const { content } = users;
  const filtered = content.map((el) => ({
    id: el.id,
    value: el.first_name
  }));
  return { data: filtered };
}
