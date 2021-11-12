

const isValid = function(s) {
   const arrayOpenBracer = {
      "(": "round",
      "{": "curly",
      "[": "square"
   }
   const arrayCloseBracer = {
      ")": "round",
      "}": "curly",
      "]": "square"
   }
   if(s.length > 1 && !(s.length % 2) && !arrayOpenBracer[s[s.length - 1]]){
      label: while(s){
         if(s.length === 1){
            return false
         }
         if(s.length === 2 && s[0] === s[1]){
            return false
         }
         for(let x = (s.length - 1); x >= 0; x--) {
            if (arrayOpenBracer[s[x]]) {
               return false
            }
            if (arrayOpenBracer[s[x - 1]]) {
               if (arrayOpenBracer[s[x - 1]] === arrayCloseBracer[s[x]]) {
                  s = s.replaceAll(`${s[x-1]}${s[x]}`, "")
                  continue label
               }
               return false
            }
         }
      }
      return true
   }
   return false
}



// true
// console.log(isValid("()"))
// console.log(isValid("()[]{}"))
// console.log(isValid("{[]}"))
// console.log(isValid("(([]){})"))


// false
// console.log(isValid("(]"))
// console.log(isValid("([)]"))
// console.log(isValid("(("))
// console.log(isValid("){"))
// console.log(isValid(")(){}"))
// console.log(isValid("))"))
// console.log(isValid("(){{"))