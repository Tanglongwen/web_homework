/**
 * Created by Administrator on 2016/10/8 0008.
 */
var s=1;
function $(Nid) {
    return document.getElementById(Nid);
}
function delayMsg() {
        setInterval(booyah,3000);
        setInterval(aooyah,6000);
    headercolor();
}
function booyah() {
  $("li_1").style.color="red";
    $("li_2").style.color="#17FFF0";
    $("li_3").style.color="#66FF2B";
    $("li_4").style.color="#FFFA93 ";
}
function aooyah() {
    $("li_1").style.color="white";
    $("li_2").style.color="white";
    $("li_3").style.color="white";
    $("li_4").style.color="white";
}
function headercolor() {
    s++;
    if(s==5) {s=1};
    if(s==1) {$("hline").style.color="#17FFF0";}
    if(s==2) {$("hline").style.color="#66FF2B";}
    if(s==3){$("hline").style.color="#FFFA93";}
    if(s==4) {$("hline").style.color="red";}
    setTimeout("headercolor()",3000);
}