class Solution {
	func findClosestPosition(find x: Int, inThis arr: [Int]) -> Int {
		var l = 0
		var r: Int = arr.count - 1
		
		while l <= r {
			var mid: Int = l + (r - l) / 2
			
			if arr[mid] == x {
				while mid - 1 >= 0, arr[mid - 1] == x {
					mid -= 1
				}
				return mid
			}
			else if arr[mid] < x {
				l = mid + 1
			}
			else {
				if mid == 0 {
					return 0
				}
				else if arr[mid - 1] < x {
					return mid
				}
				r = mid - 1
			}
		}
		
		return -1
	}
	
	func specialArray(_ nums: [Int]) -> Int {
		let sortedNums: [Int] = nums.sorted()
		
		for i in 1 ... 100 {
			let ret: Int = self.findClosestPosition(find: i, inThis: sortedNums)
			
			if ret != -1, sortedNums.count - ret == i {
				return sortedNums.count - ret
			}
		}

		return -1
	}
}
