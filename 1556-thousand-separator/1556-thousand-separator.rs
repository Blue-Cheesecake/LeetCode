impl Solution {
    pub fn thousand_separator(n: i32) -> String {
        if n == 0 {
            return String::from("0");
        }

        let mut counter = 0;
        let mut result = String::new();
        let mut n = n;

        while n > 0 {
            let remainder = n % 10;
            n -= remainder;
            n /= 10;

            result.push_str(&remainder.to_string());

            counter += 1;
            if counter == 3 && n != 0 {
                result.push('.');
                counter = 0;
            }
        }

        result.chars().rev().collect()
    }
}
