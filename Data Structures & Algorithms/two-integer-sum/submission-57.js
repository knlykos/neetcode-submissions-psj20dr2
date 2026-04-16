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
          if (vistos.has(diff)) {
                return [i, vistos.get(diff)]
          }

          vistos.set(nums[i], i);
        //   
        }
    }
}
