class RecentCounter {
	var queue: [Int] = []
	var counter: Int = 0
	var min_index: Int = -1
	
	init() {}
	
	func ping(_ t: Int) -> Int {
		if self.queue.count == 0 {
			self.queue.append(t)
			self.counter = 1
			self.min_index = 0
			return 1
		}
		
		self.queue.append(t)
		self.counter += 1
		let min_range: Int = t - 3000
		
		while self.queue[self.min_index] < min_range {
			self.min_index += 1
			self.counter -= 1
		}
		
		return self.counter
	}
}
