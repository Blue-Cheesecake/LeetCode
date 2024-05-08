impl Solution {
    pub fn is_palindrome(x: i32) -> bool {
        let mut n = x as i64;
        let mut re: i64 = 0;

        while n > 0 {
            let r = n % 10;
            re = re * 10 + r;
            n /= 10;
        }

        x as i64 == re
    }
}
