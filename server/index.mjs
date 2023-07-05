import express from "express";
import cors from "cors";
import { countries, stations } from "./countries.mjs";
import flightData from "./flights.mjs";

const app = express();

app.use(cors());

app.get("/countries", (req, res) => {
  res.json({
    countries,
    stations: stations.map((s) => {
      return {
        tlc: s.tlc,
        name: s.name,
        countryCode: s.countryCode,
        isOrigin: s.isOrigin,
        isDestination: s.isDestination,
      };
    }),
  });
});

app.get("/priceOffers", (req, res) => {
  const filteredData = flightData.filter(
    (f) => f.offerType === req.query.offer
  );
  res.json(filteredData)
  // const pageCount = Math.ceil(filteredData.length / 10);
  // let page = parseInt(req.query.p);
  // if (!page) {
  //   page = 1;
  // }
  // if (page > pageCount) {
  //   page = pageCount;
  // }
  // res.json({
  //   "page": page,
  //   "pageCount": pageCount,
  //   "offers": filteredData.slice(page * 10 - 10, page * 10)
  // });
});

app.listen(8001, () => {
  console.log("Serving on 8001");
});
