class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false
        }

        //Create map to have all the letters of string 's'
        let map = new Map()
        for (let i = 0; i < s.length; i++){
            let count = map.get(s[i])
            map.set(s[i], count + 1 || 1)
        }

        for (let j = 0; j < t.length; j++){
            if(!map.has(t[j])){
                return false
            }
            map.set(t[j], map.get(t[j]) - 1)
        }

        for(let values of map.values()){
            if(values !== 0){
                return false
            }
        }

        return true

    }
}
