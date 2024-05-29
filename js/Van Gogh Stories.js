window.onscroll = move
// 滚动条事件
function move() {
    let left = document.documentElement.scrollLeft; 
    //获取滚动条到元素左边的距离
    if(left < 900) {
        document.getElementById("mybody").className = "yel"
    }else if (left < 1700) {
        document.getElementById("mybody").className = "ora"
    }
}