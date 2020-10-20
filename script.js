var time = 10;
var minutes = 0;
var seconds = 0;
var interval = null;

$("#fire").click(function(){
  if(interval) return; // dont start the clock multiple times
  
  minutes = time;
  interval = setInterval(function(){
    seconds--;
    if(seconds < 0){
      minutes--;
      seconds = 59;
    }
    if(minutes < 0){
      seconds = 0;
      minutes = 0;
      clearInterval(interval);
      interval = null;
    }
    $("#time").text(zeroPad(minutes)+":"+zeroPad(seconds));
  }, 1000);
});

$("#reset").click(function(){
  if(!interval) return;
  clearInterval(interval);
  interval = null;
  $("#time").text("00:00");
});

$("#lengthPlus").click(function(){
  time++;
  $("#length").text(time);
});
$("#lengthMinus").click(function(){
  time--;
  $("#length").text(time);
});

function zeroPad(x){
  return (x+"").length==1?"0"+x:x;
}