export function dataSelector(lesson) {
  const filtered = {
    api_key: lesson.api_key,
    id: lesson.id,
    meeting_id: lesson.meeting_id,
    signature: lesson.signature,
    join_url: lesson.join_url,
    meeting_password: lesson.meeting_password,
    start_url: lesson.start_url

  };
  return { data: filtered };
}
