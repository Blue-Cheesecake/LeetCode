impl Solution {
    pub fn minimum_chairs(s: String) -> i32 {
        let mut result = 0;
        let mut curr = 0;

        for c in s.chars().into_iter() {
            if c == 'E' {
                curr += 1;

                if result < curr {
                    result = curr
                }
            } else {
                curr -= 1;
            }
        }

        result       
    }
}
