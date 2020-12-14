/*
 Name: Robert Rodgers
 Assignment: Final Project
 Class: CS 601 Fall 2
 Description of file: Handles AJAX request to display list of military assignments on work page.
 */
$(document).ready(function(){
    console.log("Ready for ajax request");
    // Auto runs makeRequest when document is ready
    $(function(){
        makeRequest();
    });
});

function makeRequest() {
    // AJAX request is made here
    const httpRequest = new XMLHttpRequest();
  
    if(!httpRequest) {
        alert("Problem makeRequest");
        return false;
    }
  
    httpRequest.onreadystatechange = function() {
        if(httpRequest.readyState === XMLHttpRequest.DONE) {
            if(httpRequest.status === 200) {
                const myArray = JSON.parse(httpRequest.responseText).assignments;
                if(Array.isArray(myArray)) {
                    // Creates list items after status == 200 & an array is returned from JSON
                    myArray.forEach((element) => {
                    console.log(element);
                    $("#assignmentsList").append("<li>" + element.assignment.timeInPosition + ", "
                                                        + "<strong>" + element.assignment.position + "</strong>" + ", " 
                                                        + element.assignment.squadron + ", "
                                                        + element.assignment.base + "</li>");
                                                    }
                    );
                } 
                else {
                    console.log("Is not an array", myArray);
                }
            } 
            else {
                alert("There was a problem with the request: STATUS " + httpRequest.status);
            }
        } 
        else {
            // Tracks ready state
            console.log("Progress = ", httpRequest.readyState);
        }
    };	
    
    // This will happen before onreadystatechange
    httpRequest.open("GET", "assignments.json");
    httpRequest.send();
}