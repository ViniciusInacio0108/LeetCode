//  traduzido para Dart

bool isPalindrome(x) {
  var number = x;
  if (number.isNegative) {
    return false;
  } else {
    var numTXT = number.toString();
    numTXT = numTXT.split('').reversed.join();

    print("$numTXT $number");

    var result = (numTXT == number.toString()) ? true : false;
    return result;
  }
}

void main() {
  print(isPalindrome(10));
}
