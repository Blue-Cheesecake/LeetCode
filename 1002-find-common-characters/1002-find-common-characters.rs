impl Solution {
    pub fn common_chars(words: Vec<String>) -> Vec<String> {
        if words.is_empty() {
            return vec![];
        }

        let mut words = words.clone();
        let mut result = Vec::new();
        let base = words.get(0).unwrap().clone();

        for c in base.chars().into_iter() {
            let mut is_all_contains = true;

            let mut i = 0;
            while i < words.len() {
                let word = words.get_mut(i).unwrap();

                if !word.contains(c) {
                    is_all_contains = false;
                    break;
                }

                *word = word.replacen(c, "", 1);

                i += 1;
            }

            if is_all_contains {
                result.push(String::from(c));
            }
        }

        return result;
    }
}
