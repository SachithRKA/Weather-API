import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://api.weatherbit.io/v2.0/current";
//const API_key = "d8d318e7ce254f24ae73fdd5cd4d31c2";
//const CITY = "Toronto";
//const COUNTRY_CODE = "CA";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Waiting for data..." });
});

app.post("/get-weather", async (req, res) => {
  const API_key = req.body["api"];
  const CITY = req.body["city"];
  const COUNTRY_CODE = req.body["country"];

  try {
    const result = await axios.get(`${API_URL}?city=${CITY}&country_code=${COUNTRY_CODE}&key=${API_key}`);
    const dataS = result.data.data[0];
    res.render("index.ejs", { 
      temperature: dataS.temp,
      airQualityIndex: dataS.aqi,
      observationTime: dataS.ob_time,
      weatherDescription: dataS.weather.description,
      windSpeed: dataS.wind_spd,
      windDirection: dataS.wind_cdir_full,
      humidity: dataS.rh,
      precipitation: dataS.precip
    });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  