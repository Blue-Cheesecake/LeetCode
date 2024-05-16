use std::collections::HashSet;

impl Solution {
    pub fn maximum_number_of_string_pairs(words: Vec<String>) -> i32 {
        let mut result = 0;
        let mut used_index_set = HashSet::<usize>::new();

        for (i, word) in words.iter().enumerate() {
            if i == words.len() - 1 {
                break;
            }
            if used_index_set.contains(&i) {
                continue;
            }

            let reversed_string = word.chars().into_iter().rev().collect::<String>();

            for j in i + 1..words.len() {
                if used_index_set.contains(&j) {
                    continue;
                }
                let element = words.get(j).unwrap();

                if reversed_string == *element {
                    result += 1;
                    used_index_set.insert(i);
                    used_index_set.insert(j);
                    break;
                }
            }
        }

        result
    }
}
