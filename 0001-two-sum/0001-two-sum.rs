use std::collections::HashMap;

impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
    let mut result = Vec::new();
    let mut map: HashMap<i32, usize> = HashMap::new();

    for (i, num) in nums.iter().enumerate() {
        let find = target - num;
        let try_finding = map.get(&find);

        match try_finding {
            Some(j) => {
                result.push(i as i32);
                result.push(*j as i32);
                break;
            }
            None => {
                map.insert(*num, i);
            }
        }
    }

    return result;
}


}