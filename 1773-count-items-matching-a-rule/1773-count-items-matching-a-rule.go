func countMatches(items [][]string, ruleKey string, ruleValue string) int {
	result := 0

	for i := 0; i < len(items); i++ {
		itemArr := items[i]
		if ruleKey == "type" && ruleValue == itemArr[0] {
			result += 1
		} else if ruleKey == "color" && ruleValue == itemArr[1] {
			result += 1
		} else if ruleKey == "name" && ruleValue == itemArr[2] {
			result += 1
		}
	}

	return result
}
