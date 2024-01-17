func makeEqual(words []string) bool {
	freq := make(map[byte]int, 0)

	for _, word := range words {
		for i := 0; i < utf8.RuneCountInString(word); i++ {
			char := word[i]
			freq[char] += 1
		}
	}

	for _, val := range freq {
		if val%len(words) != 0 {
			return false
		}
	}

	return true
}
