function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
    let s1 = "";
    let s2 = "";
    
    let i = 0;
    let j = 0;
    while (i < word1.length || j < word2.length) {
        if (i < word1.length) {
            s1 += word1[i];
            i++;
        }
        if (j < word2.length) {
            s2 += word2[j];
            j++;
        }
    }
    
    return s1 === s2;
};