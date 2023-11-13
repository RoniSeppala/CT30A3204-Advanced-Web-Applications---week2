//comments
const helloJson = {
    msg: "Hello world"
}

const echoJson = {
    id :""
}

const express = require("express");
const app = express();
const port = 3000;

app.get("/hello", (req,res) => {
    res.send(helloJson)
})

app.get("/echo/:id", (req,res) => {
    echoJson.id = req.params.id
    res.send(echoJson)
})

app.listen(3000, () => console.log("server on"))