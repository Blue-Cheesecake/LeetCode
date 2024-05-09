impl Solution {
    pub fn maximum_happiness_sum(happiness: Vec<i32>, k: i32) -> i64 {
        let mut happiness = happiness;
        happiness.sort();

        let mut result: i64 = 0;
        let mut i = 0;
        let mut index = (happiness.len() - 1) as i32;

        while i < k {
            if index < 0 {
                break;
            }

            let mut happy = happiness.get(index as usize).unwrap().clone();
            happy -= i;

            if happy > 0 {
                result += happy as i64;
            }

            i += 1;
            index -= 1;
        }

        return result;
    }
}
