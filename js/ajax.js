$(document).ready(function(){
    makeRequest();
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
                let myArray = JSON.parse(httpRequest.responseText).assignments;
                if(Array.isArray(myArray)) {
                    // Creates list items after status == 200 & an array is returned from JSON
                    myArray.forEach((element) => {
                    console.log(element);
                    $('#assignmentsList').append('<li>' + element.assignment.timeInPosition + ', '
                                                        + element.assignment.position + ', ' 
                                                        + element.assignment.squadron + ', '
                                                        + element.assignment.base + '</li>');
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