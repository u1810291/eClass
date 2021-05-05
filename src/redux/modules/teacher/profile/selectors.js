export function dataSelector(content, image) {
  // eslint-disable-next-line camelcase
  const filtered = {
    address: content.address,
    average_rating: content.average_rating,
    date_of_birth: content.date_of_birth,
    description: content.description,
    email: content.email,
    first_name: content.first_name,
    id: content.id,
    lang: content.lang,
    last_name: content.last_name,
    middle_name: content.middle_name,
    password: content.password,
    phones: content.phones,
    photo_url: image,
    specialization: content.specialization,
    subjects: content.subjects,
    username: content.username
  };
  return { data: filtered };
}
