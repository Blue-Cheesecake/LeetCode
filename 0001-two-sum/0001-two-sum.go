func twoSum(nums []int, target int) []int {
	var result []int = make([]int, 2, 2)
	var memoi map[int]int = make(map[int]int)

	for index, value := range nums {
		findIndex, isExist := memoi[target-value]
		//fmt.Println(value, target-value, findIndex, isExist)
		if isExist {
			result[0] = findIndex
			result[1] = index
			break
		}
		memoi[value] = index
	}

	return result
}
