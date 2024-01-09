func maximumValue(strs []string) int {
	result := 0

	for _, str := range strs {
		val, err := strconv.Atoi(str)

		// string vase
		if err != nil {
			result = int(math.Max(float64(result), float64(utf8.RuneCountInString(str))))
			continue
		}

		result = int(math.Max(float64(val), float64(result)))
	}

	return result
}
