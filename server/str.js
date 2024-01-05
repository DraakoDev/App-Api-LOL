exports.replaceString = (str, replace, toReplace) => {
  let newString = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === replace) {
      newString += toReplace;
    } else {
      newString += str[i];
    }
  }

  return newString;
};
