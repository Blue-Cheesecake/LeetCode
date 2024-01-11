func findLucky(arr []int) int {
	freq := make(map[int]int)

	for _, v := range arr {
		freq[v] += 1
	}

	var result float64 = -1

	for key, freq := range freq {
		if key == freq {
			result = math.Max(float64(key), result)
		}
	}

	return int(result)
}