function createNumberArray(n) {
  var numArray = [];

  for (var i = 1; i <= n; i++) {
    numArray.push(i);
  }
  return numArray;
}

function pingPong(numArray) {
  for (i = 0; i <= numArray.length; i++) {
    if ((numArray[i]%3) === 0 && (numArray[i]%15) != 0) {
      numArray[i] = "ping";
    } else if ((numArray[i]%5) === 0 && (numArray[i]%15) != 0) {
      numArray[i] = "pong";
    } else if ((numArray[i]%15) === 0) {
      numArray[i] = "ping-pong";
    }
  }
  return numArray;
}



alert(pingPong(createNumberArray(30)));

$(document).ready(function() {



});
