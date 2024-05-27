impl Solution {
    pub fn interpret(command: String) -> String {
        let mut result = String::new();

        let mut c = command.chars();

        while let Some(cal) = c.next() {
            if cal == 'G' {
                result.push(cal);
                continue;
            }
            let n = c.next();

            if let Some(next_val) = n {
                if next_val == ')' && cal != 'l' {
                    result.push('o');
                }
                if next_val == 'a' {
                    result.push_str("al");
                }
            }
        }

        result
    }
}
