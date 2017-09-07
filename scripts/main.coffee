classes = [
  1, 2, 3, 4,
  2, 3, 4, 1,
  3, 4, 1, 2,
  5, 6, 7, 8,
  5, 6, 7, 8,
  5, 6, 7, 8,
  8, 7, 6, 5,
  7, 8, 5, 6
]

main = () ->
  cells = $( "div.period" )
  cells.eq(i).html(classes[i]) for i in [0..27]

$(document).ready(main)
