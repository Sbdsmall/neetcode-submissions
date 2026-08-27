class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        // remove spaces and non-alphanumeric characters from the array
        // Traverse the array from the beginning and end using Two pointer
        let regex = /[a-zA-Z0-9]/
        let length = s.length; 
        let newStr = ''
        for (let i = 0; i < length; i++){
            let char = s.charAt(i);
            if (char.match(regex)){
                if (char.match(/[0-9]/)){
                    newStr += char
                } else {
                    newStr += char.toLowerCase()
                }
            }
        }
        let reverseStr = newStr.split('').reverse().join('')
        return newStr === reverseStr
    }
}