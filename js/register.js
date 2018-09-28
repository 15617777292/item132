$(document).ready(function () {
    $("i").click(function () {
        $("i").toggleClass("active");
    });
    $("#usn").change(function () {
        var reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
        if (!reg.test($(this).val())) {
            $(".wuser").html('手机号格式不匹配!');
            $("button").prop("disabled", true)
        } else {
            $(".wuser").html('');
            $("button").prop("disabled", false)
        }
    });
    $("#psw").blur(function () {
        if ($("#psw").val().length < 6) {
            $(".wpsw").html('密码太短!');
            $("button").prop("disabled", true)
        } else if ($("#psw").val().length >= 16) {
            $("button").prop("disabled", true)
            $(".wpsw").html('密码太长!');
        } else {
            $("button").prop("disabled", false)
            $(".wpsw").html('');
        }
    })
    $("#btn").click(function () {
        if ($("i").hasClass("active")) {
            if ($.cookie("login")) {
                var oldlogin = $.cookie("login");
                oldlogin = JSON.parse(oldlogin);
                for (var key in oldlogin) {
                    console.log("bbb");
                    if (key == $("#usn").val()) {
                        //console.log("ccc");
                        alert("该手机号已被注册!");
                        location.href="enter.html";
                    } else {
                        //console.log("ddd");
                        var obj = {[$("#usn").val()]: $("#psw").val()};
                        //console.log(obj);
                        obj = JSON.stringify(obj) + $.cookie("login");
                        //console.log(obj);
                        obj = obj.replace("}{", ",");
                        $.cookie.raw=true;
                        $.cookie("login", obj, {expires:7,path:'/'});
                        location.href = "enter.html";
                    }
                }
            } else {
                console.log("eee");
                var oldlogin = "";
                var obj = {[$("#usn").val()]: $("#psw").val()};
                obj = JSON.stringify(obj);
                console.log(obj);
                $.cookie.raw=true;
                $.cookie("login", obj, {expires:7,path:'/'});
                location.href = "enter.html";
            }
        }else {
            alert("请同意协议!")
        }
    })
});