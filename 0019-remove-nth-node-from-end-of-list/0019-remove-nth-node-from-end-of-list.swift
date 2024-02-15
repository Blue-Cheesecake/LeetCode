/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public var val: Int
 *     public var next: ListNode?
 *     public init() { self.val = 0; self.next = nil; }
 *     public init(_ val: Int) { self.val = val; self.next = nil; }
 *     public init(_ val: Int, _ next: ListNode?) { self.val = val; self.next = next; }
 * }
 */

class Solution {
    func removeNthFromEnd(_ head: ListNode?, _ n: Int) -> ListNode? {
        var curr = head
        var counter = 0
        
        while curr != nil {
            counter += 1
            curr = curr?.next
        }
        
        var deleteIndex = counter - n
        
        if deleteIndex == 0 {
            return head?.next
        }
        
        curr = head
        counter = 0
        
        while counter < deleteIndex - 1 {
            curr = curr?.next
            counter += 1
        }
        
        curr?.next = curr?.next?.next
        
        return head
    }
}
