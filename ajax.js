// variables to access DOM elements
const btn = document.querySelector('#btn'),
      userDisplay = document.querySelector('#user');

// load users

btn.addEventListener('click',getUsers);

// functions

function getUsers(e){
    // when we click on button it will stop the default behaviour of loading the page
    e.preventDefault();

    // we are creating a XMLHttpRequest object 
    const http = new XMLHttpRequest();

    // to send  request to the server we use open or send methods of XMLHttpRequest object 
    http.open("GET","users.json", true);

    // the callback function should contain the code to execute when the response is ready.
    http.onload = function(){

        if(this.status === 200){
           // console.log(this.responseText);

           // converting from JSON to string
           const users = JSON.parse(this.responseText);

           let output = "";

           // looping through each user
           users.forEach((user) => {
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
        }
    }

    http.send();



}