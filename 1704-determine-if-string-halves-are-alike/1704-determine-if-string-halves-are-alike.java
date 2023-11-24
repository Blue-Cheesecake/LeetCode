class Solution {
    public boolean halvesAreAlike(String s) {

        boolean firstHalves = true;
        int countFirst = 0;
        int countSecond = 0;
        for (int i = 0; i < s.length(); i++) {
            Character v = Character.toLowerCase(s.charAt(i));
            if (i == s.length() / 2) {
                firstHalves = false;
            }
            if (firstHalves) {
                if (v == 'a' || v == 'e' || v == 'i' || v == 'o' || v == 'u') {
                    countFirst++;
                }
            }
            if (!firstHalves) {
                if (v == 'a' || v == 'e' || v == 'i' || v == 'o' || v == 'u') {
                    countSecond++;
                }
            }
        }
        if (countFirst != countSecond) {
            return false;
        }
        return true;
    }
}