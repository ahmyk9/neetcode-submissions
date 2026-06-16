class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // o(n)
        // if length dont match they are not anagrams
        if (s.length != t.length) return false
        

        // storing chars with its quanity as values() in the map 
        let map = new Map()
        for (let i = 0; i < s.length; i++){
            map.set(s[i], ((map.get(s[i]) || 0) + 1))
        }

        // storing chars with its quanity as values() in the map 
        let map2 = new Map()
        for (let j = 0; j < t.length; j++){
            map2.set(t[j], ((map2.get(t[j]) || 0) + 1))
        }

        //if the quantity chars in s match t, its anagram otherwise its false 
        for (let k = 0; k < t.length; k++){
            if (map.get(t[k]) !== map2.get(t[k])){
                return false
            }
        }
        return true
    }
}
