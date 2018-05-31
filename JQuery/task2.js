/**
 * Created by user on 5/30/2018.
 */
$(document).ready(function(){
    $("#add").on("click",function(){
        for(var i=0;i<5 ; i++){
            var random =Math.random()*10;
            $("#options").append("<option id='id"+random+"'>op"+random+"</option>");
        }
    });
    $("#delete").on("click",function(){
        $("#options").find(":selected").remove();
    });
    $("#empty").on("click",function(){
        $("#options").find(":selected").empty();
    });
});