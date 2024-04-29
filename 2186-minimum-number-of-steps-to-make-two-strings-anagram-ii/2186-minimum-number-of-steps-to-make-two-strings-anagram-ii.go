func findFreq(s string) map[rune]int {
	result := make(map[rune]int)
	for _, c := range s {
		freq := result[c]
		result[c] = freq + 1
	}
	return result
}

func minSteps(s string, t string) int {
	freqS := findFreq(s)
	freqT := findFreq(t)
	result := 0

	for k, vs := range freqS {
		vt := freqT[k]
		result += int(math.Abs(float64(vs) - float64(vt)))

		freqS[k] = 0
		freqT[k] = 0
	}

	for k, vt := range freqT {
		vs := freqS[k]
		result += int(math.Abs(float64(vs) - float64(vt)))

	}

	return result
}
