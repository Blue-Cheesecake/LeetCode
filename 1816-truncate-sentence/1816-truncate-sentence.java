class Solution {
    public String truncateSentence(String s, int k) {
        String[] test = s.split(" ");
//         ["Hello" "how" "are" "you" "Contestant"] k = 6
        
        
        String result = "";
        int m = Math.min(k, test.length);
        for (int i = 0; i < m;i ++){
            result += test[i];
            if (i < m - 1) {
                result += " ";
            }
        }
        
        return result;
    }
}