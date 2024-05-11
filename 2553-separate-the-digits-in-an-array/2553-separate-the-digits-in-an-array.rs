impl Solution {
    pub fn separate_digits(nums: Vec<i32>) -> Vec<i32> {
        let mut result = Vec::<i32>::new();

        for num in nums {
            let num = num.to_string();

            for c in num.chars() {
                let p = c.to_digit(10).unwrap();
                result.push(p as i32);
            }
        }

        result
    }
}
