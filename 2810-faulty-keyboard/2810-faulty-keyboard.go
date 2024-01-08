func reverseString(s string) string {
	var result strings.Builder
	for i := utf8.RuneCountInString(s) - 1; i >= 0; i-- {
		result.WriteRune(rune(s[i]))
	}
	return result.String()
}

func finalString(s string) string {
	var result strings.Builder
	for _, value := range s {
		if value != rune('i') {
			result.WriteRune(value)
			continue
		}
		reversedString := reverseString(result.String())
		result = strings.Builder{}
		result.WriteString(reversedString)
	}
	return result.String()
}
