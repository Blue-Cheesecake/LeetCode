use std::collections::HashMap;

impl Solution {
    pub fn frequency_sort(nums: Vec<i32>) -> Vec<i32> {
        let mut freqs = HashMap::<i32, u8>::new();

        for num in nums.iter() {
            match freqs.get(num) {
                Some(freq) => {
                    freqs.insert(*num, *freq + 1);
                }
                None => {
                    freqs.insert(*num, 1);
                }
            }
        }

        let mut pair = Vec::<(&i32, &u8)>::new();

        for ele in freqs.iter() {
            pair.push(ele);
        }

        pair.sort_unstable_by(|a, b| {
            if a.1 != b.1 {
                a.1.cmp(b.1)
            } else {
                b.0.cmp(a.0)
            }
        });

        let mut result = Vec::<i32>::new();

        for (k, v) in pair {
            for _ in 0..*v {
                result.push(*k);
            }
        }

        result
    }
}
