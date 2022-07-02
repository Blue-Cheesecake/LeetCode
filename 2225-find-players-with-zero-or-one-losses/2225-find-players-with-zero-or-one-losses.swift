class Solution {
	func findWinners(_ matches: [[Int]]) -> [[Int]] {
		var zeros: [Int] = []
		var ones: [Int] = []
		
		// player_i, (win, lose)
		var map: [Int: (Int, Int)] = [:]
		
		for match in matches {
			let win_i: Int = match[0]
			let lose_i: Int = match[1]
			
			if let win_player = map[win_i] {
				map[win_i] = (win_player.0 + 1, win_player.1)
			} else {
				map[win_i] = (1, 0)
			}
			
			if let lose_player = map[lose_i] {
				map[lose_i] = (lose_player.0, lose_player.1 + 1)
			} else {
				map[lose_i] = (0, 1)
			}
		}
		
		let pairs = map.sorted(by: {$0.key < $1.key})

		for pair in pairs {
			if pair.value.1 == 0 {
				zeros.append(pair.key)
			}
			if pair.value.1 == 1 {
				ones.append(pair.key)
			}
		}
		
		
		return [zeros, ones]
	}
}
