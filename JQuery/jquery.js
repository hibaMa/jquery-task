/**
 * Created by user on 5/30/2018.
 */
$(document).ready(function(){
    $("#apply").on("click",function(){
        var value=$("#thingToAdd").val();
        var divID=$("#place").val();
        $(divID).append(value);
    });
});