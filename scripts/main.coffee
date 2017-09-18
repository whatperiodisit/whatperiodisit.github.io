classes = [
  [1, 2, 3, 5, 5, 5, 8, 7], #A
  [2, 3, 4, 6, 6, 6, 7, 8], #B
  [3, 4, 1, 7, 7, 7, 6, 5], #C
  [4, 1, 2, 8, 8, 8, 5, 6]  #D
]

rooms = [
  "",     #1
  "2057", #2
  "460",  #3
  "2046", #4
  "3033", #5
  "2001", #6
  "3038", #7
  "2058"  #8
]

dayLetters = [
  "A",
  "B",
  "C",
  "D"
]

names = [
  "Free",
  "AP Government",
  "Choir",
  "Mandarin",
  "AP Physics C",
  "AP English Language",
  "Contemporary World Studies",
  "Latin"
]

colors = [
  '#a4c2f4',
  '#a2c4c9',
  '#f9cb9c',
  '#b4a7d6',
  '#ea9999',
  '#ffe599',
  '#b6d7a8',
  '#c27ba0'
]

startTimes = [
  "7:30",
  "8:25",
  "9:50",
  "10:45",
  "11:20",
  "11:55",
  "12:30",
  "1:25"
]

endTimes = [
  "8:20",
  "9:45",
  "10:40",
  "11:15",
  "11:50",
  "12:25",
  "1:20",
  "2:15"
]

cell =
  (letter, period) ->
    perNum = classes[letter][period]
    "<div class=\"period Box-row\" style=\"background-color:#{colors[perNum-1]}\">
      <div class=\"top\">
        <span class=\"time\">#{startTimes[period]} - #{endTimes[period]}</span>
        <span class=\"room\">#{rooms[perNum-1]}</span>
      </div>
      <h2 class=\"text-center\">#{perNum}</h2>
      <div class=\"className\">#{names[perNum-1]}</div>
    </div>
    "

head =
  (letter) ->
    "<div class=\"Box\">
      <div class=\"Box-header\">
        <h1 class=\"text-center\">#{dayLetters[letter]}</h1>
      </div>
      "

foot =
  () ->
    "</div>"

dayContents =
  (letter) ->
    result = head(letter)
    result += cell(letter, period) for period in [0..7]
    result += foot()

main = () ->
  day = $( "div.day" ).first()
  for letter in [0..3]
    day.append(dayContents(letter))
    day = day.next()

$(document).ready(main)
