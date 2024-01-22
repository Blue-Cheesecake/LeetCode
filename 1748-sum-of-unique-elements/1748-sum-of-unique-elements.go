func sumOfUnique(nums []int) int {
	// find unique element
	hashmap := make(map[int]int)

	for _, val := range nums {
		hashmap[val] += 1
	}

	sum := 0
	for key, val := range hashmap {
		if val == 1 {
			sum += key
		}
	}
	return sum
}
