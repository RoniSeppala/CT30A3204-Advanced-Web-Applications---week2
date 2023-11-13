//comments
const helloJson = {
    msg: "Hello world"
}

const express = require("express");
const app = express();
const port = 3000;

app.get("/hello", (req,res) => {
    res.send(helloJson)
})

app.listen(3000, () => console.log("server on"))