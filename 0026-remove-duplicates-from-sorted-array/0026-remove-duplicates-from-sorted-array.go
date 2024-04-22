type Range struct {
	start int
	end   int
}

func removeElementFromRange(s []int, r Range) []int {
	return append(s[:r.start], s[r.end:]...)
}

func removeDuplicates(nums []int) int {

	for i := 0; i < len(nums)-1; i++ {
		starter := nums[i]
		startIndex := i
		endIndex := -1
		for j := i + 1; j < len(nums); j++ {
			iter := nums[j]

			if starter != iter {
				break
			}
			endIndex = j
		}

		if endIndex == -1 {
			continue
		}
		nums = removeElementFromRange(nums, Range{start: startIndex, end: endIndex})
	}

	return len(nums)
}
