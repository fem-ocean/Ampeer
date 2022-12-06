

const functions = require("firebase-functions")
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");

//APP CONFIG
const app = express();


//MIDDLEWARES
app.use(cors({ origin: true}));
app.use(express.json());


//API ROUTES
app.post("/", async (request, response) => {
    const payerUID = request.query.user;
    console.log('The payers uid is', payerUID)

    admin.initializeApp();
    // await admin.firestore().collection(`Users`).ref(`${payerUID}`).add({paidUser: true});
    // await admin.firestore().collection(`/Users`, `${payerUID}`).add({paidUser: true})
    admin.firestore().collection('Users').doc(payerUID).set({paidUser:true});


    var x = setInterval(function(){
    
        // var thirtyDays = 2592000;
        var thirtyDays = 180;


        thirtyDays -=1
        
        console.log('User payment has been successfully updated to True')

        if(thirtyDays < 0){
            clearInterval(x);
            // admin.firestore().collection('Users', `${payerUID}`).add({paidUser: false});
            functions.database.ref(/Users/OoYIWBC9U3G7ltxG4cdf).add({paidUser: false});    

        }
    }, 1000);
    response.status(201).send('Hello World')

})


// LISTEN COMMAND
exports.api = functions.https.onRequest(app)


//Example Endpoint
// http://127.0.0.1:5001/ampeer-bac80/us-central1/api