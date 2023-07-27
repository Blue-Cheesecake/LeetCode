class SmallestInfiniteSet:

    origin = set()
    smallest_origin = 1
    

    def __init__(self):
        for i in range(1, 1001):
            self.origin.add(i)
        
    
    def popSmallest(self) -> int:
        temp = self.smallest_origin
        
        # find next smallest in origin
        for i in range(temp + 1, 1001):
            if i in self.origin:
                self.smallest_origin = i
                break
        
        self.origin.remove(temp)
        
        return temp

    def addBack(self, num: int) -> None:
        self.origin.add(num)
        
        if num < self.smallest_origin:
            self.smallest_origin = num
        

