export function dataSelector(data) {
  // eslint-disable-next-line camelcase
  const { total_elements, content } = data;
  const filtered = content.map((el) => ({
    available_balance: el.available_balance,
    balance: el.balance,
    id: el.id,
    name: el.name
  }));

  return { total: total_elements, data: filtered };
}
