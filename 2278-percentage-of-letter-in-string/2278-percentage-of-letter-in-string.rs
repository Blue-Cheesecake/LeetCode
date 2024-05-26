impl Solution {
    pub fn percentage_letter(s: String, letter: char) -> i32 {
        let mut counter = 0;

        for c in s.chars().into_iter() {
            if c == letter {
                counter += 1;
            }
        }

        (counter as f64 / s.len() as f64 * 100_f64).floor() as i32
    }
}
