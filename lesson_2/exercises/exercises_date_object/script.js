var today = new Date();

function formattedDateOfMonth(date) {
  var suffix = "th";
  var date_string= date.getDate().toString();

  if (date_string.length === 1) { digit = date_string; }
  else if (date_string[0] !== "1") { digit = date_string[1]; }

  if (digit == 1) { suffix = "st"; }
  else if (digit == 2) { suffix = "nd"; }
  else if (digit == 3) { suffix = "rd"; }

  return date_string + suffix;
}

function formattedDay(date) {
  var days_of_week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days_of_week[date.getDay()];
}

function formattedMonth(date) {
  var months_of_year = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return months_of_year[date.getMonth()];
}

function formattedYear(date) {
  return date.getFullYear();
}

function formattedDate(date) {
  var day = formattedDay(date);
  var month = formattedMonth(date);
  var dateOfMonth = formattedDateOfMonth(date);
  var year = formattedYear(date);

  return day + ", the " + dateOfMonth + " of " + month + " in " + year;
}

console.log("Today's date is " + formattedDate(today));
console.log(today.getTime());

var tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);
console.log("Tomorrow's date is " + formattedDate(tomorrow));

var next_week = new Date(today);
console.log("Next week's date is " + formattedDate(next_week));
console.log(next_week.toDateString() === today.toDateString());

next_week.setDate(today.getDate() + 7);
console.log("Next week's date is " + formattedDate(next_week));
console.log(next_week.toDateString() === today.toDateString());

function formatTime(date) {
  var hour = addZero(date.getHours());
  var minutes = addZero(date.getMinutes());

  if (hour.length == 1) { hour = "0" + hour; }

  return hour + ":" + minutes;
}

function addZero(val) {
  return String(val).length < 2 ? "0" + val : val;
}
console.log(formatTime(today));