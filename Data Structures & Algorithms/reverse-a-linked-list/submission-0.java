/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */

class Solution {
    /**
        ListNode head
        {
            val = 0;
            next = {
                val: 1;
                next: null;
            };
        }
        prev = null;
        curr = head;
        
        temp = curr.next;
        curr.next = prev;
        curr = temp;

    */
    public ListNode reverseList(ListNode head) {
       ListNode prev = null;
       ListNode curr = head;

       while (curr != null){
        ListNode temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
       }
       return prev;
    }
}
