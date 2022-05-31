function maxNumberOfBalloons(text: string): number {
  const map: Map<string, number> = new Map();
  let result = 0;
  for (let i = 0; i < text.length; i++) {
    const cha = text[i];
    map.set(cha, map.has(cha) ? map.get(cha)! + 1 : 1);

    // cal
    // balloon need b: 1, a: 1, l: 2, o: 2, n: 1

    // base case 1: one of the character is not in map
    if (
      !map.has("b") ||
      !map.has("a") ||
      !map.has("l") ||
      !map.has("o") ||
      !map.has("n")
    )
      continue;

    // base case 2: it contains all necessary character but missing frequently
    if (
      map.get("b")! < 1 ||
      map.get("a")! < 1 ||
      map.get("l")! < 2 ||
      map.get("o")! < 2 ||
      map.get("n")! < 1
    )
      continue;

    // add to result, reduce the number of characters
    result++;
    map.set("b", map.get("b")! - 1);
    map.set("a", map.get("a")! - 1);
    map.set("l", map.get("l")! - 2);
    map.set("o", map.get("o")! - 2);
    map.set("n", map.get("n")! - 1);
  }

  return result;
}
