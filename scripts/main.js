var cell, classes, endTimes, main, rooms, startTimes;

classes = [[1, 2, 3, 5, 5, 5, 8, 7], [2, 3, 4, 6, 6, 6, 7, 8], [3, 4, 1, 7, 7, 7, 6, 5], [5, 6, 7, 8, 8, 8, 5, 6]];

rooms = ["", "2057", "460", "2046", "3033", "2001", "3038", "2058"];

startTimes = ["7:30", "8:25", "9:50", "10:45", "11:20", "11:55", "12:30", "1:25"];

endTimes = ["8:20", "9:45", "10:40", "11:15", "11:50", "12:25", "1:20", "2:15"];

cell = function(letter, period) {
  return function(index, html) {
    var perNum;
    perNum = classes[letter][period];
    return "<div class=\"period\"> <div class=\"top\"> <span class=\"time\">" + startTimes[period] + " - " + endTimes[period] + "</span> <span class=\"room\">" + rooms[perNum - 1] + "</span> </div> <h2 class=\"text-center\">" + perNum + "</h2> </div>";
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
