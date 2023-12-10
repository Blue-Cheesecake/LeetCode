function checkDistances(s: string, distance: number[]): boolean {
  const set = new Set<string>();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (set.has(char)) {
      continue;
    }
    const next = s.indexOf(char, i + 1);
    const dist = next - i - 1;
    const expected = distance[char.charCodeAt(0) - "a".charCodeAt(0)];

    if (dist !== expected) {
      return false;
    }

    set.add(char);
  }

  return true;
}
