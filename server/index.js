const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const port = 3000;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(`mongodb://localhost/ngrx`,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
})
.then(()=>console.log('Connect to mongodb successfully'))
.catch(err=>console.log(err));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
