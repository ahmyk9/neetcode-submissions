class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []
        let operations = ["+","-","*","/"]


        for(let i = 0; i < tokens.length; i++){
            let token = tokens[i]
            if(!operations.includes(token)){
                stack.push(Number(token))
            }else{
                if(token == "+") {
                    let a = stack.pop()
                    let b = stack.pop()
                    stack.push(a + b)
                }
                if(token == "-") {
                    let a = stack.pop()
                    let b = stack.pop()
                    stack.push(b - a)
                }
                if(token == "*") {
                    let a = stack.pop()
                    let b = stack.pop()
                    stack.push(a * b)

                }
                if(token == "/") {
                    let a = stack.pop()
                    let b = stack.pop()
                    stack.push(Math.trunc(b / a))

                }

            }
        }


        return stack[0] 

    }
}
