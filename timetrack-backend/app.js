//Imports
const express = require('express');
const path = require('path');

//Create instance of express 
const app = express();

//Import Routers


//static homepage
app.use(express.static(path.resolve(__dirname, './public')));




app.get('/', (req,res) => {
   
    res.sendFile(path.resolve(__dirname, './public/homepage-public/timeTracker.html'));
});

app.get('/user/login', (req,res) => {

    console.log('Request to user/login');
    res.sendFile(path.resolve(__dirname, './loginPage-public/loginPage.html'));

});







//Listen at localhost:3000
app.listen(3000, () => {
    console.log("Server listening on port 3000...")
});

