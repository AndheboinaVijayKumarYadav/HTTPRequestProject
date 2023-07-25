// variables to access DOM elements
const btn = document.querySelector('#btn'),
      userDisplay = document.querySelector('#user');

// load users

btn.addEventListener('click',getUsers);

// functions

function getUsers(e) {

    // when we click on button it will stop the default behaviour of loading the page
    e.preventDefault();

    fetch("users.json")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        // console.log(data);
        let output ="";
        data.forEach((user) => {
            output += `
            <ul>
                    <li>ID: ${user.id}</li>
                    <li>Name: ${user.name}</li>
                    <li>Age: ${user.age}</li>
                    <li>email: ${user.email}</li>
            
            </ul>
            
            `
       });
       document.getElementById('users').innerHTML = output;
    })
}