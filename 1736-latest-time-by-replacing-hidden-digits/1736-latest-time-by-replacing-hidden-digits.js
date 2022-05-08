/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function (time) {
  let timeArray = time.split(":");
  let hour = timeArray[0];
  let min = timeArray[1];
  let newHour = "";
  let newMin = "";

  if (hour.charAt(0) === "?") {
    if (hour.charAt(1) === "?") {
      newHour += "2";
    } else {
      if (Number(hour.charAt(1)) > 3) {
        newHour += "1";
      } else {
        newHour += "2";
      }
    }
  } else newHour += hour.charAt(0);
  if (hour.charAt(1) === "?") {
    if (newHour.charAt(0) === "2") newHour += "3";
    else newHour += "9";
  } else newHour += hour.charAt(1);

  if (min.charAt(0) === "?") newMin += "5";
  else newMin += min.charAt(0);
  if (min.charAt(1) === "?") newMin += "9";
  else newMin += min.charAt(1);

  return newHour + ":" + newMin;
};
