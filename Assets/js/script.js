// current real-time day displaying
currentDay = $("#currentDay").text(moment().format("dddd, MMMM D, YYYY"));
// timeblocks displaying 9-5pm.
// getting current times and compare them to timeblocks
function getCurrentClass(rowHour) {
  var currentTime = moment();
  var rowTime = moment(currentTime);

  rowTime.set({ hour: rowHour });

  if (currentTime.isSame(rowTime, "hour")) {
    return "present";
  } else if (currentTime.isAfter(rowTime, "hour")) {
    return "past";
  } else {
    return "future";
  }
}
// setting the color for each timeblock based on results
function setColor(hour) {
  var row = $("#" + hour);
  var className = getCurrentClass(hour);

  row.attr("class", "col-9 time-block " + className);
}

var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
for (var i = 0; i < hours.length; i++) {
  setColor(hours[i]);
  loadBlock(hours[i]);
}
// when the save button is pressed data is saved in local storage
function saveBlock(id) {
  var blockContent = $("#" + id).val();

  localStorage.setItem("blockContent" + id, blockContent);
}
// saved data in timeblocks don't disappear after reloading the page
function loadBlock(id) {
  var blockContent = localStorage.getItem("blockContent" + id);
  $("#" + id).val(blockContent);
}
