function emojify(regexpStr){
	for(const metachar in metacharEmojiDict){
    regexpStr = regexpStr.replaceAll(metachar, metacharEmojiDict[metachar]);
  }
  return regexpStr
}

function demojify(emojiexpStr){
	for(const metachar in metacharEmojiDict){
    emojiexpStr = emojiexpStr.replaceAll(metacharEmojiDict[metachar], metachar);
  }
  return emojiexpStr
}