$(document).ready(function() {
    // adds the current date to the top
    $("#currentDay").text(moment().format("dddd, MMMM Do"));      

    // adds the id of texrareas in the container div to values array
    var values = $(".container div").map(function() {
        return $(this).children("textarea").prop("id");
    }).get();

    init();
    
    addColor();
    
    storeTasks();    
    
    // iterates through text areas and adds the relevant color
    function addColor() {        
        var currentHour = parseInt(moment().format("H"));

        values.forEach(function(element) {
            if(parseInt(element) < currentHour) {
                $("#" + element).parent().addClass("past");
            }
            else if(parseInt(element) === currentHour) {            
                $("#" + element).parent().addClass("present");
            }
            else $("#" + element).parent().addClass("future");
        });
    }

    // reads the local storage and initiates the task element
    function init() {
        values.forEach(function(element) {
            $("#" + element).text(localStorage.getItem(element));
        });
    }
    
    // storing data from textarea - tasks - to the local storage
    function storeTasks() {        
        values.forEach(function(btnNumber) {
            $("#btn" + btnNumber).on("click", function() {
                localStorage.setItem(btnNumber, $.trim($("#" + btnNumber).val()));
                alert("Your task was saved successfully!");
            });
        });
    }
});
