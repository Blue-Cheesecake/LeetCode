class OrderedStream {
	
	var arr: [String];
	var ptr: Int;
	
	init(_ n: Int) {
		self.arr = Array(repeating: "-1", count: n)
		self.ptr = 0
	}
	
	func insert(_ idKey: Int, _ value: String) -> [String] {
		// print(arr)
		var result: [String] = []
		arr[idKey - 1] = value
		
		while self.ptr < self.arr.capacity && self.arr[self.ptr] != "-1" {
			result.append(self.arr[self.ptr])
			self.ptr += 1
		}
		
		return result
	}
}
