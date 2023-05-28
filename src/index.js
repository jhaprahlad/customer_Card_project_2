//importig packages
const express = require("express") 
const mongoose = require("mongoose")
const bodyparser = require("body-parser")
const route = require("../routes/route") // importing route file
const app = express() //calling express

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

//connecting database
mongoose
    .connect(
        "mongodb+srv://jhaprahlad:mEG8wRQKwJidfdq2@cluster0.qqlks75.mongodb.net/customer_card_project_2?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
        }
    )
    .then(() => console.log("mongodb is connected"))
    .catch((err) => console.log(err));

const PORT = 5000;

//routing
app.use("/", route)

//starting the server
app.listen(PORT, function () {
    console.log("app is running at port no. :- ", PORT);
});
