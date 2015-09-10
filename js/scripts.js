var countUp = function(target) {
  var current = 0;
  var output = "";
  do {
    current = current + 1;
    if (current === 1) {
      output = current;
    } else {
      output = output + "," + current;
    }
  } while (current < target);
  return output;
};
