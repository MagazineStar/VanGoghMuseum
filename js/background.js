window.addEventListener('load',function() {
    let mybody = document.querySelector('#mybody')
    // console.log(mybody);
    // window.onscroll = move;
    // //滚动条滚动事件
    // function move() {
    //     let left = document.documentElement.scrollLeft; 
    //     //获取滚动条到元素左边的距离
    //     if(left < 500) {
    //         mybody.className = "yel"
    //     }else if (left < 900) {
    //         mybody.className = "ora"
    //     }else if (left > 1200) {
    //         mybody.className = "per"
    //     }
    // }

    //滚动事件window
    // console.log(mybody);
    window.addEventListener('scroll', function() {
        //document.documentElement是页面html文档返回的html元素
        let left = document.documentElement.scrollLeft
        console.log(document.documentElement.scrollLeft);
        if(left <500) {
            mybody.className = "yel"
        }else if(left <900) {
            mybody.className = "ora"
        }else if (left > 1200) {
            mybody.className = "per"
        }
    })
})