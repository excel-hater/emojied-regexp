function getResult(actual, expected, name="no-name"){
  if (actual === expected){
    return `PASS: ${name} is actually ${JSON.stringify(actual, null, '\t')} .\n`;
  }
  else{
    return `FAIL: ${name} expected: ${JSON.stringify(expected, null, '\t')} but actual: ${JSON.stringify(actual, null, '\t')} .\n`;
  }
}

function writeSomewhere(str){
  document.body.innerText += str;
}

function doTest(actual, expected, name="no-name"){
  writeSomewhere(getResult(actual, expected, name));
}

// kick in test-runner html
function doUnitTests(){
  doTest("foo","foo");
  doTest("foo","bar", "wrong");
  doTest(emojify("(ab)*c\\s"), "🌜ab🌛⚛️c〽s", "emojify_parentheses");
  doTest(demojify("🫱ab🫲⚛️c〽s"), "[ab]*c\\s", "demojify_square-brackets");
}
