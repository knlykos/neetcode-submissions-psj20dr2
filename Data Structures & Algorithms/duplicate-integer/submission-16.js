class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

    hasDuplicate(nums) {
        const map = new Map();
        for (const e of nums) {
            if (map.has(e)) return true;
            map.set(e);
        }
        return false;
    }
}
