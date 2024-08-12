impl Solution {
    pub fn running_sum(nums: Vec<i32>) -> Vec<i32> {
        let mut result: Vec<i32> = vec![];

        nums.iter().for_each(|x| {
            if result.len() == 0 {
                result.push(x.clone());
                return;
            }

            let last_val = result.get(result.len() - 1).unwrap();
            let new_val = last_val.clone() + x;
            result.push(new_val);
        });

        return result;
    }
}