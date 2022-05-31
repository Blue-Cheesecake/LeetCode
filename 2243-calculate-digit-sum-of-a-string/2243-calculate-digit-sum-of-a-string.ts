function digitSum(s: string, k: number): string {
  if (s.length <= k) return s;

  let result = "";

  let i = 0;
  while (i < s.length) {
    let sum = 0;
    let substring;
    // case1: substring.length is equal to k
    if (i + k <= s.length) {
      substring = s.substring(i, i + k);
    } else {
      // case2: substring.length is less than k
      substring = s.substring(i, s.length);
    }

    for (let i = 0; i < substring.length; i++) {
      sum += Number(substring.charAt(i));
    }
    i += k;
    result += String(sum);
  }

  return digitSum(result, k);
}
