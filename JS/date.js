const todayDate = document.querySelector(".todayDate");
const todayDay = document.querySelector(".day");

function returnDay(num) {
  const dayArr = [
    "(Mon)",
    "(Tue)",
    "(Wed)",
    "(Thu)",
    "(Fri)",
    "(Sat)",
    "(Sun)",
  ];
  return dayArr[num];
}

function returnMonth(num) {
  const monthArr = [
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May.",
    "Jun.",
    "Jul.",
    "Aug.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Dec.",
  ];
  return monthArr[num];
}

function init() {
  const today = new Date();
  const month = returnMonth(today.getMonth());
  const date = today.getDate();
  const day = returnDay(today.getDay());

  todayDate.innerText = `${month} ${date}`;
  todayDay.innerText = day;
}

init();
