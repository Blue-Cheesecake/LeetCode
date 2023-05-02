class Solution {
    public static final int LEMONADE_COST = 5;

    public boolean lemonadeChange(int[] bills) {
        int fiveBill = 0;
        int tenBill = 0;
        int twentyBill = 0;

        for (int pay : bills) {
            if (pay == 5) fiveBill += 1;
            if (pay == 10) tenBill += 1;
            if (pay == 20) twentyBill += 1;

            int change = pay - LEMONADE_COST;

            if (change == 0) continue;
            if (change == 5) {
                if (fiveBill < 1) return false;
                fiveBill -= 1;
                continue;
            }
            if (change == 10) {
                if (tenBill < 1) return false;
                tenBill -= 1;
                continue;
            }
            if (change == 20) {
                if (twentyBill < 1) return false;
                twentyBill -= 1;
                continue;
            }

            int a = change % 20;
            if (change - a != 0 && twentyBill >= 1) {
                int backTwentyNum = ((change - a) / 20);
                twentyBill -= backTwentyNum;
                change -= (backTwentyNum * 20);
            }
            a = change % 10;
            if (change - a != 0 && tenBill >= 1) {
                int backTenNum = ((change - a) / 10);
                tenBill -= backTenNum;
                change -= (backTenNum * 10);
            }
            a = change % 5;
            if (change - a != 0 && fiveBill >= 1) {
                int backFive = ((change - a) / 5);
                fiveBill -= backFive;
                change -= (backFive * 5);
            }

            if (change != 0 || fiveBill < 0 || tenBill < 0 || twentyBill < 0) return false;

        }

        return true;
    }
}
