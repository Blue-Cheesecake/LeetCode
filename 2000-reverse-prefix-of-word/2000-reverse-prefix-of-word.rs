impl Solution {
    pub fn reverse_prefix(word: String, ch: char) -> String {
        return match word.find(ch) {
            Some(index) => {
                let mut result = String::new();

                for c in word[..=index].chars().rev() {
                    result.push(c);
                }
                for c in word[index + 1..].chars() {
                    result.push(c);
                }

                result
            }
            None => word,
        };
    }
}
