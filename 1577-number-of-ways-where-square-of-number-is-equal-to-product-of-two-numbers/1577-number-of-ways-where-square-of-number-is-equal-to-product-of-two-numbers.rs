use std::collections::HashMap;

impl Solution {
    pub fn num_triplets(nums1: Vec<i32>, nums2: Vec<i32>) -> i32 {
        let nums1: Vec<u64> = nums1.into_iter().map(|x| x as u64).collect();
        let nums2: Vec<u64> = nums2.into_iter().map(|x| x as u64).collect();
        let mut result = 0;
        let mut freqs1: HashMap<u64, i32> = HashMap::new();
        let mut freqs2: HashMap<u64, i32> = HashMap::new();
        let mut i = 0;
        let mut j = 0;

        while i < nums1.len() || j < nums2.len() {
            if i < nums1.len() {
                let element = nums1.get(i).expect("Coudn't find element");
                let element = element.pow(2);
                match freqs1.get(&element) {
                    Some(freq) => {
                        let p = *freq + 1;
                        freqs1.insert(element, p);
                    }
                    None => {
                        freqs1.insert(element, 1);
                    }
                }

                i += 1;
            }
            if j < nums2.len() {
                let element = nums2.get(j).expect("Coudn't find element");
                let element = element.pow(2);
                match freqs2.get(&element) {
                    Some(freq) => {
                        let p = *freq + 1;
                        freqs2.insert(element, p);
                    }
                    None => {
                        freqs2.insert(element, 1);
                    }
                }

                j += 1;
            }
        }

        // Type 1
        for i in 0..nums2.len() - 1 {
            for j in i + 1..nums2.len() {
                let element = nums2.get(i).unwrap() * nums2.get(j).unwrap();
                if freqs1.contains_key(&element) {
                    let freq = freqs1.get(&element).unwrap();
                    result += freq;
                }
            }
        }

        // Type 2
        for i in 0..nums1.len() - 1 {
            for j in i + 1..nums1.len() {
                let element = nums1.get(i).unwrap() * nums1.get(j).unwrap();
                if freqs2.contains_key(&element) {
                    let freq = freqs2.get(&element).unwrap();
                    result += freq;
                }
            }
        }

        return result;
    }
}
