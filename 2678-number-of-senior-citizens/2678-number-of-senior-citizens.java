class Solution {
    public int countSeniors(String[] details) {
        int result = 0;

        for (String word : details) {
            String ageStr = word.substring(11, 13);
            int age = Integer.parseInt(ageStr);
            if (age > 60) result++;
        }

        return result;
    }
}