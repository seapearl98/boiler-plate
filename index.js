const express = require("express");
const app = express();
const port = 4000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://gown1977:fjqm74159@cluster0.uy2unfc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    // {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useCreateIndex: true,
    //   useFindAndModify: false,
    // }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
