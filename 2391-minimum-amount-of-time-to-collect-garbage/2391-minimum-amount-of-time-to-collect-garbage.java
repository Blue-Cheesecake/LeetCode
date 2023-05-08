class Solution {

    public int garbageCollection(String[] garbage, int[] travel) {
        int totalM = 0;
        int totalP = 0;
        int totalG = 0;

        // determine the maximum house of each Garbage
        int maxM = 0;
        int maxP = 0;
        int maxG = 0;

        for (int i = 0; i < garbage.length; i++) {
            String garb = garbage[i];
            for (int j = 0; j < garb.length(); j++) {
                if (garb.charAt(j) == 'M') {
                    maxM = i;
                }
                if (garb.charAt(j) == 'P') {
                    maxP = i;
                }
                if (garb.charAt(j) == 'G') {
                    maxG = i;
                }
            }
        }

        for (int i = 0; i < garbage.length; i++) {
            int numM = 0;
            int numP = 0;
            int numG = 0;

            String garb = garbage[i];
            for (int j = 0; j < garb.length(); j++) {
                if (garb.charAt(j) == 'M') numM++;
                if (garb.charAt(j) == 'P') numP++;
                if (garb.charAt(j) == 'G') numG++;
            }

            if (i != 0 && i <= maxM) totalM += travel[i - 1];
            if (i != 0 && i <= maxP) totalP += travel[i - 1];
            if (i != 0 && i <= maxG) totalG += travel[i - 1];

            totalM += numM;
            totalP += numP;
            totalG += numG;
        }

        System.out.println("Total M: " + totalM);
        System.out.println("Total P: " + totalP);
        System.out.println("Total G: " + totalG);

        return totalM + totalP + totalG;
    }
}
