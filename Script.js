function palindrome(num){
  var a = [];
  for (i = num.toString().length; i >=1; i--){
    a.push(num.toString().toLowerCase().substr(i-1,1)); 
  }
  return (a.join('') == num.toString().toLowerCase()) ? true : false;
}
 console.log(palindrome("saippuakivikauppias"));
