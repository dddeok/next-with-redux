// 객체 배열을 넣으면 { ids: string[], byId: {} 구조로 만들어줌 }

interface NormalizedReturn<Entity extends object> {
  ids: string[];
  byId: { [id: string]: Entity };
}

export const simpleNormalizr = <Entity extends object>(
  arr: Entity[],
  idKey: string,
): NormalizedReturn<Entity> => {
  const ids = [];
  const byId = {};
  for (const item of arr) {
    ids.push(item[idKey]);
    byId[item[idKey]] = item;
  }
  return { ids, byId };
};
