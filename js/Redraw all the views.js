
$(window).load(function () {

    var arrOfJson = [
        {   //  1
            width:400,
            top:70,
            left:50,
            opacity: 0.2,
            "z-index":2
        },
        {  // 2
            width:600,
            top:120,
            left:0,
            opacity: 0.8,
            "z-index":3
        },
        {   // 3
            width:800,
            top:100,
            left:200,
            opacity: 1,
            "z-index":4
        },
        {  // 4
            width:600,
            top:120,
            left:600,
            opacity:0.8,
            "z-index":3
        },
        {   //5
            width:400,
            top:70,
            left:750,
            opacity: 0.2,
            "z-index":2
        }
    ];
    var bool = true;
    $("#slide li").each(function (index,ele) {
        $(ele).css("z-index",arrOfJson[index]["z-index"])
        $(ele).animate(arrOfJson[index],1000);
    });

    $("#wrap").hover(function () {
        $("#arrow").fadeTo(100,1);
    },function () {
        $("#arrow").fadeTo(100,0);
    })


    $(".next").click(function () {
        if(bool == false){
            return;
        }
        bool = false;

        var last = arrOfJson.pop();
        arrOfJson.unshift(last);

        $("#slide li").each(function (index,ele) {
            $(ele).css("z-index",arrOfJson[index]["z-index"])
            $(ele).animate(arrOfJson[index],1000, function () {
                bool = true;
            });
        });
    });

    $(".prev").click(function () {
        var first = arrOfJson.shift();
        arrOfJson.push(first);
        $("#slide li").each(function (index,ele) {
            $(ele).css("z-index",arrOfJson[index]["z-index"])
            $(ele).animate(arrOfJson[index],1000);
        });
    });
});








