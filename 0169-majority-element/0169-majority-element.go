func majorityElement(nums []int) int {
	if len(nums) == 1 {
		return nums[0]
	}

	sort.Slice(nums, func(i, j int) bool {
		return nums[i] < nums[j]
	})

	n := len(nums) / 2
	result := 0
	currVal := nums[0]
	currFreq := 1

	for i := 1; i < len(nums); i++ {
		val := nums[i]

		if currVal == val {
			currFreq++
			if currFreq > n {
				result = val
			}
			continue
		}

		currVal = val
		currFreq = 1
	}

	return result
}
