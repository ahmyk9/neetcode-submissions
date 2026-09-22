class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
  let stack = []
    let pairs = { '(': ')', '[': ']', '{': '}' }

    for (let i = 0; i < s.length; i++) {
        let bracket = s[i]

        if (pairs[bracket]) {
            stack.push(bracket)
        } else {
            let last = stack.pop()
            if (pairs[last] !== bracket) return false
        }
    }

    return stack.length == 0

    }
}
