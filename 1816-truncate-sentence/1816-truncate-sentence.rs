impl Solution {
    pub fn truncate_sentence(s: String, k: i32) -> String {
        let splited = s.split(" ");
        let mut result = String::new();
        let mut counter = 0;
        for word in splited {
            if counter == k {
                break;
            }
            result.push_str(word);
            counter += 1;

            result.push_str(" ");
        }

        result.remove(result.len() - 1);

        return result;
    }
}
