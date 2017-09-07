var classes, main;

classes = [1, 2, 3, 4, 2, 3, 4, 1, 3, 4, 1, 2, 5, 6, 7, 8, 5, 6, 7, 8, 5, 6, 7, 8, 8, 7, 6, 5, 7, 8, 5, 6];

main = function() {
  var cells, i, j, results;
  cells = $("div.period");
  results = [];
  for (i = j = 0; j <= 27; i = ++j) {
    results.push(cells.eq(i).html(classes[i]));
  }
  return results;
};

$(document).ready(main);
