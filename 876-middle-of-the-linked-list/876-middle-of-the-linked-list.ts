function middleNode(head: ListNode | null): ListNode | null {
  let length: number = 0;
  let curr = head;
  while (curr !== null) {
    length++;
    curr = curr.next;
  }
  let middleLength = length % 2 === 0 ? length / 2 : (length - 1) / 2;
  let index = 0;
  curr = head;
  while (index < middleLength) {
    curr = curr!.next;
    index++;
  }
  return curr;
}