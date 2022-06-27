class Solution {
	func determineTimeToTravel(from arr1: [Int], to arr2: [Int]) -> Int {
		let curr_x: Int = arr1[0]
		let curr_y: Int = arr1[1]
		let dest_x: Int = arr2[0]
		let dest_y: Int = arr2[1]
		
		if curr_x == dest_x, curr_y == dest_y {
			return 0
		}
		if curr_x < dest_x, curr_y < dest_y {
			return 1 + self.determineTimeToTravel(from: [curr_x + 1, curr_y + 1], to: arr2)
		}
		if curr_x > dest_x, curr_y > dest_y {
			return 1 + self.determineTimeToTravel(from: [curr_x - 1, curr_y - 1], to: arr2)
		}
		if curr_x == dest_x, curr_y < dest_y {
			return 1 + self.determineTimeToTravel(from: [curr_x, curr_y + 1], to: arr2)
		}
		if curr_x == dest_x, curr_y > dest_y {
			return 1 + self.determineTimeToTravel(from: [curr_x, curr_y - 1], to: arr2)
		}
		if curr_x < dest_x, curr_y == dest_y {
			return 1 + self.determineTimeToTravel(from: [curr_x + 1, curr_y], to: arr2)
		}
		if curr_x > dest_x, curr_y == dest_y {
			return 1 + self.determineTimeToTravel(from: [curr_x - 1, curr_y], to: arr2)
		}
		if curr_x < dest_x, curr_y > dest_y {
			return 1 + self.determineTimeToTravel(from: [curr_x + 1, curr_y - 1], to: arr2)
		}
		if curr_x > dest_x, curr_y < dest_y {
			return 1 + self.determineTimeToTravel(from: [curr_x - 1, curr_y + 1], to: arr2)
		}
		return 0
	}
	
	func minTimeToVisitAllPoints(_ points: [[Int]]) -> Int {
		var result = 0

		for i in 0 ..< points.count - 1 {
			result += self.determineTimeToTravel(from: points[i], to: points[i + 1])
		}
		
		return result
	}
}
