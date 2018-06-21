/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing.
 The first word within the output should be capitalized only if the original word was capitalized.
*/
function toCamelCase(str){
  return str.replace( /[-_][a-z]/ig, function UpperCase(str){ return str[1].toUpperCase();});
}
