class Solution:
    def mergeNodes(self, head: Optional[ListNode]) -> Optional[ListNode]:
        result = None
        currRet = None
        s = 0

        curr = head.next
        while curr is not None:
            if (curr.val == 0):
                if (result is None):
                    result = ListNode(s, None)
                    currRet = result
                else:
                    currRet.next = ListNode(s, None)
                    currRet = currRet.next
                s = 0
            else:
                s += curr.val
            curr = curr.next
        return result
