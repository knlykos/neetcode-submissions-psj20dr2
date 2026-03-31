class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    // the strings can be empty,
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }
        let charRep = 0;
        const sMap = new Map();
        const tMap = new Map();
        
        for (let x = 0; x < t.length; x++) {
            if (tMap.has(t[x])) {
                charRep = tMap.get(t[x]);
                charRep++;
                tMap.set(t[x], charRep++);

            } else {
                tMap.set(t[x], 1);
            };

        }
        console.log(tMap);

        for (let x = 0; x < s.length; x++) {
            if (sMap.has(s[x])) {
                charRep = sMap.get(s[x]);
                charRep++;
                sMap.set(s[x], charRep++);

            } else {
                sMap.set(s[x], 1);
            };

        }
        console.log(sMap);

        for (const [key, value] of sMap) {
            // console.log(key, tMap.has(key))
            console.log(key, tMap.has(key))

            if (tMap.has(key) === false || tMap.get(key) !== value) {
                return false;
            }
        }
        return true;
    }
}
