/**
 * Created by Administrator on 2016/10/19 0019.
 */
var i = 5;
function $(Nid) {
    return document.getElementById(Nid);
}
$('add_button').observe('click', sure());
function sure() {
    var s = $("add_content").value;
    if (s) {
        var k = confirm("确定将: " + s + " 加入代办事件列表里吗？");
        if (k == true) {
            var li = document.createElement("li");
            var e = document.createElement("input");
            e.setAttribute("type", "checkbox");
            i++;
            e.setAttribute("id", "ini");
            e.setAttribute("name", "test");
            li.appendChild(e);
            li.appendChild(document.createTextNode(s));
            $("cc").appendChild(li);
        }
    }
    else {
        alert("添加的事项不能为空！请先输入待办的事项！")
    }
}

function select() {
    var boxes = document.getElementsByName("test");
    for (var k = 0; k < boxes.length; k++)
        boxes[k].checked = true;
}
function deselect() {
    var boxes = document.getElementsByName("test");
    for (var k = 0; k < boxes.length; k++)
        boxes[k].checked = false;
}
function remv() {
    var temp = 0;
    var os = document.getElementsByName("test");
    for (var k = os.length - 1, temp = 0; k >= 0; k--) {
        if (os[k].checked) {
            var wether = confirm("确定删除所选待办事件?");
            temp++;
            break;
        }
    }
    if (wether) {
        for (var k = os.length - 1; k >= 0; k--) {
            if (os[k].checked) {
                os[k].parentNode.removeChild(next(os[k], 3));
                os[k].parentNode.removeChild(os[k]);
                temp++;
            }
        }
    }
    else{
        for (var k = os.length - 1; k >= 0; k--)
            os[k].checked=false;
    }
    if (temp == 0)
        alert("请先选择要删除的事件！");
}
function next(elem, nodetype) {
    do {
        elem = elem.nextSibling;
    } while (elem && elem.nodeType != nodetype);
    return elem;
}