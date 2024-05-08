use std::collections::HashMap;

impl Solution {
    pub fn find_repeated_dna_sequences(s: String) -> Vec<String> {
        const LETTER_LONG: usize = 10;

        if s.len() < LETTER_LONG {
            return vec![];
        }

        let mut result = Vec::<String>::new();
        let mut i = 0;
        let mut freqs = HashMap::<&str, i32>::new();

        while i < s.len() - LETTER_LONG + 1 {
            let sub_str = &s[i..i + LETTER_LONG];
            match freqs.get(sub_str) {
                Some(freq) => {
                    freqs.insert(sub_str, *freq + 1);
                }
                None => {
                    freqs.insert(sub_str, 1);
                }
            }

            i += 1;
        }

        for (&k, &v) in freqs.iter() {
            if v > 1 {
                result.push(String::from(k));
            }
        }

        result
    }
}
