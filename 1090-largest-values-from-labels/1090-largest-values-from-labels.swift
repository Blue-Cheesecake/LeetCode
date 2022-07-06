class Solution {
	func largestValsFromLabels(_ values: [Int], _ labels: [Int], _ numWanted: Int, _ useLimit: Int) -> Int {
		
		// count the frequency of labels
		// sort the values and re label regard with values
		// iterate through sorted value check if that label is reach numWanted
		
		var freq_labels: [Int: Int] = [:]
		for label in labels {
			freq_labels[label] = 0
		}
		
		// [value, label]
		var pairs: [[Int]] = []
		for i in 0 ..< values.count {
			pairs.append([values[i], labels[i]])
		}
		
		pairs = pairs.sorted {
			a, b in
			return a[0] > b[0]
		}
		
		var result: Int = 0
		var used: Int = 0
		
		for pair in pairs {
			
			if used >= numWanted {
				break
			}
			
			let val: Int = pair[0]
			let lab: Int = pair[1]
		
			if let numUsedLabel = freq_labels[lab] {
				
				if numUsedLabel >= useLimit {
					continue
				}
				
//				 print(pair)
				
				used += 1
				freq_labels[lab] = numUsedLabel + 1
				result += val
				
			}
		}
		
//		 print(pairs)
		
		return result
	}
}
