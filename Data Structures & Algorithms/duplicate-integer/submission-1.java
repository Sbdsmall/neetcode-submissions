class Solution {
    public boolean hasDuplicate(int[] nums) {
        HashMap<Integer,Integer> checkDup = new HashMap<>();

        for (int num : nums) {
            if(checkDup.containsKey(num)){
                return true;
            } else {
                checkDup.put(num, 1);
            }
        }

        return false;
    }
}