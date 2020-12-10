$(document).ready(function(){
    window.onload = makeRequest;
    // Button makes call for AJAX request using JQuery
    // $('#btn').click(function(){
    //     makeRequest();
    // });
});

function makeRequest() {
    // AJAX request is made here
    let httpRequest = new XMLHttpRequest();
  
    if(!httpRequest) {
        alert("Problem makeRequest");
        return false;
    }
  
    httpRequest.onreadystatechange = function() {
        if(httpRequest.readyState === XMLHttpRequest.DONE) {
            if(httpRequest.status === 200) {
                let myArray = JSON.parse(httpRequest.responseText).myDegreesEarned;
                if(Array.isArray(myArray)) {
                    // Creates list items after status == 200 & an array is returned from JSON
                    myArray.forEach((element) => {
                    console.log(element);
                    $('#assignmentsList').append('<ol>' + '<li>' + element.assignment.timeInPosition + '</li>'
                                                      + '<li>' + element.assignment.position + '</li>'
                                                      + '<li>' + element.assignment.squadron + '</li>'
                                                      + '<li>' + element.assignment.base + '</li>');
                    }
                    );
                } 
                else {
                    console.log('Is not an array', myArray);
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
    httpRequest.open('GET', 'assignments.json');
    httpRequest.send();
}