func maximizeSum(nums []int, k int) int {

	var arr []int = make([]int, k)

	for i := 0; i < k; i++ {
		sort.Slice(nums, func(i, j int) bool {
			return nums[i] > nums[j]
		})

		arr[i] = nums[0]
		nums[0] += 1
	}

	sum := 0

	for i := 0; i < len(arr); i++ {
		sum += arr[i]
	}

	return sum
}
