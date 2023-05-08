class Solution {
    public int countMatches(List<List<String>> items, String ruleKey, String ruleValue) {
        int result = 0;

        for (List<String> item : items) {
            if (ruleKey.equals("type") && item.get(0).equals(ruleValue)) result++;
            if (ruleKey.equals("color") && item.get(1).equals(ruleValue)) result++;
            if (ruleKey.equals("name") && item.get(2).equals(ruleValue)) result++;
        }
        
        return result;
    }
}
