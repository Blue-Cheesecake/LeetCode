class Solution {
	func findSubarrays(_ nums: [Int]) -> Bool {
		// sum: freq
		var map: [Int:Int] = [:]
		
		for i in 0..<nums.count - 1 {
			let ele1 = nums[i]
			let ele2 = nums[i + 1]
			let sum = ele1 + ele2
			
			if map.contains(where: {
				key, value in
				return key == sum
			}) {
				map[sum]! += 1
			} else {
				map[sum] = 1
			}
			
			if map[sum]! >= 2 {
				return true
			}
						
		}
		
//		print(map)
		return false

	}
}
