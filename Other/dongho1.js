function Clock(){
    var d = new Date();
    //lấy các yếu tố ngày tháng năm hiện tại
    var date=d.getDate();
    var month=d.getMonth()+1;
    var year=d.getFullYear();
    //lấy các yếu tố thời gian hiện tại
    var hour =date.getHours();
    var minute=date.getMinutes();
    var second=date.getSeconds();
    document.getElementById("day").innerHTML=day+" / "+month+" / "+year;
    document.getElementById("time").innerHTML=hour+" : "+minute+" : "+second;
    setTimeout(Clock,1000);
}