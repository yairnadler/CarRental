import express from "express"
import carsDictionary from "./model/carsDataBase.js";

const app = express()

app.get('/', (req, res) => {
    res.send({carsDictionary});
  });
  
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });