var cell, classes, main, rooms;

classes = [[1, 2, 3, 5, 5, 5, 6, 7], [2, 3, 4, 6, 6, 6, 7, 8], [3, 4, 1, 7, 7, 7, 6, 5], [5, 6, 7, 8, 8, 8, 5, 6]];

rooms = ["", "2057", "460", "2046", "3033", "2001", "3038", "2058"];

cell = function(letter, period) {
  return function(index, html) {
    return "<div class=\"period\"> <div class=\"top\"> <span class=\"time\">7:30 - 8:20</span> <span class=\"room\">3033</span> </div> <h2 class=\"text-center\">" + classes[letter][period] + "</h2> </div>";
  };
};

main = function() {
  var day, i, j, letter, period, results;
  day = $("div.day").first();
  results = [];
  for (letter = i = 0; i <= 3; letter = ++i) {
    for (period = j = 0; j <= 7; period = ++j) {
      day.append(cell(letter, period));
    }
    results.push(day = day.next());
  }
  return results;
};

$(document).ready(main);
