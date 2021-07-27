const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");



const PORT = process.env.PORT || 3000;

// const db = require("./models");
const app = express();

// app.use(logger("dev"));

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use(express.static("public"));
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnesstracker", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});