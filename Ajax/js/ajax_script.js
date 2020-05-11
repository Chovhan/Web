$(document).ready(function () {
    let a = $('input[type="button"]');
    for (let i = 0; i < a.length; i++) {
        console.log(a[i]);
        $("#" + (a[i].id).toString()).click(function(){
            let data = JSON.stringify({value : $("#text" + parseInt(a[i].id.replace(/\D+/g,""))).val(), browser : ajaxFunction()});
            console.log(data);
            $.ajax
            ({
                type: "POST",
                data: data,
                contentType: 'application/json',
                url: '/data',
                success: function(serverData) {
                    let responseFromServer = JSON.stringify(serverData);
                    console.log(responseFromServer);
                },
                error: function(e) {
                    console.log("Eror");
                }
            });
        });
    }
    function ajaxFunction() {
        let ajaxRequest;
        let flag = true;

        try {
            ajaxRequest = new XMLHttpRequest();
        } catch (e) {

            try {
                ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {

                try {
                    ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
                } catch (e) {

                    flag = false;
                }
            }
        }
        return flag;
    }
});
