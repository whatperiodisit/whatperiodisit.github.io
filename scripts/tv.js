var color, main, makeSched, msToTime, nowBtw, period, prep, setToday, times, today;

times = [['07:30', '08:20'], ['08:25', '09:45'], ['09:50', '10:40'], ['10:45', '11:15'], ['11:20', '11:50'], ['11:55', '12:25'], ['12:30', '13:20'], ['13:25', '14:15']];

today = "A";

color = "red";

setToday = function() {
  var date, info;
  date = moment().format("YYYY-MM-DD");
  info = days[date];
  today = info[0];
  color = info[1];
  return times = allTimes[today];
};

makeSched = function() {
  var j, len, per, ref, result;
  result = "";
  ref = numbers[today];
  for (j = 0, len = ref.length; j < len; j++) {
    per = ref[j];
    result = result + ("<h2>" + per + "</h2>");
  }
  return result;
};

msToTime = function(ms) {
  var minutes, seconds;
  minutes = Math.floor((ms + 500) / 60000);
  seconds = Math.floor((ms + 500) / 1000) - 60 * minutes;
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return minutes + ":" + seconds;
};

nowBtw = function(start, end) {
  var truth;
  today = moment().format("YYYY-MM-DD ");
  truth = moment().isBetween(today + start, today + end);
  if (truth) {
    return [msToTime(moment().diff(today + start)), msToTime(-moment().diff(today + end))];
  } else {
    return false;
  }
};

period = function() {
  var i, j, ref;
  if (nowBtw('00:00', times[0][0]) !== false) {
    return [null, "START", nowBtw('00:00', times[0][0])[1]];
  } else if (nowBtw(times[times.length - 1][1], '23:59:59') !== false) {
    return [null, nowBtw(times[times.length - 1][1], '23:59:59')[0], 'END'];
  } else {
    for (i = j = 0, ref = times.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
      if (nowBtw(times[i][0], times[i][1]) !== false) {
        return [i, nowBtw(times[i][0], times[i][1])[0], nowBtw(times[i][0], times[i][1])[1]];
      }
      if (i !== times.length - 1) {
        if (nowBtw(times[i][1], times[i + 1][0]) !== false) {
          return [i + 1, "PASS", nowBtw(times[i][1], times[i + 1][0])[1]];
        }
      }
    }
  }
};

main = function() {
  var per;
  if (nowBtw('00:00:00', '00:00:05') !== false) {
    prep();
  }
  $(".today-is").text(moment().format("[Today is] dddd, MMMM Do."));
  $("#clock").text(moment().format("h:mm A"));
  per = period();
  $("#elapsed").text(per[1]);
  $("#remaining").text(per[2]);
  return $(".per-nums h2").removeClass().eq(per[0]).addClass("now " + color);
};

prep = function() {
  setToday();
  if (today === "N" || today === "W") {
    $(".info").hide();
    $(".no-school").show();
  } else if (today === "A" || today === "B" || today === "C" || today === "D") {
    $(".info").show();
    $(".its-day").show();
    $(".no-school").hide();
  } else {
    $(".info").show();
    $(".its-day").hide();
    $(".no-school").hide();
  }
  $(".letter-before").text(today === "A" ? "It's an" : "It's a");
  $(".letter").text(today).removeClass("red blue").addClass(color);
  return $(".per-nums").html(makeSched());
};

$(document).ready(function() {
  prep();
  return setInterval(function() {
    return main();
  }, 250);
});
