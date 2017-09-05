const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const apiai = require('apiai');
const apiaiApp = apiai('8e19b5f4bcee4ca484320e31dfdfebf9');
const FaceBookAccess_Token = 'EAAHA063dws8BAOiWEKN7cAYpncugnKl3wF91HWDtZBv54ZAKmKHi9nGvxtYRrmtL7ZASKxWA8BfFaMpxEtWHDXqQYciKZCPpZAaR8q3Gz1B4VTs6VStDNIrZA4p1hHFcZBSZA7DuRZA30d1SyiUtqYCBSMYDsLgWbS7UE7xGfDZAZBqSFpNOGSspdEI';
var request = require('request');
const fbUrl = 'https://graph.facebook.com/v2.6/';

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Index route
const server = app.listen(process.env.PORT || 5001, () => {
    console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});

// for Facebook verification
app.get('/webhook', (request, response) => {
    if (request.query['hub.verify_token'] === 'abck') {
        response.send(request.query['hub.challenge']);
    } else
        response.send('error, wrong message');
});

/* Handling all messenges */

app.post('/webhook', (request, response) => {
    session.send(req.body.object);
    session.send("You said: %s", request.body.result);
    fs.writeFileSync("./app.json", JSON.stringify(request.body), 'utf8');
    // if (request.body.object === 'page') {
    //     request.body.entry.forEach((entry) => {
    //         entry.messaging.forEach((event) => {
    //             if (event.message && event.message.text) {
    //                 sendMessage(event);
    //             }
    //         });
    //     });
    //     response.send(200).end();
    // }
});



