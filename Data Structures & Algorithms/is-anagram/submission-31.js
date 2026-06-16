class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        //Hashmap Method
        if(s.length !== t.length) return false

        let mapA = new Map()
        let mapB = new Map()

        for (let i = 0; i < s.length; i++){
            mapA.set( s[i], ( (mapA.get(s[i]) || 0) + 1) )
            mapB.set( t[i], ( (mapB.get(t[i]) || 0) + 1) )
        }

        for (let j = 0; j < t.length; j++){
            if(mapA.get(t[j]) !== mapB.get(t[j])) return false
        }

        return true


    }
}
