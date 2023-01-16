const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/calculate", (req, res) => {
  const axios = require("axios");

  const options = {
    method: "GET",
    url: "https://calories-burned-by-api-ninjas.p.rapidapi.com/v1/caloriesburned",
    params: {
      activity: req.query.activity,
      weight: req.query.weight,
      duration: req.query.duration,
    },
    headers: {
      "X-RapidAPI-Key": "b8eb4c64d1msh82f4f5538e5065ap1d2b92jsn7113e96b5efb",
      "X-RapidAPI-Host": "calories-burned-by-api-ninjas.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port} - http://localhost:3000/`);
});
