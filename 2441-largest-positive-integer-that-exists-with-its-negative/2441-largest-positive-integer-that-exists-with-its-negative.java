class Pair {
    public boolean havePositive;
    public boolean haveNegative;

    public Pair() {
        this.havePositive = false;
        this.haveNegative = false;
    }

    public boolean isValid() {
        return havePositive && haveNegative;
    }
}

class Solution {

    public int findMaxK(int[] nums) {
        int largest = -1;
        Map<Integer, Pair> s = new HashMap<>();

        for (int num : nums) {
            if (num < 0) {
                int pos = Math.abs(num);
                if (s.containsKey(pos)) {
                    s.get(pos).haveNegative = true;
                } else {
                    Pair p = new Pair();
                    p.haveNegative = true;
                    s.put(pos, p);
                }
            } else {
                if (s.containsKey(num)) {
                    s.get(num).havePositive = true;
                } else {
                    Pair p = new Pair();
                    p.havePositive = true;
                    s.put(num, p);
                }
            }

            int pos = Math.abs(num);
            Pair p = s.get(pos);
            if (p.isValid() && pos > largest) {
                largest = pos;
            }
        }

        return largest;
    }
}
