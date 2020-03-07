$(document).ready(function() {
    // adds the current date to the top
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    // colors day rows
    var currentHour = parseInt(moment().format("H"));
    
    console.log(moment().format("H"));

    var values = $(".container div").map(function() {
        return $(this).children("textarea").prop("id");
    }).get();

    values.forEach(function(element) {
        //if(element > 12) element -= 12;
        if(parseInt(element) < currentHour) {
            $("#" + element).parent().css("background-color", "grey");
        }
        else if(parseInt(element) === currentHour) {            
            $("#" + element).parent().css("background-color", "red");
        }
        else  $("#" + element).parent().css("background-color", "green");
    });
    //console.log(JSON.stringify(values));
    // $(".container").each(function(){
    //     var id = $("id")
    // });
    

    //var span = $(".container div div span");
    
    //console.log(span.text());
    // $(".container").each(function() {
    //     var id = parseInt($(this).children("div").prop("id"));
    //     if(id < 12) {
    //         $("#" + id).css("background-color", "red");
    //     }
    // });

    // $("textarea").addClass("present");

    // submit button
    $("button").on("click", function() {
        alert("Clicked!");
    });

});
