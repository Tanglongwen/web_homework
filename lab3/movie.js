/**
 * Created by Administrator on 2016/10/7 0007.
 */
function movie(arr) {
    var list=new Array();
    if (arr.length==0) return;
    else{
        for (var i=0;i<arr.length;i++)
           list.unshift(arr[i]);
    }
    return list;
}
function $(Nid) {
    return document.getElementById(Nid);
}
function sort() {
    var a=new Array(4);
    a[0]=$("li_1").innerHTML;
    a[1]=$("li_2").innerHTML;
    a[2]=$("li_3").innerHTML;
    a[3]=$("li_4").innerHTML;
    alert("倒序后："+movie(a));
}