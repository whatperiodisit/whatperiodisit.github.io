var cell, classes, colors, dayContents, dayLetters, endTimes, foot, head, main, names, rooms, startTimes;

classes = [[1, 2, 3, 5, 5, 5, 8, 7], [2, 3, 4, 6, 6, 6, 7, 8], [3, 4, 1, 7, 7, 7, 6, 5], [4, 1, 2, 8, 8, 8, 5, 6]];

rooms = ["", "2057", "460", "2046", "3033", "2001", "3038", "2058"];

dayLetters = ["A", "B", "C", "D"];

names = ["Free", "AP Government", "Choir", "Mandarin", "AP Physics C", "AP English Language", "Contemporary World Studies", "Latin"];

colors = ['#a4c2f4', '#a2c4c9', '#f9cb9c', '#b4a7d6', '#ea9999', '#ffe599', '#b6d7a8', '#c27ba0'];

startTimes = ["7:30", "8:25", "9:50", "10:45", "11:20", "11:55", "12:30", "1:25"];

endTimes = ["8:20", "9:45", "10:40", "11:15", "11:50", "12:25", "1:20", "2:15"];

cell = function(letter, period) {
  var perNum;
  perNum = classes[letter][period];
  return "<div class=\"period Box-row\" style=\"background-color:" + colors[perNum - 1] + "\"> <div class=\"top\"> <span class=\"time\">" + startTimes[period] + " - " + endTimes[period] + "</span> <span class=\"room\">" + rooms[perNum - 1] + "</span> </div> <h2 class=\"text-center\">" + perNum + "</h2> <div class=\"className\">" + names[perNum - 1] + "</div> </div>";
};

head = function(letter) {
  return "<div class=\"Box\"> <div class=\"Box-header\"> <h1 class=\"text-center\">" + dayLetters[letter] + "</h1> </div>";
};

foot = function() {
  return "</div>";
};

dayContents = function(letter) {
  var i, period, result;
  result = head(letter);
  for (period = i = 0; i <= 7; period = ++i) {
    result += cell(letter, period);
  }
  return result += foot();
};

main = function() {
  var day, i, letter, results;
  day = $("div.day").first();
  results = [];
  for (letter = i = 0; i <= 3; letter = ++i) {
    day.append(dayContents(letter));
    results.push(day = day.next());
  }
  return results;
};

$(document).ready(main);
