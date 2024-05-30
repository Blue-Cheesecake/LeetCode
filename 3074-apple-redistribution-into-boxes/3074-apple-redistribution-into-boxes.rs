impl Solution {
    pub fn minimum_boxes(apple: Vec<i32>, capacity: Vec<i32>) -> i32 {
        let mut capacity = capacity;
        let mut apple = apple;
        capacity.sort_unstable_by(|a, b| b.cmp(a));
        let mut result = 0;

        let mut i = 0_usize;
        let mut j = 0_usize;
        let mut prev_capa_index: Option<usize> = Option::None;

        while i < capacity.len() && j < apple.len() {
            if i < capacity.len() && j < apple.len() {
                let cap = capacity.get_mut(i).unwrap();
                let app = apple.get_mut(j).unwrap();

                let diff = *cap - *app;

                // capacity is valid
                if diff > 0 {
                    *cap -= *app;

                    *app = 0; // debug purpose

                    match prev_capa_index {
                        Some(prev) => {
                            if i != prev {
                                result += 1;
                                prev_capa_index = Option::Some(i);
                            }
                        }
                        None => {
                            result += 1;
                            prev_capa_index = Option::Some(i);
                        }
                    }

                    j += 1; // move apple
                    continue;
                }
                if diff == 0 {
                    *cap -= *app;

                    *cap = 0;
                    *app = 0;

                    match prev_capa_index {
                        Some(prev) => {
                            if i != prev {
                                result += 1;
                                prev_capa_index = Option::Some(i);
                            }
                        }
                        None => {
                            result += 1;
                            prev_capa_index = Option::Some(i);
                        }
                    }

                    j += 1; // move apple
                    i += 1; // move capacity

                    continue;
                }

                *app -= *cap;
                *cap = 0;

                match prev_capa_index {
                    Some(prev) => {
                        if i != prev {
                            result += 1;
                            prev_capa_index = Option::Some(i);
                        }
                    }
                    None => {
                        result += 1;
                        prev_capa_index = Option::Some(i);
                    }
                }

                i += 1; // move capacity
                continue;
            }
            break;
        }

        return result;
    }
}
