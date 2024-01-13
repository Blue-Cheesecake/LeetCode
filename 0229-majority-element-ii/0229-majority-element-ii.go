func majorityElement(nums []int) []int {
	minimumFreq := len(nums) / 3
	freqs := make(map[int]int)
	for _, val := range nums {
		freqs[val] += 1
	}
	var result []int = make([]int, 0, len(freqs))
	for key, val := range freqs {
		if val > minimumFreq {
			result = append(result, key)
		}
	}
	return result
}
