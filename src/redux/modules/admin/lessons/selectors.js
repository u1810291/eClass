export function dataSelector(lesson) {
  const { content } = lesson;
  const filtered = content.map((el) => ({
    rescheduled: el.rescheduled,
    scheduled_start: el.scheduled_start,
    time_to_start: el.time_to_start
  }));
  return { data: filtered };
}
