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

app.use(express.json());

app.get("/hello", (req,res) => {
    res.send(helloJson)
})

app.get("/echo/:id", (req,res) => {
    echoJson.id = req.params.id
    res.send(echoJson)
})

app.post("/sum", (req,res) => {
    numbers = req.body.numbers;
    sum = 0;

    numbers.forEach(number => {
        sum += number
    });

    res.send({"sum":sum})
})

app.listen(port, () => console.log("server on"))