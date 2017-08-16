/**
 * Created by Administrator on 2016/10/6 0006.
 */
function quicksort(arr) {
    if(arr.length==0)return [];
    var left=new Array();
    var right=new Array();
    var pivot=arr[0];
for(var i=1;i<arr.length;i++)
    {
        if(arr[i]<pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }
    return quicksort(left).concat(pivot,quicksort(right));
}
// function show() {
// }
function qc(a) {
    // document.write("快速排序后：",quicksort(a),"<br />");
    document.getElementById('txt').value=quicksort(a);
}
