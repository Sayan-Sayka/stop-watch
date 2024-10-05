var time = document.getElementsByTagName('h1')[0];
var second=0, minute=0, hour=0, milisecond=0;
var ol = document.getElementsByTagName('ol')[0];
//start time
function watch(){
    milisecond++;
    if(milisecond>99){
        second++;
        milisecond=0;
        if(second>59){
            minute++;
            second=0;
            if(minute>59){
                hour++;
                minute=0;
            }
        }
    }
    //ternary operator ? : (if=?  else=:)
    var ms = milisecond<10 ? "0"+milisecond : milisecond;
    var s = second<10 ? "0"+second : second;
    var m = minute<10 ? "0"+minute : minute;
    var h = hour<10 ? "0"+hour : hour;
    time.innerText=h+":"+m+":"+s+":"+ms;
}
var a;
var startBTN = document.querySelector('.start');
var stopBTN = document.querySelector('.stop');
function start(){
    a=setInterval(watch,10);
    startBTN.disabled=true;
    stopBTN.disabled=false;
}
function stop(){
    clearInterval(a);
    startBTN.disabled=false;
    stopBTN.disabled=true;
}
function restart(){
    second=0, minute=0, hour=0, milisecond=0;
    time.innerText="0"+hour+":0"+minute+":0"+second+":0"+milisecond;
    stopBTN.disabled=false;
    startBTN.disabled=false;
    ol.innerText="";
}
function lap(){
    // document.createElement('tagName') -> create new tag;
    var li = document.createElement('li');
    li.innerText=time.innerText;
    console.log(li);
    // tagName.append(tagName)
    ol.append(li);
}