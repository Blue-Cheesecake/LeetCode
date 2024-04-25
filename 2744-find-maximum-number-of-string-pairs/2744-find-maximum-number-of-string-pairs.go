func reverseString(s string) string {
	var result strings.Builder

	for i := utf8.RuneCountInString(s) - 1; i >= 0; i-- {
		element := s[i]
		result.WriteByte(element)
	}

	return result.String()
}

func maximumNumberOfStringPairs(words []string) int {
	usedIndex := make(map[int]bool)
	result := 0

	for i := 0; i < len(words)-1; i++ {
		for j := i + 1; j < len(words); j++ {

			_, isIExist := usedIndex[i]
			_, isJExist := usedIndex[j]

			if isIExist || isJExist {
				continue
			}

			wordI := words[i]
			wordJ := reverseString(words[j])

			if wordI == wordJ {
				result++
				usedIndex[i] = true
				usedIndex[j] = true
			}

		}
	}

	return result
}
