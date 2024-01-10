const letterLong int = 10

func findRepeatedDnaSequences(s string) []string {
	n := utf8.RuneCountInString(s)
	hash := make(map[string]int)
	result := make([]string, 0)

	for i := 0; i < n-letterLong+1; i++ {
		subString := s[i : i+letterLong]
		hash[subString] += 1
	}

	for dna, freq := range hash {
		if freq > 1 {
			result = append(result, dna)
		}
	}

	return result
}
