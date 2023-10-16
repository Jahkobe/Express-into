const express = require("express");
const app = express();
// console.dir(app);

app.use((req, res) => {
    console.log("We got a new request!")
    // 
    res.send({band: "Slightly Stoopid!"});

})

app.listen(3000, () => {
    console.log("listenign of port 3000!")
})

