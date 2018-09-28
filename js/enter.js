$(document).ready(function(){
    $("#btn").click(function () {
        if ($.cookie('login')) {
            var oldlogin = $.cookie('login');
            console.log(oldlogin);
            console.log($("#usn").val());
            console.log($("#psw").val());
            oldlogin = JSON.parse(oldlogin);
            console.log(oldlogin);
            var flag = false;
            for (var key in oldlogin) {
                if ($("#usn").val() == key && $("#psw").val() == oldlogin[key]) {
                    console.log("bb");
                    $.cookie.raw = true;
                    $.cookie("user", key, {expires: 7, path: '/'})
                    //$.cookie(key, {}, {expires: 7, path: '/'})
                    location.href = "../index.html";
                    break;
                } else {
                    flag = true;
                }
            }
            if (flag == true) {
                $(".info").html('账号密码不匹配!');
                $(".info").addClass("active");
            }
        }else{
            $(".info").html('账号密码不匹配!');
            $(".info").addClass("active");
        }
    })
});