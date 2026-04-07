class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const indexes = [];
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                console.log("j + i", nums[j] + nums[i] === target)
                if (nums[j] + nums[i] === target) {
                    indexes.push(i)
                    indexes.push(j)
                    return indexes
                }
            }
        }
    }
}
