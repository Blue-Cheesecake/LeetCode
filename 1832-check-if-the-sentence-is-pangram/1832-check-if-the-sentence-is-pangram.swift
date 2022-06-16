class Solution {
	func checkIfPangram(_ sentence: String) -> Bool {
		var set: Set<Character> = [];
		for char in sentence {
			set.insert(char)
		}
		return set.count == 26
	}
}

