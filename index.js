const express = require("express");
let app = express();
const path = require("path");
let port = 8081;

// ------------------- Port listening ------------------

app.listen(port , () => {
    console.log(`Listeneing on port ${port}`);
});

// -----------------------------------------------------

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "/views"));

app.get("/" , (req , res) => {
    res.render("home.ejs");
});


// app.get("/rolldice" , (req , res) => {
//     res.render("rolldice.ejs");
// });

// Mostly we will be getting our values / data from database
// Hence other way of writing the above code is :-

app.get("/rolldice" , (req , res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs" , {num : diceVal});   // Here we are also
    // passing an object of key : value pair , bcoz usually in web 
    // development , we will be getting data from our database.
});

