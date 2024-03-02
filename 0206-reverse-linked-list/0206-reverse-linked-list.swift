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
    func reverseList(_ head: ListNode?) -> ListNode? {
        var result: ListNode?
        var curr: ListNode? = head
        
        while curr != nil {
            let val = curr!.val
            var newNode = ListNode(val)
            
            if result == nil {
                result = newNode
            } else {
                newNode.next = result
                result = newNode
            }
            
            curr = curr?.next
        }
        
        return result
    }
}
