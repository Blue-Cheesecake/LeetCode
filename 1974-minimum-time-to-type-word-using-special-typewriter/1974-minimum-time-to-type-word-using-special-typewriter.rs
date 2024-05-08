impl Solution {
    pub fn min_time_to_type(word: String) -> i32 {
        let mut result: i32 = 0;
        let mut pointer = 'a';
        const ALPHA_NUM: u8 = 26;

        for next_char in word.chars() {
            let val1 = pointer as u8;
            let val2 = next_char as u8;

            let diff_f = (val1).abs_diff(val2);
            let diff_b: u8 = ALPHA_NUM - val1.abs_diff(val2);

            match diff_f.cmp(&diff_b) {
                std::cmp::Ordering::Less => {
                    result += diff_f as i32;
                }
                _ => {
                    result += diff_b as i32;
                }
            }

            pointer = val2 as char;
            result += 1;
        }

        result
    }
}
