class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        console.log(strs);
        const anagramsGroups = []
        let vector = new Array(26).fill(0)
        let anagramsMap = new Map();
        

        for (let j = 0; j < strs.length; j++) {
            for (let i = 0; i < strs[j].length; i++) {
                const current = strs[j][i];

                vector[current.charCodeAt() - 97] = vector[current.charCodeAt() - 97] + 1;
            }

            const vectorString = vector.toString();
        if (!anagramsMap.has(vectorString)) {
            anagramsMap.set(vectorString, [])
        }
        anagramsMap.get(vectorString).push(strs[j])
            vector = new Array(26).fill(0)
        }

        anagramsMap.forEach(v => {
            anagramsGroups.push(v);
        })
        return anagramsGroups

    }
}
