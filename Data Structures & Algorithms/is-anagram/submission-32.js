class Solution {
  isAnagram(s, t) {
    if (s.length !== t.length) return false;

    const counts = new Map();

    for (let i = 0; i < s.length; i++) {
      const chS = s[i];
      counts.set(chS, (counts.get(chS) || 0) + 1);
    }

    for (let i = 0; i < t.length; i++) {
      const chT = t[i];
      const cur = counts.get(chT) || 0;
      if (cur === 0) return false; // more of chT in t than in s
      counts.set(chT, cur - 1);
    }

    // If all counts are zero, it's an anagram
    for (const v of counts.values()) {
      if (v !== 0) return false;
    }
    return true;
  }
}
