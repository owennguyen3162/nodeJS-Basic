const express = require("express");

const app = express(); // sử dụng các tính năng của thằng express
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res) => {
    res.send("HELLO")
})
app.listen(PORT, () => console.log("Listening port " + PORT));
