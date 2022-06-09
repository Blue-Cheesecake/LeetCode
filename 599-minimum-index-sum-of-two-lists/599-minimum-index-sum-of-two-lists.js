/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  const result = [];
  const map = new Map(); // String, Array<Number> <-> Restaurant, [index 0, index 1]
  let leastIndexSum = -1;
  let i = 0;
  let j = 0;

  while (i < list1.length || j < list2.length) {
    if (i < list1.length) {
      const element1 = list1[i];
      let list;
      if (map.has(element1)) {
        list = map.get(element1);
        list.push(i);
        map.set(element1, list);
      } else map.set(element1, [i]);

      list = map.get(element1);
      if (list.length === 2) {
        if (leastIndexSum === -1) leastIndexSum = list[0] + list[1];
        else leastIndexSum = Math.min(list[0] + list[1], leastIndexSum);
      }
    }
    if (j < list2.length) {
      const element2 = list2[j];
      let list;
      if (map.has(element2)) {
        list = map.get(element2);
        list.push(j);
        map.set(element2, list);
      } else map.set(element2, [j]);

      list = map.get(element2);
      if (list.length === 2) {
        if (leastIndexSum === -1) leastIndexSum = list[0] + list[1];
        else leastIndexSum = Math.min(list[0] + list[1], leastIndexSum);
      }
    }
    i++;
    j++;
  }

  map.forEach((value, key) => {
    if (value[0] + value[1] === leastIndexSum) result.push(key);
  });

  // console.log(map);
  // console.log(leastIndexSum);
  return result;
};
