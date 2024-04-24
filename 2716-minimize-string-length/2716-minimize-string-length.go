func minimizedStringLength(s string) int {
	set := make(map[string]bool)

	for i := 0; i < utf8.RuneCountInString(s); i++ {
		char := string(s[i])
		set[char] = true
	}

	return len(set)
}
