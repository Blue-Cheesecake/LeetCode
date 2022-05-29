function percentageLetter(s: string, letter: string): number {
  const map = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    map.set(s.charAt(i), map.has(s.charAt(i)) ? map.get(s.charAt(i))! + 1 : 1);
  }
  // console.log(map);
  if (!map.has(letter)) return 0;
  return Math.floor((map.get(letter)! / s.length) * 100);
}
