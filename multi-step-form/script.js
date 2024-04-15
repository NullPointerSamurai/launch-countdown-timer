// step 1 - store data from the form with id="userForm"
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Collect the form data
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

    // Store the data in localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    
    // Redirect to the next page after storing the data
    window.location.href = 'step-2.html';

});

// step 2
let storedName = localStorage.getItem('name');
//let storedEmail = localStorage.getItem('email');
//let storedPhone = localStorage.getItem('phone');

// Display the retrieved name in an element with the ID 'demo'
document.getElementById("test1").innerHTML = storedName;

// Show an alert with the stored name
alert("Stored name: " + storedName);

