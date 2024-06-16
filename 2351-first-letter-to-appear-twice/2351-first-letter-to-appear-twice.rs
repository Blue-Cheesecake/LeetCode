use std::collections::HashSet;

impl Solution {
    pub fn repeated_character(s: String) -> char {
        let mut set = HashSet::<char>::new();

        for c in s.chars().into_iter() {
            if set.contains(&c) {
                return c;
            }
            set.insert(c);
        }

        panic!()
    }
}
