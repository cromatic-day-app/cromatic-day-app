const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const mongoose = require("mongoose");
const request = require("request-promise");
const Artwork = require("../models/Artwork");

mongoose
  .connect(`${process.env.LOCAL_MONGO}`, { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

let genresArray = ["Architecture", "Van Gogh"];

genresArray.forEach(genre => {
  Artwork.deleteMany().then(() => {
    request(
      `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${genre}`
    )
      .then(allData => {
        data = JSON.parse(allData);
        data.objectIDs.slice(0, 10).forEach(dataID => {
          request(
            `https://collectionapi.metmuseum.org/public/collection/v1/objects/${dataID}`
          ).then(picture => {
            picture = JSON.parse(picture);
            let { title, primaryImageSmall, artistDisplayName } = picture;
            newArtwork = new Artwork({
              title: title,
              primaryImageSmall: primaryImageSmall,
              artistDisplayName: artistDisplayName,
              price: 10,
              date: randomDate(new Date(), new Date(2019, 4, 30)),
              tag: genre
            });
            newArtwork
              .save()
              .then(() => {
                console.log("ok");
              })
              .catch(err => console.log(err));
          });
        });
      })
      .catch(err => console.log(err));
  });
});