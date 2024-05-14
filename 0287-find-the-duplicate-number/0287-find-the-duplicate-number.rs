use std::collections::HashSet;

impl Solution {
    pub fn find_duplicate(nums: Vec<i32>) -> i32 {
        let mut set = HashSet::<&i32>::new();

        for num in nums.iter() {
            if set.contains(num) {
                return *num;
            }
            set.insert(num);
        }

        -1
    }
}
