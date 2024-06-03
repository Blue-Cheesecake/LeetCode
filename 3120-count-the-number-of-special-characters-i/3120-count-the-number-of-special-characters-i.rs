use std::collections::{HashMap, HashSet};

impl Solution {
    pub fn number_of_special_chars(word: String) -> i32 {
        let mut map = HashMap::<char, (bool, bool)>::new();
        let mut set = HashSet::<char>::new();
        let mut result = 0;

        for c in word.chars().into_iter() {
            let lowered = c.to_ascii_lowercase();

            match map.get_mut(&lowered) {
                Some(value) => {
                    if c.is_ascii_lowercase() {
                        *value = (true, value.1);
                    } else {
                        *value = (value.0, true);
                    }

                    if value.0 && value.1 && !set.contains(&lowered) {
                        result += 1;
                        set.insert(lowered);
                    }
                }
                None => {
                    if c.is_ascii_lowercase() {
                        map.insert(lowered, (true, false));
                    } else {
                        map.insert(lowered, (false, true));
                    }
                }
            }
        }

        result
    }
}
