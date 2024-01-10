func findIntersectionValues(nums1 []int, nums2 []int) []int {
	setNums1 := make(map[int]int)
	setNums2 := make(map[int]int)

	i := 0
	j := 0
	for i < len(nums1) || j < len(nums2) {
		if i < len(nums1) {
			setNums1[nums1[i]] += 1
			i++
		}
		if j < len(nums2) {
			setNums2[nums2[j]] += 1
			j++
		}
	}

	result := make([]int, 2)

	for val, freq := range setNums1 {
		_, isExist := setNums2[val]
		if isExist {
			result[0] += freq
		}
	}

	for val, freq := range setNums2 {
		_, isExist := setNums1[val]
		if isExist {
			result[1] += freq
		}
	}

	return result
}
