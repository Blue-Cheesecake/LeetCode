function areAlmostEqual(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) return false;
  // loop through each
  // check if the different position
  // the difference should be only two positions

  // let s1 be base string the s2 needed to follow
  let countDiff = 0;
  const diffIndex = [];

  for (let i = 0; i < s1.length; i++) {
    const char1 = s1[i];
    const char2 = s2[i];
    if (char1 !== char2) {
      countDiff++;
      diffIndex.push(i);
    }
  }

  if (countDiff !== 2 && countDiff !== 0) return false;

  // console.log(countDiff);
  // console.log(diffIndex);

  return (
    s1[diffIndex[0]] === s2[diffIndex[1]] &&
    s1[diffIndex[1]] === s2[diffIndex[0]]
  );
}
