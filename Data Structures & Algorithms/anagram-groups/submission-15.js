class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map()
        for(let str of strs){
            let count = Array(26).fill(0)
            for(let c of str){
                
                // count[i] += 1 // if 'i' was one of the 26 zeros in the count array. 
                // c is a single character (say, from a string you're iterating over)
                // c.charCodeAt(0) gets the ASCII code of that character. 'a' → 97, 'b' → 98, ..., 'z' → 122
                // 'a'.charCodeAt(0) is just 97 (the code for lowercase a)
                // Subtracting: c.charCodeAt(0) - 97 maps 'a' → 0, 'b' → 1, 'c' → 2, ... 'z' → 25
                
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
            }
                let key = count.join(',')
                if(!map.has(key)){
                    map.set(key,[])
                }
                map.get(key).push(str)
        }
        return Array.from(map.values())

    }
}
