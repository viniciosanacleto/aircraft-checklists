type Obj = {
  [key: string | number | symbol]: any;
};

export function sortObjByKeyAlphabetically(unordered: Obj) {
  return Object.keys(unordered)
    .sort()
    .reduce((obj: Obj, key) => {
      obj[key] = unordered[key];
      return obj;
    }, {});
}
