class Solution {
    public int minSteps(String s, String t) {
        Map<Character, Integer> mapS = new HashMap<>();
        Map<Character, Integer> mapT = new HashMap<>();

        int i = 0;
        int j = 0;
        while (i < s.length() || j < t.length()) {
            if (i < s.length()) {
                Character c = s.charAt(i);
                mapS.put(c, mapS.containsKey(c) ? mapS.get(c) + 1 : 1);
                i++;
            }
            if (j < t.length()) {
                Character c = t.charAt(j);
                mapT.put(c, mapT.containsKey(c) ? mapT.get(c) + 1 : 1);
                j++;
            }
        }

        AtomicInteger result = new AtomicInteger();

        for (Map.Entry<Character, Integer> entry : mapS.entrySet()) {
            Character charS = entry.getKey();
            Integer valS = entry.getValue();
            if (!mapT.containsKey(charS)) {
                result.addAndGet(valS);
            } else {
                int diff = mapT.get(charS) - valS;
                if (diff <= 0) {
                    result.addAndGet(Math.abs(diff));
                }
            }
        }

        return result.get();
    }
}