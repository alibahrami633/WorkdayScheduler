$(document).ready(function() {
    // adds the current date to the top
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    
    // changes the color of each row based on the id number of textarea and current hour
    var currentHour = parseInt(moment().format("H"));

    // adds the id of texrareas in the container div to values array
    var values = $(".container div").map(function() {
        return $(this).children("textarea").prop("id");
    }).get();

    init();

    // iterates through text areas and adds the relevant color
    values.forEach(function(element) {
        if(parseInt(element) < currentHour) {
            $("#" + element).parent().addClass("past");
        }
        else if(parseInt(element) === currentHour) {            
            $("#" + element).parent().addClass("present");
        }
        else $("#" + element).parent().addClass("future");
    });
    
    storeTasks();    
    
    // reads the local storage and initiates the task element
    function init() {
        values.forEach(function(element) {
            if($("#" + element).text() === "") {
                console.log(localStorage.getItem(element));
                $("#" + element).text(localStorage.getItem(element));
            }
        });
    }
    
    // storing data from textarea - tasks - to the local storage
    function storeTasks() {        
        values.forEach(function(btnNumber) {
            $("#btn" + btnNumber).on("click", function() {
                localStorage.setItem(btnNumber, $.trim($("#" + btnNumber).val()));
            });
        });
    }
});
