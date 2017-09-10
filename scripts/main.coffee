classes = [
  [1, 2, 3, 5, 5, 5, 6, 7], #A
  [2, 3, 4, 6, 6, 6, 7, 8], #B
  [3, 4, 1, 7, 7, 7, 6, 5], #C
  [5, 6, 7, 8, 8, 8, 5, 6]  #D
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

cell =
  (letter, period) ->
    (index, html) ->
      "<div class=\"period\">
        <div class=\"top\">
          <span class=\"time\">7:30 - 8:20</span>
          <span class=\"room\">3033</span>
        </div>
        <h2 class=\"text-center\">#{classes[letter][period]}</h2>
      </div>"



main = () ->
  day = $( "div.day" ).first()
  for letter in [0..3]
    day.append(cell(letter, period)) for period in [0..7]
    day = day.next()

$(document).ready(main)
