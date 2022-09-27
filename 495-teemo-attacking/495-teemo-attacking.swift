class Solution {
	func findPoisonedDuration(_ timeSeries: [Int], _ duration: Int) -> Int {
		var result = 0
		var prev = -1
		for t in timeSeries {
			if t <= prev {
				result -= prev - t + 1
			}
			
			result += duration
			
			if prev == -1 {
				prev = t + duration - 1
				continue
			}
			
			if prev < t {
				prev = t + duration - 1
				continue
			}
			
			prev = t + duration - 1
			
		}
		
		
		
		return result
	}
}
