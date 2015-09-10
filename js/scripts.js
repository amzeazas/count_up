var countUp = function(target, by) {
  var current = 0;
  var output = "";
  debugger;
  do {
    current = current + by;
    if (current === by) {
      output = current;
    } else {
      output = output + "," + current;
    }
  } while (current + by <= target);
  return output;
};

$(document).ready(function() {
  $("form#counter").submit(function(event) {
    var target = parseInt($("input#target").val());
    var by = parseInt($("input#by").val());
    var result = countUp(target, by);

    $(".output").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
