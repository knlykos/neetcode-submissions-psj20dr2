class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

    hasDuplicate(nums) {
        let duplicate = false;
        nums.forEach((e, i) => {
            // console.log(e)
            // console.log(i);
            
            nums.forEach((ee, ii) => {
                // console.log("i != ii", i != ii)
                // console.log("e == ee", e == ee);
                
                if (e == ee && i != ii) {
                    duplicate = true
                }
            })
        })
        return duplicate;
    }
}
