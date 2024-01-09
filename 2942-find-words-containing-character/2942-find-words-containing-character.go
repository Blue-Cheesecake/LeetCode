
func findWordsContaining(words []string, x byte) []int {
	var result []int

	for index, word := range words {
		for i := 0; i < utf8.RuneCountInString(word); i++ {
			var char byte = word[i]
			if char == x {
				result = append(result, index)
				break
			}
		}
	}

	return result
}
