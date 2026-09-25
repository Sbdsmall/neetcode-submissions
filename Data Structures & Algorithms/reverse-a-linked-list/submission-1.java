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
       ListNode p = null;
       ListNode c = head;

       while (c != null){
        ListNode temp = c.next;
        c.next = p;
        p = c;
        c = temp;
       }
       return p;
    }
}
