class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

    hasDuplicate(nums) {
        const map = new Map();
        let duplicated = false;
        nums.forEach(e => {
            if (map.has(e)) {
                duplicated = true;
            } else {
                map.set(e);
            }
        })
        console.log(map)
        return duplicated;
    }
}
