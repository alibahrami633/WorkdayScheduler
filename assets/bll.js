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
        if(parseInt(element) < currentHour) {
            $("#" + element).parent().addClass("past");
        }
        else if(parseInt(element) === currentHour) {            
            $("#" + element).parent().addClass("present");
        }
        else $("#" + element).parent().addClass("future");
    });
    


    // adds fucntionality to submit buttons
    values.forEach(function(btnNumber) {
        // $("#btn" + btnNumber).on("click", function() {
        //     alert($("#btn" + btnNumber).parent().siblings().find(btnNumber).text());
        // });
        $("#btn" + btnNumber).on("click", function() {
            var value = $.trim($("#" + btnNumber).val());

            localStorage.setItem(btnNumber, value)
            
        });
    });




    function init() {
        // Get stored todos from localStorage
        // Parsing the JSON string to an object
        // var storedTodos = JSON.parse(localStorage.getItem("todos"));
      
        // If todos were retrieved from localStorage, update the todos array to it
        // if (storedTodos !== null) {
        //   todos = storedTodos;
        // }
      
        // Render todos to the DOM
        // renderTasks();
    }
    
    function storeTasks() {        
        //localStorage.setItem("tasks", JSON.stringify(values));
    }

});
