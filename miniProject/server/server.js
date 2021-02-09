const express = require("express");
const mongodb = require("mongodb");
const cors = require("cors");
const bodyparser = require("body-parser");

//create the rest object
let app = express();

//enable the cors policy
app.use(cors());

//set the json as MIME Type
app.use(bodyparser.json());

//read the json
app.use(bodyparser.urlencoded({ extended: false }));

let ashokIT = mongodb.MongoClient;

//create the get request
app.get("/products", (req, res) => {
  console.log("inside get request");
  ashokIT.connect(
    "mongodb+srv://root:root@cluster0.vladg.mongodb.net/miniproject?retryWrites=true&w=majority",{ useUnifiedTopology: true },
    (err, connection) => {
      console.log("inside CONNECTION-------------------------");
      if (err) {
        console.log("inside ERROR.......................??????");
        throw err;
      } else {
        console.log(
          "inside connection else block................................."
        );
        let db = connection.db("miniproject");
        db.collection("products")
          .find()
          .toArray((err, array) => {
            if (err) throw err;
            else {
              res.send(array);
            }
          });
      }
    }
  );
});

//assign the port number
let port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Server Started");
});
