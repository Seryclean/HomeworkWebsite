$(document).ready(function(){
    $("#bt").on('click',function(){
        $("body").toggleClass("newcolorA");
        $("div.intro").toggleClass("newcolorB");
        $("div.navbar").addClass("nav-dark").toggleClass("newcolorC");
        $("div.table").addClass("table-dark").toggleClass("newcolorD");
    });
});