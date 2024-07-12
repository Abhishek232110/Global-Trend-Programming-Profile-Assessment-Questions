// Write a function that checks if two given strings are anagrams of each other.

function areAnagrams(str1, str2) {
  a = str1.split("").sort().join("");
  console.log("a", a);
  let string1 = str1.split("").sort().join("");
  let string2 = str2.split("").sort().join("");
  if (string1 == string2) {
    return true;
  } else {
    return false;
  }
}

console.log(areAnagrams("got", "otg"));
