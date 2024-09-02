function emojify(regexpStr){
	for(const metachar in metacharEmojiDict){
    regexpStr = regexpStr.replaceAll(metachar, metacharEmojiDict[metachar]);
  }
  return regexpStr
}