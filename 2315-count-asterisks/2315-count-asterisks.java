class Solution {

    public int countAsterisks(String s) {
        String[] spl = s.split("\\|");
        int result = 0;
        int i = 0;
        while (i < spl.length) {
            int c = 0;
            String str = spl[i];
            for (int j = 0; j < str.length(); j++) {
                char a = str.charAt(j);
                if (a == '*') {
                    c++;
                }
            }
            result += c;
            i += 2;
        }
        return result;
    }
}