import dbConnect from "@/db/dbConnect";
import ShortLink from "@/db/models/ShortLink";
import mongoose from "mongoose";

export default async function handler(req, res) {
  await dbConnect();
  //console.log(mongoose.connection.readyState);
  console.log(ShortLink);
  // res.send("안녕 api");

  switch (req.method) {
    case "POST":
      const newShortLink = await ShortLink.create(req.body);
      res.status(201).send(newShortLink);
      break;

    case "GET":
      const shortLinks = await ShortLink.find();
      res.send(shortLinks);
      break;

    default:
      res.status(404).send();
  }
}
