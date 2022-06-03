function uncommonFromSentences(s1: string, s2: string): string[] {
  const result: Array<string> = [];
  const spl1: Array<string> = s1.split(" ");
  const spl2: Array<string> = s2.split(" ");
  const freq: Map<string, number> = new Map();

  let i: number = 0;
  let j: number = 0;

  while (i < spl1.length || j < spl2.length) {
    if (i < spl1.length) {
      freq.set(spl1[i], freq.has(spl1[i]) ? freq.get(spl1[i])! + 1 : 1);
    }
    if (j < spl2.length) {
      freq.set(spl2[i], freq.has(spl2[i]) ? freq.get(spl2[i])! + 1 : 1);
    }
    i++;
    j++;
  }

  console.log(freq);

  for (const key of freq.keys()) {
    if (freq.get(key)! === 1) result.push(key);
  }

  return result;
}
