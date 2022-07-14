class Solution {
	func wateringPlants(_ plants: [Int], _ capacity: Int) -> Int {
		var result: Int = 1
		var currCapacity: Int = capacity
		
		for curr in 0 ..< plants.count {
			currCapacity -= plants[curr]
			if curr == plants.count - 1 {
				continue
			}
			if curr != plants.count - 1 && currCapacity >= plants[curr + 1] {
				result += 1
				continue
			} else {
				result += (((curr + 1) * 2) + 1)
				currCapacity = capacity
			}
			
			
		}
		
		return result
	}
}
