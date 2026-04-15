class Solution {
        /**
         * @param {string} s
         * @param {string} t
         * @return {boolean}
         */
        isAnagram(s, t) {
                if (s.length !== t.length) return false;
                const dupMap = new Map();

                for (let c of s) {
                        dupMap.set(c, (dupMap.get(c) || 0) + 1)
                }
                console.log("inicialState", dupMap)
                for (let c of t) {
                        const count = dupMap.get(c)
                        if (!count) {
                                console.log("c that return false", c)
                                return false
                        };
                        
                        dupMap.set(c, count - 1)
                        
                }

                return true
        }
}
