class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const vistos = new Map(); // Usar Map es más eficiente para búsquedas constantes

        for (let i = 0; i < nums.length; i++) {
            const complemento = target - nums[i];
            console.log(complemento)
            if (vistos.has(complemento)) {
                return [vistos.get(complemento), i];
            }

            vistos.set(nums[i], i);
        }
    };
}
