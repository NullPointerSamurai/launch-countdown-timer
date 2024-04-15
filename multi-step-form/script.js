// store data from the form with id="userForm"
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Collect the form data
    let name = document.getElementById('name').value;
    // let email = document.getElementById('email').value;
    //let phone = document.getElementById('phone').value;

    // Store the data in localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);

});
