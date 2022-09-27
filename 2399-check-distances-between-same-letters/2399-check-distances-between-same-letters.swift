class Solution {
	func checkDistances(_ s: String, _ distance: [Int]) -> Bool {
		var map: [Character : Int] = [:]
		for i in 0..<s.count {
			var c: Character = Array(arrayLiteral: s[s.index(s.startIndex, offsetBy: i)])[0]
			
			if let foundIndex = map[c] {
				map[c] = i - foundIndex - 1
			} else {
				map[c] = i
			}
		}
		
		// print(map)
		
		var result = true
		map.forEach { (key: Character, value: Int) in
			let a: Character = "a"
			let aAS = a.asciiValue
			
			let index = key.asciiValue! - aAS!
			if value != distance[Int(index)] {
				result = false
			}
		}
		
		return result
	}
}
