export function updateProfileSelector(profile) {
  // eslint-disable-next-line camelcase
  const data = {
    ...profile,
    parents:
    profile.parents.map((el) => ({
      full_name: `${el.first_name} ${el.last_name}`,
      id: el.id,
      description: el.description
    }))
  };
  return { data };
}
