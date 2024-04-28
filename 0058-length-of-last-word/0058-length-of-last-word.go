func lengthOfLastWord(s string) int {
	result := 0
	sLength := utf8.RuneCountInString(s)
	isStartCounting := false

	for i := sLength - 1; i >= 0; i-- {
		char := string(s[i])
		if char != " " && !isStartCounting {
			isStartCounting = true
			result++
			continue
		}
		if char != " " && isStartCounting {
			result++
			continue
		}
		if char == " " && isStartCounting {
			break
		}

	}

	return result
}
