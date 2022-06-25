class Solution {
	func greatestLetter(_ s: String) -> String {
		// map [lowercase: (freq_lower, freq_upper)]
		var map: [String: (Int, Int)] = [:]
		
		for char in s {
			let char = String(char)
			let low = char.lowercased()
			if map[low] == nil {
				if char == char.lowercased() {
					map[low] = (1, 0)
				} else {
					map[low] = (0, 1)
				}
				continue
			}
			
			if char == char.lowercased() {
				map[low]!.0 += 1
			} else {
				map[low]!.1 += 1
			}
		}
		
		// print(map)
		// print(type(of: map))
		
		let sortedMap = map.sorted { $0.key > $1.key }
		// print(sortedMap)
		// print(type(of: sortedMap))
		
		for pair in sortedMap {
			let tup = pair.value
			if tup.0 > 0, tup.1 > 0 {
				return pair.key.uppercased()
			}
		}
		
		return ""
	}
}
