times = [
  ['07:30', '08:20'],
  ['08:25', '09:45'],
  ['09:50', '10:40'],
  ['10:45', '11:15'],
  ['11:20', '11:50'],
  ['11:55', '12:25'],
  ['12:30', '13:20'],
  ['13:25', '14:15']
]

today = "A"
color = "red"

setToday = () ->
  date = moment().format("YYYY-MM-DD")
  info = days[date]
  today = info[0]
  color = info[1]
  times = allTimes[today]

makeSched = () ->
  result = ""
  for per in numbers[today]
    result = result + "<h2>#{per}</h2>"
  result

msToTime = (ms) ->
  minutes = Math.floor((ms+500)/60000)
  seconds = Math.floor((ms+500)/1000) - 60*minutes
  seconds = "0"+seconds if seconds < 10
  minutes + ":" + seconds

nowBtw = (start, end) ->
  today = moment().format("YYYY-MM-DD ")
  truth = moment().isBetween(today + start, today + end);
  if truth
    [msToTime(moment().diff(today + start)), msToTime(-moment().diff(today + end))]
  else
    false

period = () -> ## Return [period (ordinal), time elapsed, time remaining]
  if nowBtw('00:00', times[0][0]) != false
    return [false, "START", nowBtw('00:00', times[0][0])[1]]
  else if nowBtw(times[times.length-1][1], '23:59:59') != false
    return [false, nowBtw(times[times.length-1][1], '23:59:59')[0], 'END']
  else
    for i in [0...times.length]
      if nowBtw(times[i][0], times[i][1]) != false
        return [i, nowBtw(times[i][0], times[i][1])[0], nowBtw(times[i][0], times[i][1])[1]]
      if i != times.length-1
        if nowBtw(times[i][1], times[i+1][0]) != false
          return [i+1, "PASS", nowBtw(times[i][1], times[i+1][0])[1]]

main = () ->
  if nowBtw('00:00:00', '00:00:05') != false
    prep()
  $(".today-is").text(moment().format("[Today is] dddd, MMMM Do."))
  $("#clock").text(moment().format("h:mm A"))
  per = period()
  $("#elapsed").text(per[1])
  $("#remaining").text(per[2])
  if per[0] != false
    $(".per-nums h2").removeClass()
      .eq(per[0])
      .addClass("now " + color)

prep = () ->
  setToday()
  if today == "N" or today == "W"
    $(".info").hide()
    $(".no-school").show()
  else if today == "A" or today == "B" or today == "C" or today == "D"
    $(".info").show()
    $(".its-day").show()
    $(".no-school").hide()
  else
    $(".info").show()
    $(".its-day").hide()
    $(".no-school").hide()
  $(".letter-before").text(if today == "A" then "It's an" else "It's a")
  $(".letter").text(today)
    .removeClass("red blue")
    .addClass(color)
  $(".per-nums").html(makeSched())

$(document).ready ->
  prep()
  setInterval () ->
    main()
  , 250
