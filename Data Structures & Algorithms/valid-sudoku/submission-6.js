class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rowMap = new Map()
        let colMap = new Map()
        let boxMap = new Map()

        for(let r = 0; r < 9; r++){
            for(let c = 0; c < 9; c++){
                let value = board[r][c]
                if(value == ".") continue

                let boxKey = `${Math.floor(r/3)}-${Math.floor(c/3)}`

                if(!rowMap.has(r)) rowMap.set(r, new Set())
                if(!colMap.has(c)) colMap.set(c, new Set())
                if(!boxMap.has(boxKey)) boxMap.set(boxKey, new Set())

   
                if(rowMap.get(r).has(value) || colMap.get(c).has(value) || boxMap.get(boxKey).has(value)){
                    return false
                }
                rowMap.get(r).add(value)
                colMap.get(c).add(value)
                boxMap.get(boxKey).add(value)



            }

        }
        return true

    }
}
