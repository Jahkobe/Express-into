const express = require("express");
const app = express();
// console.dir(app);

// app.use((req, res) => {
//     console.log("We got a new request!")
//     // 
//     res.send({band: "Slightly Stoopid!"});
// })

app.get('/', (req, res) => {
    res.send("home, let me go hooomme, home is wherever im with you!")
})

app.get('/r/:subreddit', (req, res) => {
    // console.log(req.params)
    const {subreddit} = req.params;
    res.send(`<h1>Checking out the album: ${subreddit}!</h1>`)
})

app.get('/music', (req, res) => {
    res.send("Excuse me while i kiss the sky!")
})

app.post('/music', (req, res) => {
    res.send("Post request to /music!")
})

app.get('/games', (req, res) => {
    res.send("It's a me Mario!");
})

app.listen(3000, () => {
    console.log("listenign of port 3000!")
})

