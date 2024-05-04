use std::collections::HashMap;

impl Solution {
    pub fn num_jewels_in_stones(jewels: String, stones: String) -> i32 {
        let mut freqs: HashMap<char, u8> = HashMap::new();

        for c in stones.chars().into_iter() {
            match freqs.get(&c) {
                Some(freq) => {
                    freqs.insert(c, freq + 1);
                }
                None => {
                    freqs.insert(c, 1);
                }
            }
        }

        let mut result = 0;
        for c in jewels.chars().into_iter() {
            if let Some(freq) = freqs.get(&c) {
                result += *freq;
            }
        }

        result as i32
    }
}
