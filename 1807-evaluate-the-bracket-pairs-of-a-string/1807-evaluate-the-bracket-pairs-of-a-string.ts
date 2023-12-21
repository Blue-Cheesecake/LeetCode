function evaluate(s: string, knowledge: string[][]): string {
  const knowledgeMap = new Map<string, string>();
  knowledge.forEach((pair) => {
    knowledgeMap.set(pair[0], pair[1]);
  });

  let result = "";
  let i = 0;
  while (i < s.length) {
    if (s[i] !== "(") {
      result += s[i];
      i++;
      continue;
    }

    let j = i;
    while (s[j] !== ")") {
      j++;
    }

    const key = s.substring(i + 1, j);
    const val = knowledgeMap.get(key) ?? "?";
    result += val;
    i = j + 1;
  }

  return result;
}
