impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
    let length = nums.len();
    let mut vec: Vec<i32> = Vec::new();
    for i in 0..=length - 2 {
        for j in i + 1..=length - 1 {
            let x = nums[i];
            let y = nums[j];
            if x + y == target {
                vec.push(i as i32);
                vec.push(j as i32);
            }
        }
    }

    return vec;
}

}