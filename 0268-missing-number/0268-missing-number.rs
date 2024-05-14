impl Solution {
    pub fn missing_number(nums: Vec<i32>) -> i32 {
        let n = nums.len();
        let expected_sum = (n * (n + 1)) / 2;
        let mut curr_sum: usize = 0;

        for num in nums.iter() {
            curr_sum += *num as usize;
        }

        (expected_sum - curr_sum) as i32
    }
}