class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(strA, strB) {
        let StringA = stringFormat(strA)
        let StringB = stringFormat(strB)
        if(StringA.length !== StringB.length) return false
        return stringMapCheck(StringA, StringB)
    }

    
}

    function stringFormat(string){
        return string.toLowerCase().replaceAll(' ', '');
    }

    function freqMapSetter(string){
        let mapA = new Map()
        for(let i = 0; i < string.length; i++){
            mapA.set(string[i], (mapA.get(string[i]) || 0) + 1);
        }
        return mapA
    }

    function stringMapCheck(stringA, stringB){
        let mapA = freqMapSetter(stringA)
        let mapB = freqMapSetter(stringB)
        for(let j = 0; j < stringB.length; j++){
            if(mapA.get(stringB[j]) !== mapB.get(stringB[j])) return false
        }
        return true
    }
