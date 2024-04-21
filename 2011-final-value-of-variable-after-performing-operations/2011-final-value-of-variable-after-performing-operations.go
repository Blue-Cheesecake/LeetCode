func finalValueAfterOperations(operations []string) int {
	result := 0

	for i := 0; i < len(operations); i++ {
		var element string = operations[i]
		lhs := rune(element[0])
		rhs := rune(element[2])

		if lhs == '-' || rhs == '-' {
			result--
		} else {
			result++
		}

	}

	return result
}
