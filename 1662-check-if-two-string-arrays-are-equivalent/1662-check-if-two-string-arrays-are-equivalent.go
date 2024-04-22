func arrayStringsAreEqual(word1 []string, word2 []string) bool {
	w1 := ""
	w2 := ""

	i := 0
	j := 0

	for i < len(word1) || j < len(word2) {
		if i < len(word1) {
			element := word1[i]
			w1 += element
			i++
		}
		if j < len(word2) {
			element := word2[j]
			w2 += element
			j++
		}
	}

	return w1 == w2
}
