class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {


        let s = strs
        let map = new Map()
      
        for(let i = 0; i < s.length; i++){
            let sortedS = s[i].split('').sort().join('');
            if(!map.has(sortedS)){
                map.set(sortedS,[])
            }
            map.get(sortedS).push(s[i])
        }
        return Array.from(map.values())

    }
}
