if(
  isExpected("foo","foo")
  && isExpected("foo","bar", "wrong")
){
  console.debug("all ok");
}else{
  console.debug("something goes wrong");
}
