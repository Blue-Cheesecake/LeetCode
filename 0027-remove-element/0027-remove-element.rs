impl Solution {
    fn shift_left(arr: &mut Vec<i32>, index: usize) {
        for i in index..arr.len() - 1 {
            let next_element = arr[i + 1];
            arr[i] = next_element;
        }
        arr.pop();
    }

    pub fn remove_element(nums: &mut Vec<i32>, val: i32) -> i32 {
        let mut length: usize = nums.len();
        let mut i: usize = 0;

        while i < length {
            let should_delete = *nums.get(i).unwrap() == val;

            if !should_delete {
                i += 1;
                continue;
            }

            Solution::shift_left(nums, i);
            length -= 1;
        }

        nums.len() as i32
    }
}
