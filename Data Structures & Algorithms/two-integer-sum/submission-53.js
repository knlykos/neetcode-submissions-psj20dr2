class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const vistos = new Map();

        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            console.log(diff)
            console.log("vistos.has(diff)", vistos.has(diff))
            if (vistos.has(diff)) {
                return [i, vistos.get(diff)]
            }
            vistos.set(nums[i], i);
            console.log(vistos)
        }
    }
}
