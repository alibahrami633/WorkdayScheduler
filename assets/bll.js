$(document).ready(function() {
    // adds the current date to the top
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    
    // changes the color of each row based on the id number of textarea and current hour
    var currentHour = parseInt(moment().format("H"));

    // adds the id of texrareas in the container div to values array
    var values = $(".container div").map(function() {
        return $(this).children("textarea").prop("id");
    }).get();

    // iterates through text areas and adds the relevant color
    values.forEach(function(element) {
        //if(element > 12) element -= 12;
        if(parseInt(element) < currentHour) {
            $("#" + element).parent().addClass("past");
        }
        else if(parseInt(element) === currentHour) {            
            $("#" + element).parent().addClass("present");
        }
        else $("#" + element).parent().addClass("future");
    });
    
    // submit button
    $("button").on("click", function() {
        alert("Clicked!");
    });

});
