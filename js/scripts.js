var countUp = function(target, by) {
  var current = 0;
  var output = "";
  do {
    current = current + by;
    if (current === by) {
      output = current;
    } else {
      output = output + "," + current;
    }
  } while (current < target);
  return output;
};
