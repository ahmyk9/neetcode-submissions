/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null
        let temp = head
        let next = head

        while(next !== null){
            next = temp.next
            temp.next = prev
            prev = temp 
            temp = next
        }

        return prev


    }
}
