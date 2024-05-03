impl Solution {
    pub fn maximize_sum(nums: Vec<i32>, k: i32) -> i32 {
    let mut largest = -1;

    for &num in nums.iter() {
        if largest < num {
            largest = num;
        }
    }

    let mut result = 0;

    for _ in 0..k {
        result += largest;
        largest += 1;
    }

    return result;
}

}