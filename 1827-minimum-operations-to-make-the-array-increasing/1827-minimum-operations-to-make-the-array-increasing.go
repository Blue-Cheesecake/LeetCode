func minOperations(nums []int) int {
	if len(nums) == 1 {
		return 0
	}

	result := 0
	maxSoFar := nums[0]

	for i := 1; i < len(nums); i++ {
		element := nums[i]

		if element > maxSoFar {
			maxSoFar = element
			continue
		}

		diff := maxSoFar - element
		adddedDiff := diff + 1
		result += adddedDiff
		nums[i] += adddedDiff
		maxSoFar = nums[i]
	}

	return result
}
