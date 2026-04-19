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
            // console.log(strs[j])
            for (let i = 0; i < strs[j].length; i++) {
                const current = strs[j][i];

                vector[current.charCodeAt() - 97] = vector[current.charCodeAt() - 97] + 1;
                // console.log(vector)
                
            }

            const vectorString = vector.toString();
            console.log(vector)
            console.log(strs[j])
            if (anagramsMap.has(vectorString)) {
                let anagramSingleGroup = anagramsMap.get(vectorString)
                anagramSingleGroup.push(strs[j])
                anagramsMap.set(vectorString, anagramSingleGroup);
            } else {
                anagramsMap.set(vectorString, [strs[j]])
            }
            vector = new Array(26).fill(0)
        }

        anagramsMap.forEach(v => {
            anagramsGroups.push(v);
        })
        return anagramsGroups

    }
}
