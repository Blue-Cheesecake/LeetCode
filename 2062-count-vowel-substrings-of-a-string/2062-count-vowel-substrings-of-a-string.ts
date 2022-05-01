const contain_and_only_all_vowels = (word: string): boolean => {
  const vowels = new Set<string>(["a", "e", "i", "o", "u"]);
  const all = new Set<string>(["a", "e", "i", "o", "u"]);

  for (let i = 0; i < word.length; i++) {
    if (!vowels.has(word.charAt(i))) {
      return false;
    }
    if (all.has(word.charAt(i))) all.delete(word.charAt(i));
  }

  if (all.size === 0) return true;
  return false;
};

function countVowelSubstrings(word: string): number {
  let result: number = 0;
  const num_vowels = 5;

  for (let i = 0; i < word.length - num_vowels + 1; i++) {
    let sub_string: string = word.substring(i, i + num_vowels);
    let k: number = i + num_vowels;
    while (k <= word.length) {
      // console.log(sub_string);
      if (contain_and_only_all_vowels(sub_string)) {
        // console.log(sub_string, "contains all vowels");
        result++;
      }
      sub_string += word.charAt(k);
      k++;
    }
  }

  return result;
}
