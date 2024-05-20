use std::cmp::max;

impl Solution {
    pub fn furthest_distance_from_origin(moves: String) -> i32 {
        let replaced_r = moves.replace("_", "R");
        let replaced_l = moves.replace("_", "L");

        let mut cr = 0_i32;
        let mut cl = 0_i32;
        for c in replaced_r.chars().into_iter() {
            if c == 'L' {
                cr -= 1;
            } else {
                cr += 1;
            }
        }
        for c in replaced_l.chars().into_iter() {
            if c == 'L' {
                cl -= 1;
            } else {
                cl += 1;
            }
        }

        max(cr.abs(), cl.abs())
    }
}
