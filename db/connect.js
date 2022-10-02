const mongoose = require("mongoose");

const {DATABASE} = require("../config/keys");

mongoose.connect(DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("database connection successful.....");
}).catch((err) => {
    console.log("error connecting", err);
})
