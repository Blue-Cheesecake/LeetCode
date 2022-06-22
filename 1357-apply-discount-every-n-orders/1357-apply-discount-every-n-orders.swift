class Cashier {
	var n: Int
	var discount: Int
	var products: [Int: Int]
	var prices: [Int]
	var counter: Int
	
	init(_ n: Int, _ discount: Int, _ products: [Int], _ prices: [Int]) {
		self.n = n
		self.discount = discount
		self.prices = prices
		self.counter = 0
		self.products = [:]
		
		for ind in 0 ..< products.count {
			let id: Int = products[ind]
			self.products[id] = ind
		}
	}
	
	func getBill(_ product: [Int], _ amount: [Int]) -> Double {
		self.counter += 1
		var result: Double = 0
		
		for i in 0 ..< product.count {
			let amo: Int = amount[i]
			let product_id: Int = product[i]
			let ind: Int = self.products[product_id]!
			let each_price: Int = self.prices[ind]
			let price = Double(each_price * amo)
			result += price
		}
		
		if self.counter % self.n == 0 {
			return result * Double(100 - self.discount) / 100.0
		}
		
		return result
	}
}
