func findFreq(word string) map[rune]int16 {
	result := make(map[rune]int16)

	for _, char := range word {
		prevVal, isExist := result[char]
		if isExist {
			result[char] = prevVal + 1
			continue
		}
		result[char] = 1
	}

	return result
}

func countCharacters(words []string, chars string) int {
	freqChars := findFreq(chars)
	result := 0

	for _, word := range words {
		freqWord := findFreq(word)
		isValid := true
		for wordKey, freqWordVal := range freqWord {
			freqCharsVal, isExist := freqChars[wordKey]
			if !isExist {
				isValid = false
				break
			}
			if freqCharsVal < freqWordVal {
				isValid = false
				break
			}
		}
		if isValid {
			result += utf8.RuneCountInString(word)
		}
	}

	return result
}
