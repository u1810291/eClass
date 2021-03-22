export function dataSelector(lesson) {
  const filtered = {
    api_key: lesson.api_key,
    id: lesson.id,
    meeting_id: lesson.meeting_id,
    signature: lesson.signature
  };
  return { data: filtered };
}
