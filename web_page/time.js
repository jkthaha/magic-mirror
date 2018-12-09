function setTime(){
  var d = new Date()
  var hours = d.getHours() //get hours in 24 hr format
  var minutes = d.getMinutes()//get minutes
  var part = "NA"
  if(hours > 11){ //get AM or PM
    part = "PM"
  }
  else{
    part = "AM"
  }
  console.log(hours)
  hours = hours % 12 //convert to 12 hour format
  console.log("After mod")
  if(hours < 10){
    hours = "0" + hours
  }
  if(hours == "00") {
    console.log(hours)
    hours = 12
  }
  if(minutes < 10){
    minutes = "0" + minutes
  }
  document.getElementsByClassName('time-hours')[0].innerText = hours
  document.getElementsByClassName('time-minutes')[0].innerText = minutes
  document.getElementsByClassName('part')[0].innerText = part
}
setTime()
setInterval(setTime, 60000)
