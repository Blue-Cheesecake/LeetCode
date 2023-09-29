function replaceWords(dictionary: string[], sentence: string): string {
  const spl: string[] = sentence.split(" ");
  const dict = new Set<string>();

  dictionary.forEach((val) => dict.add(val));

  // console.log(spl);

  let result = "";

  for (let j = 0; j < spl.length; j++) {
    const word = spl[j];
    // console.log(word);

    let isAdded = false;

    for (let i = 1; i < word.length; i++) {
      const substring = word.substring(0, i);

      if (dict.has(substring)) {
        result += substring;
        if (j != spl.length - 1) result += " ";
        isAdded = true;
          break;
      }
    }

    if (!isAdded) {
      result += word;
      if (j != spl.length - 1) result += " ";
    }
  }

  return result;
}
