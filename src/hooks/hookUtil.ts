export function getRecordFromList<T extends { id: string }>(
  list: T[]
): Record<string, T> {
  const record: Record<string, T> = {};
  list.forEach((item) => {
    record[item.id] = item;
  });
  return record;
}
