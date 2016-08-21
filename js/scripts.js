function createNumberArray(n) {
  var numArray = [];

  for (var i = 1; i <= n; i++) {
    numArray.push(i);
  }
  return numArray;
}

function pingPong(array) {
  for (i = 0; i <= array.length; i++) {
    if ((array[i]%3) === 0 && (array[i]%15) != 0) {
      array[i] = "ping";
    } else if ((array[i]%5) === 0 && (array[i]%15) != 0) {
      array[i] = "pong";
    } else if ((array[i]%15) === 0) {
      array[i] = "ping-pong";
    }
  }
  return array;
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var pingPongList = document.getElementById("ping-pong-list");
    var inputNumber = $("input#number").val();
    var numArray = createNumberArray(inputNumber);
    var pingPongArray = pingPong(numArray);

    for (i = 0; i < pingPongArray.length; i++) {
      var entry = document.createElement("li");
      entry.appendChild(document.createTextNode(pingPongArray[i]));
      pingPongList.appendChild(entry);
    };

    $("#display-list").show();

  });
});
