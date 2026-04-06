class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    // the strings can be empty,
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const counts = new Map();

        for(let x = 0; x < s.length; x++) {
            const chS = s[x];
            counts.set(chS, (counts.get(chS) || 0) + 1);
            
        }

        for (let i = 0; i < t.length; i++) {
            const chT = t[i];
            const cur = counts.get(chT) || 0;
            if (cur === 0) return false;
            counts.set(chT, cur - 1);
        }

        for (const v of counts.values()) {
            if (v !== 0) return false;
        }
        return true;
    }
}
