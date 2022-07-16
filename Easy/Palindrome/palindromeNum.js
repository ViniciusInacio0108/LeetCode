//  infelizmente tive que criar pois por algum motivo o javascript não me deixava fazer direto da function isPalindrome.
function reverseString(str) {
    return str.split("").reverse().join("");
}

var isPalindrome = function(x) {
   var number = x
   if (Math.sign(number) == -1) {
       return false
   } else {
       var numTXT = number.toString()
        numTXT = reverseString(numTXT);
        
        var result = (numTXT == number) ? true : false
        return result
   }
};

console.log(isPalindrome(10))