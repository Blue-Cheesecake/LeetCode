class Solution {

    private static int countOnes(String s) {
        int result = 0;
        for (int i = 0; i < s.length(); i++) if (s.charAt(i) == '1') result++;
        return result;
    }

    public int numberOfBeams(String[] bank) {
        int result = 0;

        int i = 0;
        while (i < bank.length) {
            if (i == bank.length - 1) {
                break;
            }

            String base = bank[i];
            int baseOnes = countOnes(base);
            if (baseOnes == 0) {
                i++;
                continue;
            }

            boolean isChanged = false;
            for (int j = i + 1; j < bank.length; j++) {
                String cmp = bank[j];
                int cmpOnes = countOnes(cmp);
                if (cmpOnes == 0) {
                    continue;
                }

                result += baseOnes * cmpOnes;
                i = j;
                isChanged = true;
                break;
            }

            if (!isChanged) {
                i++;
            }
        }


        return result;
    }
}