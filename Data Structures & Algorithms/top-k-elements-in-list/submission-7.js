class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        if (nums.length <= 0) return []
        const map = new Map();
        let freqBuckets = [];
        for (let i = 0; i < nums.length; i++) {
            if (!map.has(nums[i])) {
                map.set(nums[i], 0);
            }
            map.set(nums[i], (map.get(nums[i]) || 0) + 1)
        }
        console.log(map)
        map.forEach((v, k) => {
            if (!freqBuckets[v - 1]) {
                freqBuckets[v - 1] = [];
            }
            freqBuckets[v - 1].push(k)
        })
        freqBuckets = freqBuckets.flat()
        return freqBuckets.slice(-k)
    }
}
